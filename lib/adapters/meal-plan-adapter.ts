import { IMealPlan } from "../../core/types/meal_plan";
import { IRecipe, RecipeUuid } from "../../core/types/recipes";
import type { PlannedMeal } from "../meal-planner-data";
import { parseServingsNumber } from "../meal-planner-data";
import { iRecipeToRecipe } from "./recipe-adapter";

/**
 * Convert Unix timestamp (milliseconds) to ISO date string (YYYY-MM-DD)
 */
function timestampToIsoDate(timestamp: number): string {
  const date = new Date(timestamp);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Convert backend IMealPlan + IRecipes into v0 PlannedMeal[] for the calendar display.
 */
export function mealPlanToPlannedMeals(
  mealPlan: IMealPlan,
  recipes: IRecipe[],
  imageUrls: Map<RecipeUuid, string>
): PlannedMeal[] {
  const recipesMap = new Map<RecipeUuid, IRecipe>();
  for (const r of recipes) {
    recipesMap.set(r.uuid, r);
  }

  const meals: PlannedMeal[] = [];

  for (const item of mealPlan) {
    const isoDate = timestampToIsoDate(item.date);

    for (const recipeItem of item.plan) {
      const iRecipe = recipesMap.get(recipeItem.recipeId);
      if (!iRecipe) continue;

      const imageUrl = imageUrls.get(recipeItem.recipeId);
      const v0Recipe = iRecipeToRecipe(iRecipe, imageUrl);

      // Sum servings across all components for this recipe on this day
      const totalServings = recipeItem.components.reduce(
        (sum, comp) => sum + comp.servings,
        0
      );

      meals.push({
        id: `${isoDate}-${recipeItem.recipeId}`,
        recipe: v0Recipe,
        mealType: "dinner",
        date: isoDate,
        servings: totalServings || parseServingsNumber(v0Recipe.servings),
      });
    }
  }

  return meals;
}
