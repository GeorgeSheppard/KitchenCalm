import clone from "just-clone";
import { ComponentUuid, IRecipe, RecipeUuid } from "../types/recipes";
import { IMealPlan } from "../types/meal_plan";

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

export const addOrUpdatePlan = (
  currentPlan: IMealPlan,
  payload: IAddOrUpdatePlan
): IMealPlan => {
  const mealPlan = clone(currentPlan) as IMealPlan;

  const { timestamp, components } = payload;
  const dateItemIndex = mealPlan.findIndex((item) => item.date === timestamp);

  if (dateItemIndex === -1) {
    return mealPlan;
  }

  const dateItem = mealPlan[dateItemIndex];

  for (const { recipeId, componentId, servingsIncrease } of components) {
    const recipeIndex = dateItem.plan.findIndex((r) => r.recipeId === recipeId);

    if (recipeIndex > -1) {
      const recipe = dateItem.plan[recipeIndex];
      const componentIndex = recipe.components.findIndex(
        (c) => c.componentId === componentId
      );

      if (componentIndex > -1) {
        const component = recipe.components[componentIndex];
        const newServings = component.servings + servingsIncrease;
        // Note: We allow a component with zero servings, this allows the user to set that they are eating that
        // item in the meal plan, without having to buy ingredients for it, perhaps they have a portion in the freezer
        if (newServings >= 0) {
          recipe.components[componentIndex].servings = newServings;
        } else {
          recipe.components.splice(componentIndex, 1);
          if (recipe.components.length === 0) {
            dateItem.plan.splice(recipeIndex, 1);
          }
        }
      } else {
        recipe.components.push({
          componentId,
          servings: servingsIncrease,
        });
      }
    } else {
      dateItem.plan.push({
        recipeId,
        components: [
          {
            componentId,
            servings: servingsIncrease,
          },
        ],
      });
    }
  }

  return mealPlan;
};

/**
 * Parse a meal ID (e.g. "2026-02-19-recipe-uuid") into its parts.
 */
export function parseMealId(id: string): { isoDate: string; recipeId: RecipeUuid } {
  const parts = id.split("-");
  return {
    isoDate: parts.slice(0, 3).join("-"),
    recipeId: parts.slice(3).join("-"),
  };
}

/**
 * Build an IAddOrUpdatePlan to change servings for a recipe on a given date.
 */
export function buildUpdateServingsPayload(
  recipe: IRecipe,
  isoDate: string,
  currentServings: number,
  newServings: number,
): IAddOrUpdatePlan {
  const delta = newServings - currentServings;
  // Apply the delta to only the first component, since the UI displays
  // the sum across all components as a single number.
  return {
    timestamp: isoToTimestamp(isoDate),
    components: [{
      recipeId: recipe.uuid,
      componentId: recipe.components[0].uuid,
      servingsIncrease: delta,
    }],
  };
}

/**
 * Build an IAddOrUpdatePlan to remove a recipe from a given date entirely.
 */
export function buildRemoveMealPayload(
  recipe: IRecipe,
  isoDate: string,
  currentServings: number,
): IAddOrUpdatePlan {
  return {
    timestamp: isoToTimestamp(isoDate),
    components: recipe.components.map((c) => ({
      recipeId: recipe.uuid,
      componentId: c.uuid,
      servingsIncrease: -currentServings,
    })),
  };
}

/**
 * Build an IAddOrUpdatePlan to add a recipe to a given date (from drag & drop).
 */
export function buildDropPayload(
  recipe: IRecipe,
  isoDate: string,
): IAddOrUpdatePlan {
  return {
    timestamp: isoToTimestamp(isoDate),
    components: recipe.components.map((c) => ({
      recipeId: recipe.uuid,
      componentId: c.uuid,
      servingsIncrease: c.servings || 1,
    })),
  };
}
