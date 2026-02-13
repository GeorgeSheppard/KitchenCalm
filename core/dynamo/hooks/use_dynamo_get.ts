import { mealPlanEmptyState } from "../../meal_plan/meal_plan_utilities";
import { IRecipe, IRecipes, RecipeUuid } from "../../types/recipes";
import { NewRecipe } from "../../../pages/food/[recipeUuid]";
import { useAppSession } from "../../hooks/use_app_session";
import { useGetKitchencalmRecipes, useGetKitchencalmMealPlan } from "../../../client/generated/hooks";
import { UseQueryResult } from "@tanstack/react-query";

const useRecipesBase = <T>({
  select,
  enabled,
}: {
  enabled?: boolean;
  select?: (data: IRecipes) => T;
}): UseQueryResult<T> => {
  const { loading } = useAppSession();
  const recipesQuery = useGetKitchencalmRecipes({
    enabled: !loading && (enabled ?? true),
  });

  // Convert API response (object) to Map format for compatibility
  const recipesMap: IRecipes = recipesQuery.data ? new Map(Object.entries(recipesQuery.data as any)) : new Map();

  return {
    ...recipesQuery,
    data: select ? select(recipesMap) : (recipesMap as unknown as T),
  } as UseQueryResult<T>;
};

export const useRecipes = () => {
  return useRecipesBase({
    select: (data) => Array.from(data.values()),
  });
};

export const useRecipeIds = () => {
  return useRecipesBase({
    select: (data) => Array.from(data.keys()),
  });
};

export const useRecipe = (recipeId?: RecipeUuid, enabled?: boolean) => {
  return useRecipesBase({
    select: (data) => {
      const recipe = data.get(recipeId!);
      return recipe;
    },
    enabled: enabled && !!recipeId && recipeId !== NewRecipe,
  });
};

export const useMealPlan = () => {
  const { loading } = useAppSession();
  const mealPlan = useGetKitchencalmMealPlan({
    enabled: !loading,
    placeholderData: mealPlanEmptyState,
  });
  return {
    ...mealPlan,
    data: mealPlan.data!,
  };
};
