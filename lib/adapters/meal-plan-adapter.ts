import { IMealPlan } from "../../core/types/meal_plan";
import { IRecipe, RecipeUuid } from "../../core/types/recipes";
import type { PlannedMeal } from "../meal-planner-data";
import { parseServingsNumber } from "../meal-planner-data";
import { iRecipeToRecipe } from "./recipe-adapter";
import { dateStringToIso } from "./date-adapter";

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
    const isoDate = dateStringToIso(item.date);

    for (const [recipeId, componentItems] of Object.entries(item.plan)) {
      const iRecipe = recipesMap.get(recipeId);
      if (!iRecipe) continue;

      const imageUrl = imageUrls.get(recipeId);
      const v0Recipe = iRecipeToRecipe(iRecipe, imageUrl);

      // Sum servings across all components for this recipe on this day
      const totalServings = componentItems.reduce(
        (sum, ci) => sum + ci.servings,
        0
      );

      meals.push({
        id: `${isoDate}-${recipeId}`,
        recipe: v0Recipe,
        mealType: "dinner",
        date: isoDate,
        servings: totalServings || parseServingsNumber(v0Recipe.servings),
      });
    }
  }

  return meals;
}
