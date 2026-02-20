import clone from "just-clone";
import { ComponentUuid, IRecipe, RecipeUuid } from "../types/recipes";
import { DateString, IMealPlan } from "../types/meal_plan";
import { isoToDateString } from "../../lib/adapters/date-adapter";

export function addDays(theDate: Date, days: number) {
  return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const dateToDateString = (date: Date): DateString =>
  `${weekdays[date.getDay()]} - ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

export function createDates(
  centreDate: Date,
  pastDays: number,
  futureDays: number
): DateString[] {
  const offsets = Array.from(Array(pastDays + futureDays).keys()).map(
    (val) => val - pastDays
  );

  return offsets.map((dayOffset) => {
    const date = addDays(centreDate, dayOffset);
    // getMonth has indices from 0
    return dateToDateString(date);
  });
}

export function currentDate(): Date {
  const time = new Date().setHours(12, 0, 0, 0);
  return new Date(time);
}

export const mealPlanEmptyState: IMealPlan = createDates(
  currentDate(),
  14,
  14
).map((date) => ({
  date,
  plan: {},
}));


export interface IAddOrUpdatePlan {
  date: DateString;
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

  const { date, components } = payload;
  const dateItemIndex = mealPlan.findIndex((item) => item.date === date);

  if (dateItemIndex === -1) {
    return mealPlan;
  }

  const dateItem = mealPlan[dateItemIndex];

  for (const { recipeId, componentId, servingsIncrease } of components) {
    if (recipeId in dateItem.plan) {
      const componentIndex = dateItem.plan[recipeId].findIndex(
        (mealPlanItem) => mealPlanItem.componentId === componentId
      );
      if (componentIndex > -1) {
        const component = dateItem.plan[recipeId][componentIndex];
        const newServings = component.servings + servingsIncrease;
        // Note: We allow a component with zero servings, this allows the user to set that they are eating that
        // item in the meal plan, without having to buy ingredients for it, perhaps they have a portion in the freezer
        if (newServings >= 0) {
          dateItem.plan[recipeId][componentIndex].servings = newServings;
        } else {
          dateItem.plan[recipeId].splice(componentIndex, 1);
          if (dateItem.plan[recipeId].length === 0) {
            delete dateItem.plan[recipeId];
          }
        }
      } else {
        dateItem.plan[recipeId].push({
          componentId,
          servings: servingsIncrease,
        });
      }
    } else {
      dateItem.plan[recipeId] = [
        {
          componentId,
          servings: servingsIncrease,
        },
      ];
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
    date: isoToDateString(isoDate),
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
    date: isoToDateString(isoDate),
    components: recipe.components.map((c) => ({
      recipeId: recipe.uuid,
      componentId: c.uuid,
      servingsIncrease: -(currentServings + 1),
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
    date: isoToDateString(isoDate),
    components: recipe.components.map((c) => ({
      recipeId: recipe.uuid,
      componentId: c.uuid,
      servingsIncrease: c.servings || 1,
    })),
  };
}
