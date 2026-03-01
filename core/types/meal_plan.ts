import { ComponentUuid, RecipeUuid } from "./recipes";

/**
 * Represents a recipe in the meal plan with its components and servings
 */
export interface IMealPlanRecipe {
  recipeId: RecipeUuid;
  components: IMealPlanComponent[];
}

/**
 * Represents a component of a recipe with its servings
 */
export interface IMealPlanComponent {
  componentId: ComponentUuid;
  servings: number;
}

/**
 * Represents a day in the meal plan with a Unix timestamp and recipes for that day
 */
export interface IMealPlanItem {
  /** Unix timestamp in milliseconds */
  date: number;
  /** Array of recipes planned for this day */
  plan: IMealPlanRecipe[];
}

export type IMealPlan = IMealPlanItem[];
