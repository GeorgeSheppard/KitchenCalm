import { ComponentUuid, IRecipe, RecipeUuid } from "../types/recipes";
import {
  IMealPlan,
  IMealPlanComponent,
  IMealPlanRecipe,
} from "../types/meal_plan";

export function addDays(theDate: Date, days: number) {
  return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}

/**
 * Convert ISO date string (YYYY-MM-DD) to Unix timestamp (milliseconds, UTC)
 */
export function isoToTimestamp(isoDate: string): number {
  const date = new Date(`${isoDate}T00:00:00Z`);
  return date.getTime();
}

/**
 * Convert a Date object to Unix timestamp (milliseconds, at start of day UTC)
 */
export function dateToTimestamp(date: Date): number {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const isoDate = `${year}-${month}-${day}`;
  return isoToTimestamp(isoDate);
}

/**
 * Convert ISO date string (YYYY-MM-DD) to a Date object at start of day UTC
 */
export function isoToDate(isoDate: string): Date {
  return new Date(`${isoDate}T00:00:00Z`);
}

export function currentDate(): Date {
  const time = new Date().setHours(12, 0, 0, 0);
  return new Date(time);
}

/**
 * Create an array of dates (as ISO strings) centered on a given date
 */
export function createDateRange(
  centreDate: Date,
  pastDays: number,
  futureDays: number
): string[] {
  const offsets = Array.from(Array(pastDays + futureDays).keys()).map(
    (val) => val - pastDays
  );

  return offsets.map((dayOffset) => {
    const date = addDays(centreDate, dayOffset);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  });
}

export const mealPlanEmptyState: IMealPlan = createDateRange(
  currentDate(),
  14,
  14
).map((isoDate) => ({
  date: isoToTimestamp(isoDate),
  plan: [],
}));

export interface IAddOrUpdatePlan {
  timestamp: number;
  components: {
    recipeId: RecipeUuid;
    componentId: ComponentUuid;
    servingsIncrease: number;
  }[];
}

/**
 * Helper function to update components within a recipe.
 * Handles adding new components, updating existing ones, and removing components with negative servings.
 */
function updateRecipeComponents(
  currentComponents: IMealPlanComponent[],
  updates: { componentId: ComponentUuid; servingsIncrease: number }[]
): IMealPlanComponent[] {
  // Create a map for quick lookup of updates
  const updateMap = new Map<ComponentUuid, number>();
  for (const update of updates) {
    updateMap.set(update.componentId, update.servingsIncrease);
  }

  const result: IMealPlanComponent[] = [];

  // Update existing components
  for (const component of currentComponents) {
    const delta = updateMap.get(component.componentId) || 0;
    const newServings = component.servings + delta;

    if (newServings >= 0) {
      result.push({ componentId: component.componentId, servings: newServings });
    }
    // Remove from updateMap so we know we processed it
    updateMap.delete(component.componentId);
  }

  // Add any new components (ones that weren't in currentComponents)
  for (const [componentId, delta] of Array.from(updateMap.entries())) {
    if (delta >= 0) {
      result.push({ componentId, servings: delta });
    }
  }

  return result;
}

/**
 * Helper function to update the plan for a specific date.
 * Handles adding new recipes, updating existing recipes, and removing recipes with no components.
 */
function updateDatePlan(
  currentRecipes: IMealPlanRecipe[],
  componentsToUpdate: IAddOrUpdatePlan["components"]
): IMealPlanRecipe[] {
  // Group updates by recipeId
  const updatesByRecipe = new Map<RecipeUuid, typeof componentsToUpdate>();
  for (const update of componentsToUpdate) {
    const existing = updatesByRecipe.get(update.recipeId) || [];
    existing.push(update);
    updatesByRecipe.set(update.recipeId, existing);
  }

  const result: IMealPlanRecipe[] = [];

  // Update existing recipes
  for (const recipe of currentRecipes) {
    const updates = updatesByRecipe.get(recipe.recipeId) || [];
    const updatedComponents = updateRecipeComponents(recipe.components, updates);

    // Only keep recipe if it still has components
    if (updatedComponents.length > 0) {
      result.push({ recipeId: recipe.recipeId, components: updatedComponents });
    }

    // Remove from map so we know we processed it
    updatesByRecipe.delete(recipe.recipeId);
  }

  // Add any new recipes (ones that weren't in currentRecipes)
  for (const [recipeId, updates] of Array.from(updatesByRecipe.entries())) {
    const newComponents = updateRecipeComponents([], updates);

    if (newComponents.length > 0) {
      result.push({ recipeId, components: newComponents });
    }
  }

  return result;
}

/**
 * Core function to add or update components in a meal plan.
 * This is a pure function that returns a new meal plan without mutating the input.
 *
 * Behavior:
 * - Only processes the date specified in the payload (other dates unchanged)
 * - For each component in payload:
 *   - Creates recipe if it doesn't exist (only if servingsIncrease >= 0)
 *   - Creates component if it doesn't exist (only if servingsIncrease >= 0)
 *   - Updates servings: newServings = currentServings + servingsIncrease
 *   - Keeps component if newServings >= 0 (zero servings allowed)
 *   - Removes component if newServings < 0
 * - Removes recipe if it has no components left
 * - If date not in plan, returns plan unchanged (no-op)
 */
export const addOrUpdatePlan = (
  currentPlan: IMealPlan,
  payload: IAddOrUpdatePlan
): IMealPlan => {
  const { timestamp, components } = payload;

  return currentPlan.map((dateItem) => {
    // Only process the target date
    if (dateItem.date !== timestamp) {
      return dateItem;
    }

    // Update the plan for this date
    const updatedPlan = updateDatePlan(dateItem.plan, components);

    return {
      ...dateItem,
      plan: updatedPlan,
    };
  });
};

/**
 * Build an IAddOrUpdatePlan to add a recipe to a given date (from drag & drop).
 * Uses each component's default servings, or 1 if not specified.
 */
export function buildAddRecipePayload(
  recipe: IRecipe,
  isoDate: string
): IAddOrUpdatePlan {
  return {
    timestamp: isoToTimestamp(isoDate),
    components: recipe.components.map((c) => ({
      recipeId: recipe.uuid,
      componentId: c.uuid,
      servingsIncrease: c.servings ?? 1,
    })),
  };
}

/**
 * Remove an entire recipe (all its components) from a meal plan on a given date.
 * This is a pure function that returns a new meal plan without mutating the input.
 */
export function removeRecipeFromPlan(
  currentPlan: IMealPlan,
  recipeId: RecipeUuid,
  timestamp: number
): IMealPlan {
  return currentPlan.map((dateItem) => {
    // Only process the target date
    if (dateItem.date !== timestamp) {
      return dateItem;
    }

    // Filter out the recipe
    const updatedPlan = dateItem.plan.filter((r) => r.recipeId !== recipeId);

    return {
      ...dateItem,
      plan: updatedPlan,
    };
  });
}
