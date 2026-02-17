import { ComponentUuid, RecipeUuid } from "./recipes";

export type DateString = string;

export interface IMealPlanItem {
  date: DateString;
  plan: IDailyMealPlan;
}

export type IMealPlan = IMealPlanItem[];

export interface IDailyMealPlan {
  [index: RecipeUuid]: IComponentItem[];
}

export interface IComponentItem {
  componentId: ComponentUuid;
  servings: number;
}
