import { $Enums } from "../../generated/prisma";
import { IRecipeIngredient } from "../types/recipes";

export const Quantities = {
  toString: (ingredient?: Pick<IRecipeIngredient, 'unit' | 'quantity'>) => {
    if (!ingredient) {
      return;
    }

    const unit = ingredient.unit;
    if (!unit || unit === $Enums.Unit.NONE) {
      return;
    }

    if (unit === $Enums.Unit.NUMBER) {
      return `${ingredient.quantity}`;
    }

    return `${parseFloat(ingredient.quantity!.toFixed(2))}${unit}`;
  },
  toStringWithIngredient: (
    ingredient: Pick<IRecipeIngredient, 'unit' | 'quantity' | 'name'>
  ) => {
    {
      const quantityString = Quantities.toString(ingredient);

      if (!quantityString) {
        return ingredient.name;
      } else {
        return quantityString + " " + ingredient.name.toLowerCase();
      }
    }
  },
};
