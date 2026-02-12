import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';
import { http_get, http_put, http_delete, http_post } from '../http';
import { queryKeys } from '../query-keys';

/**
 * Recipe data types matching the OpenAPI spec
 */
export interface Quantity {
  unit: 'none' | 'mL' | 'L' | 'g' | 'kg' | 'cup' | 'tsp' | 'tbsp' | 'quantity';
  value?: number;
}

export interface Ingredient {
  name: string;
  quantity: Quantity;
}

export interface Instruction {
  text: string;
  optional?: boolean;
}

export interface RecipeImage {
  timestamp: number;
  key: string;
}

export interface RecipeComponent {
  name: string;
  uuid: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  storeable?: boolean;
  servings?: number;
}

export interface Recipe {
  uuid: string;
  name: string;
  description: string;
  images: RecipeImage[];
  components: RecipeComponent[];
}

export interface GetRecipesResponse {
  [key: string]: Recipe;
}

export interface CreateRecipeResponse {
  uuid: string;
  success: boolean;
}

export interface DeleteRecipeResponse {
  success: boolean;
  uuid: string;
}

export interface SharedRecipeResponse extends Recipe {}

export interface SearchRecipeResponse {
  results: Array<{
    uuid: string;
    name: string;
    description: string;
    ingredients: string[];
  }>;
  count: number;
}

/**
 * Get all recipes for the authenticated user
 */
export const useGetRecipes = (
  options?: UseQueryOptions<GetRecipesResponse, Error>
) => {
  return useQuery({
    queryKey: queryKeys.recipes.list(),
    queryFn: () => http_get<GetRecipesResponse>('/kitchencalm/recipes'),
    ...options,
  });
};

/**
 * Create or update a recipe
 */
export const useUpdateRecipe = (
  options?: UseMutationOptions<CreateRecipeResponse, Error, Recipe>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (recipe: Recipe) => http_put<CreateRecipeResponse>('/kitchencalm/recipes', { recipe }),
    onSuccess: (data) => {
      // Invalidate recipes list to refetch
      queryClient.invalidateQueries({
        queryKey: queryKeys.recipes.list(),
      });
    },
    ...options,
  });
};

/**
 * Delete a recipe
 */
export const useDeleteRecipe = (
  options?: UseMutationOptions<DeleteRecipeResponse, Error, string>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (uuid: string) =>
      http_delete<DeleteRecipeResponse>(`/kitchencalm/recipes/${uuid}`),
    onSuccess: () => {
      // Invalidate recipes list
      queryClient.invalidateQueries({
        queryKey: queryKeys.recipes.list(),
      });
    },
    ...options,
  });
};

/**
 * Get a shared recipe by share ID
 */
export const useGetSharedRecipe = (
  shareId: string | null,
  options?: UseQueryOptions<SharedRecipeResponse, Error>
) => {
  return useQuery({
    queryKey: queryKeys.recipes.shared(shareId || ''),
    queryFn: () =>
      http_get<SharedRecipeResponse>(`/kitchencalm/recipes/shared/${shareId}`),
    enabled: !!shareId,
    ...options,
  });
};

/**
 * Search recipes
 */
export const useSearchRecipes = (
  query: string,
  fields?: string,
  options?: UseQueryOptions<SearchRecipeResponse, Error>
) => {
  return useQuery({
    queryKey: queryKeys.recipes.search(query, fields),
    queryFn: () => {
      const params: Record<string, string> = { q: query };
      if (fields) {
        params.fields = fields;
      }
      return http_get<SearchRecipeResponse>('/kitchencalm/recipes/search', params);
    },
    enabled: !!query && query.length > 0,
    ...options,
  });
};

/**
 * Create a shareable link for a recipe
 */
export const useShareRecipe = (
  options?: UseMutationOptions<{ shareId: string }, Error, Recipe>
) => {
  return useMutation({
    mutationFn: (recipe: Recipe) =>
      http_post<{ shareId: string }>('/kitchencalm/recipes/share', { recipe }),
    ...options,
  });
};
