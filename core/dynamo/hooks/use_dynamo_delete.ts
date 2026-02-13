import { IRecipes, RecipeUuid } from "../../types/recipes";
import clone from "just-clone";
import { IMealPlan } from "../../types/meal_plan";
import { useAppSession } from "../../hooks/use_app_session";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteKitchencalmRecipesUuid, getGetKitchencalmRecipesQueryKey, getGetKitchencalmMealPlanQueryKey } from "../../../client/generated/hooks";

const useDeleteRecipeInCache = () => {
  const queryClient = useQueryClient();
  const recipesKey = getGetKitchencalmRecipesQueryKey();
  const mealPlanKey = getGetKitchencalmMealPlanQueryKey();

  return (recipeId: RecipeUuid) => {
    const previousRecipes: IRecipes | undefined =
      queryClient.getQueryData(recipesKey);
    const previousMealPlan: IMealPlan | undefined =
      queryClient.getQueryData(mealPlanKey);

    if (previousRecipes) {
      const updatedRecipes = new Map(previousRecipes);
      updatedRecipes.delete(recipeId);
      queryClient.setQueryData(recipesKey, updatedRecipes);
    }

    if (previousMealPlan) {
      const updatedMealPlan = clone(previousMealPlan);
      for (const date of Object.keys(updatedMealPlan)) {
        const dailyPlan = updatedMealPlan[date];
        delete dailyPlan[recipeId];
      }
      queryClient.setQueryData(mealPlanKey, updatedMealPlan);
    }

    return {
      undo: () => {
        queryClient.setQueryData(recipesKey, previousRecipes);
        queryClient.setQueryData(mealPlanKey, previousMealPlan);
      },
    };
  };
};

export const useDeleteRecipeFromDynamo = () => {
  const { loading } = useAppSession();
  const mutate = useDeleteRecipeInCache();
  const deleteRecipe = useDeleteKitchencalmRecipesUuid(undefined, {
    onMutate: ({ uuid }) => mutate(uuid as any),
    onError: (_, __, context) => context?.undo(),
  });

  return {
    ...deleteRecipe,
    disabled: loading,
  };
};
