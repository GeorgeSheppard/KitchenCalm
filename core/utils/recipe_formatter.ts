import { IRecipe } from "../types/recipes";

export const recipeToString = (recipe: IRecipe): string => {
  if (!recipe || !recipe.uuid) {
    return "";
  }

  const lines: string[] = [];

  // Add recipe name
  if (recipe.name) {
    lines.push(`Recipe: ${recipe.name}`);
  }

  // Add description
  if (recipe.description) {
    lines.push(`Description: ${recipe.description}`);
  }

  // Add components
  if (recipe.components && recipe.components.length > 0) {
    lines.push("");
    recipe.components.forEach((component) => {
      lines.push(`## ${component.name}`);

      // Add servings if present
      if (component.servings) {
        lines.push(`Servings: ${component.servings}`);
      }

      // Add ingredients
      if (component.ingredients && component.ingredients.length > 0) {
        lines.push("Ingredients:");
        component.ingredients.forEach((ingredient) => {
          const quantity =
            ingredient.quantity.value && ingredient.quantity.unit !== "none"
              ? `${ingredient.quantity.value} ${ingredient.quantity.unit}`
              : ingredient.quantity.unit !== "none"
                ? ingredient.quantity.unit
                : "";
          const quantityStr = quantity ? `${quantity} ` : "";
          lines.push(`  - ${quantityStr}${ingredient.name}`);
        });
      }

      // Add instructions
      if (component.instructions && component.instructions.length > 0) {
        lines.push("Instructions:");
        component.instructions.forEach((instruction, index) => {
          const optional = instruction.optional ? " (optional)" : "";
          lines.push(`  ${index + 1}. ${instruction.text}${optional}`);
        });
      }

      // Add storeable flag if true
      if (component.storeable) {
        lines.push("Storeable: Yes");
      }

      lines.push("");
    });
  }

  return lines.join("\n");
};

export const isNewRecipe = (recipe: IRecipe): boolean => {
  // A recipe is considered new if it has no name and no components
  return !recipe.name && (!recipe.components || recipe.components.length === 0);
};
