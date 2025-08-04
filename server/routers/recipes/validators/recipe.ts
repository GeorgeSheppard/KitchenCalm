import { z } from "zod";
import {
  IRecipe,
  IRecipeComponent,
  IRecipeImage,
  IRecipeIngredient,
  IRecipeInstruction,
} from "../../../../core/types/recipes";
import { $Enums } from "../../../../generated/prisma";

const imageValidator: z.ZodType<IRecipeImage> = z.object({
  id: z.string(),
  recipeId: z.string(),
  imageData: z.string(),
  mimeType: z.string(),
  timestamp: z.bigint(),
  key: z.string(),
});
const ingredientValidator: z.ZodType<IRecipeIngredient> = z.object({
  name: z.string(),
  unit: z.nativeEnum($Enums.Unit),
  quantity: z.number(),
});
const instructionValidator: z.ZodType<IRecipeInstruction> = z.object({
  instruction: z.string(),
  optional: z.boolean()
});

const componentValidator: z.ZodType<IRecipeComponent> = z.object({
  name: z.string(),
  uuid: z.string(),
  ingredients: ingredientValidator.array(),
  instructions: instructionValidator.array(),
  storeable: z.boolean(),
  servings: z.number()
});

export const recipeValidator: z.ZodType<IRecipe> = z.object({
  uuid: z.string(),
  name: z.string(),
  description: z.string(),
  images: imageValidator.array(),
  components: componentValidator.array()
})
