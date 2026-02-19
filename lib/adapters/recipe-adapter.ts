import { IRecipe, IRecipeComponent, Unit } from "../../core/types/recipes";
import type { Recipe, RecipePart, Ingredient } from "../recipe-data";

function unitToString(unit: Unit): string | undefined {
  switch (unit) {
    case Unit.NO_UNIT:
      return undefined;
    case Unit.NUMBER:
      return undefined;
    case Unit.MILLILITER:
      return "mL";
    case Unit.LITER:
      return "L";
    case Unit.GRAM:
      return "g";
    case Unit.KILOGRAM:
      return "kg";
    case Unit.CUP:
      return "cup";
    case Unit.TEASPOON:
      return "tsp";
    case Unit.TABLESPOON:
      return "tbsp";
    default:
      return unit;
  }
}

function componentToRecipePart(component: IRecipeComponent): RecipePart {
  return {
    title: component.name || "Main",
    ingredients: component.ingredients.map((ing): Ingredient => {
      const amount =
        ing.quantity.value !== undefined ? ing.quantity.value.toString() : "";
      const unit = unitToString(ing.quantity.unit);
      return {
        name: ing.name,
        amount,
        ...(unit ? { unit } : {}),
      };
    }),
    instructions: component.instructions.map((inst) => inst.text),
  };
}

export function iRecipeToRecipe(
  iRecipe: IRecipe,
  imageUrl?: string
): Recipe {
  const servings = iRecipe.components[0]?.servings;
  const servingsStr = servings ? `${servings} servings` : "";

  return {
    title: iRecipe.name || "Untitled Recipe",
    description: iRecipe.description || "",
    image: imageUrl || "/placeholder.svg",
    prepTime: "",
    cookTime: "",
    totalTime: "",
    servings: servingsStr,
    difficulty: "Medium",
    tags: [],
    parts: iRecipe.components.map(componentToRecipePart),
  };
}
