import { useParseRecipe } from '../../../client/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { getRecipesQueryKey } from '../../../client/hooks';
import { IRecipes } from '../../types/recipes';
import { Recipe } from '../../../client/generated/hooks';

/**
 * Hook for parsing recipe text and adding it to the recipe cache
 * Returns the parsed recipe and updates the query cache automatically
 */
export const useParsedRecipeToDynamo = () => {
  const queryClient = useQueryClient();
  const parseRecipe = useParseRecipe();
  const recipesKey = getRecipesQueryKey();

  return {
    ...parseRecipe,
    mutateAsync: async (recipeText: string) => {
      // Parse the recipe from the text
      const parsedRecipe = await parseRecipe.mutateAsync(recipeText);

      // Update the query cache with the parsed recipe
      const previousRecipes: IRecipes | undefined =
        queryClient.getQueryData(recipesKey);

      if (previousRecipes) {
        const updatedRecipes = new Map(previousRecipes);
        updatedRecipes.set(parsedRecipe.uuid, parsedRecipe as any);
        queryClient.setQueryData(recipesKey, updatedRecipes);
      }

      return parsedRecipe;
    },
  };
};
