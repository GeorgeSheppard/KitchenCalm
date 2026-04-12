import { AxiosResponse } from "axios";
import { RecipeUuid } from "../../types/recipes";
import { useAppSession } from "../../hooks/use_app_session";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteRecipe, getRecipesQueryKey, getMealPlanQueryKey } from "../../../client/hooks";
import { GetKitchencalmRecipes200, MealPlan } from "../../../client/generated/hooks";

const useDeleteRecipeInCache = () => {
  const queryClient = useQueryClient();
  const recipesKey = getRecipesQueryKey();
  const mealPlanKey = getMealPlanQueryKey();

  return (recipeId: RecipeUuid) => {
    const previousRecipesCache = queryClient.getQueryData<AxiosResponse<GetKitchencalmRecipes200>>(recipesKey);
    const previousMealPlanCache = queryClient.getQueryData<AxiosResponse<MealPlan>>(mealPlanKey);

    if (previousRecipesCache?.data) {
      const { [recipeId]: _removed, ...remainingRecipes } = previousRecipesCache.data;
      queryClient.setQueryData(recipesKey, { ...previousRecipesCache, data: remainingRecipes });
    }

    if (previousMealPlanCache?.data && Array.isArray(previousMealPlanCache.data)) {
      const updatedMealPlan = previousMealPlanCache.data.map((item) => ({
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
      const context = mutate(uuid);

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
