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
    console.log("[deleteRecipe] starting optimistic cache update for:", recipeId);

    // Cache stores raw AxiosResponse shapes: { data: ..., status, headers, ... }
    const previousRecipesCache = queryClient.getQueryData(recipesKey) as any;
    const previousMealPlanCache = queryClient.getQueryData(mealPlanKey) as any;

    console.log("[deleteRecipe] recipes cache present:", !!previousRecipesCache?.data);
    console.log("[deleteRecipe] meal plan cache present:", !!previousMealPlanCache?.data);

    if (previousRecipesCache?.data) {
      const { [recipeId]: _removed, ...remainingRecipes } = previousRecipesCache.data as Record<string, unknown>;
      console.log("[deleteRecipe] removed recipe from cache, remaining count:", Object.keys(remainingRecipes).length);
      queryClient.setQueryData(recipesKey, { ...previousRecipesCache, data: remainingRecipes });
    }

    if (previousMealPlanCache?.data && Array.isArray(previousMealPlanCache.data)) {
      const updatedMealPlan = (previousMealPlanCache.data as IMealPlan).map((item) => ({
        ...item,
        plan: item.plan.filter((r) => r.recipeId !== recipeId),
      }));
      console.log("[deleteRecipe] updated meal plan cache");
      queryClient.setQueryData(mealPlanKey, { ...previousMealPlanCache, data: updatedMealPlan });
    }

    return {
      undo: () => {
        console.log("[deleteRecipe] undoing optimistic cache update for:", recipeId);
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
      console.log("[deleteRecipe] mutateAsync called for uuid:", uuid);
      const context = mutate(uuid as RecipeUuid);
      try {
        console.log("[deleteRecipe] firing API delete request");
        const result = await deleteRecipe.mutateAsync(uuid);
        console.log("[deleteRecipe] API delete succeeded");
        return result;
      } catch (error) {
        console.error("[deleteRecipe] API delete failed, rolling back cache:", error);
        context.undo();
        throw error;
      }
    },
    disabled: loading,
  };
};
