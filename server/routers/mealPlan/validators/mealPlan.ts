import { z } from "zod";
import { IComponentItem, IMealPlan } from "../../../../core/types/meal_plan";

const mealPlanComponentValidator: z.ZodType<IComponentItem> = z.object({
  componentId: z.string(),
  servings: z.number(),
});

const mealPlanItemValidator = z.object({
  date: z.string(),
  plan: z.record(mealPlanComponentValidator.array()),
});

export const mealPlanValidator: z.ZodType<IMealPlan> = mealPlanItemValidator.array();
