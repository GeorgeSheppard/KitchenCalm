import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { http_get, http_post, http_post_form } from '../http';
import { queryKeys } from '../query-keys';

/**
 * Recommendation data types
 */
export interface Recommendation {
  name: string;
  author: string;
  description: string;
  reason: string;
  amazonLink: string;
}

export interface GetRecommendationsResponse {
  recommendations: Recommendation[] | null;
  hasEmail: boolean;
  isRecurringMonthly: boolean;
  success: true;
}

export interface AddEmailResponse {
  success: boolean;
  error?: string;
}

export interface DeleteEmailResponse {
  [key: string]: any;
}

/**
 * Get recommendations by ID
 */
export const useGetRecommendations = (
  id: string,
  options?: UseQueryOptions<GetRecommendationsResponse, Error>
) => {
  return useQuery({
    queryKey: queryKeys.recommendations.get(id),
    queryFn: () => http_get<GetRecommendationsResponse>(`/api/recommendations/${id}`),
    enabled: !!id,
    ...options,
  });
};

/**
 * Add email to recommendations
 */
export const useAddRecommendationEmail = (
  options?: UseMutationOptions<
    AddEmailResponse,
    Error,
    { id: string; email?: string; recurring?: boolean }
  >
) => {
  return useMutation({
    mutationFn: async ({ id, email, recurring }) => {
      const data: Record<string, any> = { id };
      if (email) data.email = email;
      if (recurring !== undefined) data.recurring = String(recurring);
      return http_post_form<AddEmailResponse>('/api/recommendations/add-email', data);
    },
    ...options,
  });
};

/**
 * Delete email from recommendations
 */
export const useDeleteRecommendationEmail = (
  options?: UseMutationOptions<DeleteEmailResponse, Error, { requestId: string }>
) => {
  return useMutation({
    mutationFn: ({ requestId }) =>
      http_post_form<DeleteEmailResponse>('/api/recommendations/delete-email', { requestId }),
    ...options,
  });
};

/**
 * Create recommendations from bookcase images
 */
export const useCreateRecommendationsFromBookcase = (
  options?: UseMutationOptions<
    { id: string; success: true },
    Error,
    FormData
  >
) => {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      // Use a custom upload function for this multipart endpoint
      const client = (await import('../api-client')).getApiClient();
      const response = await client.post<{ id: string; success: true }>(
        '/api/recommendations/from-bookcase',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    },
    ...options,
  });
};
