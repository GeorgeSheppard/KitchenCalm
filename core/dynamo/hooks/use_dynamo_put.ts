import { IRecipe, IRecipes } from "../../../core/types/recipes";
import {
  IAddOrUpdatePlan,
  addOrUpdatePlan,
} from "../../meal_plan/meal_plan_utilities";
import { IMealPlan } from "../../types/meal_plan";
import { useAppSession } from "../../hooks/use_app_session";
import { useUpdateRecipe } from "../../../client/hooks/use-recipes";
import { useUpdateMealPlan } from "../../../client/hooks/use-meal-plan";
import { queryKeys } from "../../../client/query-keys";
import { useQueryClient } from "@tanstack/react-query";

const useMutateRecipeInCache = () => {
  const queryClient = useQueryClient();
  const recipesKey = queryKeys.recipes.list();

  return (recipe: IRecipe) => {
    const previousRecipes: IRecipes | undefined =
      queryClient.getQueryData(recipesKey);

    if (previousRecipes) {
      const updatedRecipes = new Map(previousRecipes);
      updatedRecipes.set(recipe.uuid, recipe);
      queryClient.setQueryData(recipesKey, updatedRecipes);
    }

    return {
      undo: () => queryClient.setQueryData(recipesKey, previousRecipes),
    };
  };
};

const useMutateMealPlanInCache = () => {
  const queryClient = useQueryClient();
  const mealPlanKey = queryKeys.mealPlan.current();

  return (newMealPlan: IMealPlan) => {
    const previousMealPlan: IMealPlan | undefined =
      queryClient.getQueryData(mealPlanKey);

    queryClient.setQueryData(mealPlanKey, newMealPlan);

    return {
      undo: () => {
        queryClient.setQueryData(mealPlanKey, previousMealPlan)
      },
    };
  };
};

export const usePutRecipeToDynamo = () => {
  const { loading } = useAppSession();
  const mutate = useMutateRecipeInCache();
  const updateRecipe = useUpdateRecipe({
    onMutate: (recipe) => mutate(recipe),
    onError: (_, __, context) => context?.undo(),
  });

  return {
    ...updateRecipe,
    disabled: loading,
  };
};

export const usePutMealPlanToDynamo = () => {
  const mutate = useMutateMealPlanInCache();
  const queryClient = useQueryClient();
  const mealPlanKey = queryKeys.mealPlan.current();

  const updateMealPlan = useUpdateMealPlan({
    onMutate: (newMealPlan) => mutate(newMealPlan),
    onError: (_, __, context) => context?.undo(),
  });

  return {
    ...updateMealPlan,
    mutate: (update: IAddOrUpdatePlan) => {
      const currentMealPlan = queryClient.getQueryData(mealPlanKey) as IMealPlan | undefined
      if (!currentMealPlan) throw new Error('Cannot modify empty meal plan')
      updateMealPlan.mutate(addOrUpdatePlan(currentMealPlan, update));
    },
  };
};
