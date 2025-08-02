import { mealPlanEmptyState } from "../../meal_plan/meal_plan_utilities";
import { IRecipe, IRecipes, RecipeUuid } from "../../types/recipes";
import { NewRecipe } from "../../../pages/food/[recipeUuid]";
import { useAppSession } from "../../hooks/use_app_session";
import { trpc } from "../../../client";

const useRecipesBase = <T>({
  select,
  enabled,
}: {
  enabled?: boolean;
  select?: (data: IRecipe[]) => T;
}) => {
  const { loading } = useAppSession();
  return trpc.recipes.getRecipes.useQuery(
    undefined,
    {
      enabled: !loading && (enabled ?? true),
      // TODO: Fix this
      select,
    }
  );
};

export const useRecipes = () => {
  return useRecipesBase({});
};

export const useRecipeIds = () => {
  return useRecipesBase({
    select: (data) => data.map(recipe => recipe.uuid),
  });
};

export const useRecipe = (recipeId?: RecipeUuid, enabled?: boolean) => {
  return useRecipesBase({
    select: (data) => {
      const recipe = data.find(recipe => recipe.uuid === recipeId!);
      return recipe;
    },
    enabled: enabled && !!recipeId && recipeId !== NewRecipe,
  });
};

export const useMealPlan = () => {
  const { loading } = useAppSession();
  const mealPlan = trpc.mealPlan.getMealPlan.useQuery(undefined, {
    enabled: !loading,
    placeholderData: mealPlanEmptyState,
  });
  return {
    ...mealPlan,
    data: mealPlan.data!,
  };
};
