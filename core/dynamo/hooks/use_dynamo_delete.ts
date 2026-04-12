import { RecipeUuid } from "../../types/recipes";
import { IMealPlan } from "../../types/meal_plan";
import { useAppSession } from "../../hooks/use_app_session";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteRecipe, getRecipesQueryKey, getMealPlanQueryKey } from "../../../client/hooks";

const useDeleteRecipeInCache = () => {
  const queryClient = useQueryClient();
  const recipesKey = getRecipesQueryKey();
  const mealPlanKey = getMealPlanQueryKey();

  return (recipeId: RecipeUuid) => {
    // Cache stores raw AxiosResponse shapes: { data: ..., status, headers, ... }
    const previousRecipesCache = queryClient.getQueryData(recipesKey) as any;
    const previousMealPlanCache = queryClient.getQueryData(mealPlanKey) as any;

    if (previousRecipesCache?.data) {
      const { [recipeId]: _removed, ...remainingRecipes } = previousRecipesCache.data as Record<string, unknown>;
      queryClient.setQueryData(recipesKey, { ...previousRecipesCache, data: remainingRecipes });
    }

    if (previousMealPlanCache?.data && Array.isArray(previousMealPlanCache.data)) {
      const updatedMealPlan = (previousMealPlanCache.data as IMealPlan).map((item) => ({
        ...item,
        plan: item.plan.filter((r) => r.recipeId !== recipeId),
      }));
      queryClient.setQueryData(mealPlanKey, { ...previousMealPlanCache, data: updatedMealPlan });
    }

    return {
      undo: () => {
        queryClient.setQueryData(recipesKey, previousRecipesCache);
        queryClient.setQueryData(mealPlanKey, previousMealPlanCache);
      },
    };
  };
};

export const useDeleteRecipeFromDynamo = () => {
  const { loading } = useAppSession();
  const mutate = useDeleteRecipeInCache();
  const deleteRecipe = useDeleteRecipe();

  return {
    ...deleteRecipe,
    mutateAsync: async (uuid: string) => {
      const context = mutate(uuid as RecipeUuid);
      try {
        return await deleteRecipe.mutateAsync(uuid);
      } catch (error) {
        context.undo();
        throw error;
      }
    },
    disabled: loading,
  };
};
