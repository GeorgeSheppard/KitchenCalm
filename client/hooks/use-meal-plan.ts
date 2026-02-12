import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';
import { http_get, http_put } from '../http';
import { queryKeys } from '../query-keys';

/**
 * Meal plan data types
 */
export interface MealPlanItem {
  componentId: string;
  servings: number;
}

export interface MealPlanDay {
  [mealType: string]: MealPlanItem[];
}

export interface MealPlan {
  [date: string]: MealPlanDay;
}

export interface UpdateMealPlanResponse {
  success: boolean;
}

/**
 * Get the meal plan for the authenticated user
 */
export const useGetMealPlan = (
  options?: UseQueryOptions<MealPlan, Error>
) => {
  return useQuery({
    queryKey: queryKeys.mealPlan.current(),
    queryFn: () => http_get<MealPlan>('/kitchencalm/meal-plan'),
    ...options,
  });
};

/**
 * Update the meal plan for the authenticated user
 */
export const useUpdateMealPlan = (
  options?: UseMutationOptions<UpdateMealPlanResponse, Error, MealPlan>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (mealPlan: MealPlan) =>
      http_put<UpdateMealPlanResponse>('/kitchencalm/meal-plan', mealPlan),
    onSuccess: () => {
      // Invalidate meal plan cache to refetch
      queryClient.invalidateQueries({
        queryKey: queryKeys.mealPlan.current(),
      });
    },
    ...options,
  });
};

/**
 * Get a shopping list from the meal plan
 */
export const useGetShoppingList = (
  startDate?: string,
  endDate?: string,
  options?: UseQueryOptions<string, Error>
) => {
  return useQuery({
    queryKey: queryKeys.shoppingList.filtered(startDate, endDate),
    queryFn: async () => {
      const params: Record<string, string> = {};
      if (startDate) params.startDate = startDate;
      if (endDate) params.endDate = endDate;
      return http_get<string>('/kitchencalm/shopping-list', params);
    },
    ...options,
  });
};
