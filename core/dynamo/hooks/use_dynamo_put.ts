import { IRecipe, IRecipes } from "../../../core/types/recipes";
import {
  IAddOrUpdatePlan,
  addOrUpdatePlan,
} from "../../meal_plan/meal_plan_utilities";
import { IMealPlan } from "../../types/meal_plan";
import { useAppSession } from "../../hooks/use_app_session";
import {
  useUpdateRecipe,
  useUpdateMealPlan,
  getRecipesQueryKey,
  getMealPlanQueryKey,
} from "../../../client/hooks";
import { useQueryClient } from "@tanstack/react-query";

const useMutateRecipeInCache = () => {
  const queryClient = useQueryClient();
  const recipesKey = getRecipesQueryKey();

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
  const mealPlanKey = getMealPlanQueryKey();

  return (newMealPlan: IMealPlan) => {
    const previousMealPlan = queryClient.getQueryData(mealPlanKey);

    // Wrap in { data: ... } to match the AxiosResponse shape that
    // useGetMealPlan's select function expects
    queryClient.setQueryData(mealPlanKey, { data: newMealPlan });

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
  const updateRecipe = useUpdateRecipe();

  return {
    ...updateRecipe,
    mutateAsync: async (recipe: IRecipe) => {
      const context = mutate(recipe);
      try {
        return await updateRecipe.mutateAsync(recipe);
      } catch (error) {
        context.undo();
        throw error;
      }
    },
    disabled: loading,
  };
};

export const usePutMealPlanToDynamo = () => {
  const mutate = useMutateMealPlanInCache();
  const queryClient = useQueryClient();
  const mealPlanKey = getMealPlanQueryKey();

  const updateMealPlan = useUpdateMealPlan();

  return {
    ...updateMealPlan,
    mutate: (update: IAddOrUpdatePlan) => {
      const cachedData = queryClient.getQueryData(mealPlanKey) as any;
      const currentMealPlan = cachedData?.data as IMealPlan | undefined;
      if (!currentMealPlan || !Array.isArray(currentMealPlan)) throw new Error('Cannot modify empty meal plan')
      const updatedMealPlan = addOrUpdatePlan(currentMealPlan, update);
      mutate(updatedMealPlan);
      updateMealPlan.mutate(updatedMealPlan);
    },
  };
};
