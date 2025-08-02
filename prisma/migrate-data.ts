import { PrismaClient } from '../generated/prisma';
import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
import { Buffer } from 'buffer';
import { v4 as uuid } from 'uuid';

const prisma = new PrismaClient();

interface DynamoDBItem {
  UserId: string;
  Item: string;
  components: string;
  description: string;
  images: string;
  name: string;
  uuid: string;
  [key: string]: string; // For date columns
}

interface DynamoDBComponent {
  M: {
    name: { S: string };
    ingredients: { L: DynamoDBIngredient[] };
    instructions: { L: DynamoDBInstruction[] };
    servings?: { N: string };
    storeable?: { BOOL: boolean };
    uuid: { S: string };
  };
}

interface DynamoDBIngredient {
  M: {
    name: { S: string };
    quantity: {
      M: {
        value?: { N: string };
        unit: { S: string };
      };
    };
  };
}

interface DynamoDBInstruction {
  M: {
    text: { S: string };
    optional?: { BOOL: boolean };
  };
}

interface DynamoDBImage {
  M: {
    key: { S: string };
    timestamp: { N: string };
  };
}

async function downloadImageAsBase64(imageKey: string): Promise<{ data: Buffer; mimeType: string } | null> {
  try {
    // Since we don't have S3 access, we'll create a placeholder
    // In a real migration, you'd download from S3 using the key
    console.log(`Would download image: ${imageKey}`);
    
    // Create a small placeholder image (1x1 PNG)
    const placeholder = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');
    
    return {
      data: placeholder,
      mimeType: 'image/png'
    };
  } catch (error) {
    console.error(`Failed to download image ${imageKey}:`, error);
    return null;
  }
}

function parseJsonSafely(jsonString: string): any {
  try {
    if (!jsonString || jsonString.trim() === '') return null;
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    return null;
  }
}

function extractQuantityValue(quantity: any): number | null {
  if (!quantity?.M?.value?.N) return null;
  const value = parseFloat(quantity.M.value.N);
  return isNaN(value) ? null : value;
}

function extractUnit(quantity: any): string {
  return quantity?.M?.unit?.S || 'none';
}

async function migrateRecipe(item: DynamoDBItem): Promise<void> {
  const components = parseJsonSafely(item.components) as DynamoDBComponent[];
  if (!components || !Array.isArray(components)) {
    console.log(`Skipping recipe ${item.name} - invalid components`);
    return;
  }

  const images = parseJsonSafely(item.images) as DynamoDBImage[];
  
  console.log(`Migrating recipe: ${item.name} (generating new UUID)`);

  // Create or find user
  let user = await prisma.user.findUnique({
    where: { id: item.UserId }
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        id: item.UserId,
        email: `user-${item.UserId}@example.com`, // Placeholder email
        name: `User ${item.UserId}`,
      }
    });
  }

  // Create recipe with new UUID
  const recipe = await prisma.recipe.create({
    data: {
      uuid: uuid(),
      name: item.name,
      description: item.description || '',
      createdById: user.id,
    }
  });

  // Process images
  if (images && Array.isArray(images)) {
    for (const img of images) {
      const imageData = await downloadImageAsBase64(img.M.key.S);
      if (imageData) {
        await prisma.recipeImage.create({
          data: {
            timestamp: BigInt(img.M.timestamp.N),
            key: img.M.key.S,
            imageData: imageData.data.toString('base64'),
            mimeType: imageData.mimeType,
            recipeId: recipe.id,
          }
        });
      }
    }
  }

  // Process components
  for (let i = 0; i < components.length; i++) {
    const comp = components[i];
    if (!comp?.M) continue;

    const recipeComponent = await prisma.recipeComponent.create({
      data: {
        uuid: uuid(),
        name: comp.M.name.S,
        recipeId: recipe.id,
        servings: comp.M.servings ? parseInt(comp.M.servings.N) : null,
        storeable: comp.M.storeable?.BOOL || false,
        order: i,
      }
    });

    // Process ingredients
    if (comp.M.ingredients?.L) {
      for (let j = 0; j < comp.M.ingredients.L.length; j++) {
        const ing = comp.M.ingredients.L[j];
        if (!ing?.M) continue;

        await prisma.recipeIngredient.create({
          data: {
            uuid: uuid(),
            name: ing.M.name.S,
            quantity: extractQuantityValue(ing.M.quantity) || 0,
            unit: extractUnit(ing.M.quantity),
            order: j,
            componentId: recipeComponent.id,
          }
        });
      }
    }

    // Process instructions
    if (comp.M.instructions?.L) {
      for (let j = 0; j < comp.M.instructions.L.length; j++) {
        const inst = comp.M.instructions.L[j];
        if (!inst?.M) continue;

        await prisma.recipeInstruction.create({
          data: {
            uuid: uuid(),
            instruction: inst.M.text.S,
            order: j,
            componentId: recipeComponent.id,
          }
        });
      }
    }
  }
}





async function main() {
  console.log('Starting data migration...');

  // Read and parse CSV
  const csvData = readFileSync('prisma/results.csv', 'utf-8');
  const records = parse(csvData, { 
    columns: true, 
    skip_empty_lines: true 
  }) as DynamoDBItem[];

  // Filter to only include individual recipe entries (skip meal plan and shared recipe data)
  const recipeRecords = records.filter(item => 
    item.Item.startsWith('R-')
  );

  console.log(`Found ${records.length} total records, processing ${recipeRecords.length} individual recipe records (skipping meal plan and shared recipe data)`);

  // Process each individual recipe record
  for (const item of recipeRecords) {
    try {
      if (item.Item.startsWith('R-')) {
        // Individual recipe
        await migrateRecipe(item);
      } else {
        console.log(`Unknown item type: ${item.Item}`);
      }
    } catch (error) {
      console.error(`Error processing item ${item.name}:`, error);
    }
  }

  console.log('Migration completed!');
}

main()
  .catch((e) => {
    console.error('Migration failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 