/**
 * Wrapper hooks around Orval-generated hooks
 * Simplifies the interface by extracting data from responses
 * Automatically includes Bearer token authentication
 */

import { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { useAppSession } from '../core/hooks/use_app_session';
import { IRecipe } from '../core/types/recipes';
import {
  useGetKitchencalmRecipes as useGetKitchencalmRecipesBase,
  useGetKitchencalmMealPlan as useGetKitchencalmMealPlanBase,
  usePutKitchencalmRecipes as usePutKitchencalmRecipesBase,
  usePutKitchencalmMealPlan as usePutKitchencalmMealPlanBase,
  useDeleteKitchencalmRecipesUuid as useDeleteKitchencalmRecipesUuidBase,
  usePostKitchencalmRecipesShare as usePostKitchencalmRecipesShareBase,
  usePostKitchencalmS3SignedUrl as usePostKitchencalmS3SignedUrlBase,
  usePostKitchencalmS3Upload as usePostKitchencalmS3UploadBase,
  usePostKitchencalmS3Delete as usePostKitchencalmS3DeleteBase,
  getGetKitchencalmRecipesQueryKey,
  getGetKitchencalmMealPlanQueryKey,
  PutKitchencalmRecipesBody,
  PutKitchencalmMealPlanBody,
  PostKitchencalmRecipesShareBody,
  PostKitchencalmS3SignedUrlBody,
  PostKitchencalmS3UploadBody,
  PostKitchencalmS3DeleteBody,
  PutKitchencalmRecipes200,
  PutKitchencalmMealPlan200,
  DeleteKitchencalmRecipesUuid200,
  PostKitchencalmRecipesShare200,
  PostKitchencalmS3SignedUrl200,
  PostKitchencalmS3Upload200,
  PostKitchencalmS3Delete200,
} from './generated/hooks';

/**
 * Helper function to get authorization headers with Bearer token
 */
const getAuthHeaders = (accessToken: string | undefined) => {
  if (!accessToken) return {};
  return { authorization: `Bearer ${accessToken}` };
};

/**
 * Get all recipes - extracts data from response
 */
export const useGetRecipes = (
  options?: {
    query?: UseQueryOptions<any>;
    axios?: AxiosRequestConfig;
  }
) => {
  const { accessToken } = useAppSession();

  const query = useGetKitchencalmRecipesBase({
    query: {
      ...options?.query,
      select: (response: any) => response.data,
    },
    axios: {
      ...options?.axios,
      headers: {
        ...getAuthHeaders(accessToken),
        ...options?.axios?.headers,
      },
    },
  });

  return query;
};

/**
 * Get meal plan - extracts data from response
 */
export const useGetMealPlan = (
  options?: {
    query?: UseQueryOptions<any>;
    axios?: AxiosRequestConfig;
  }
) => {
  const { accessToken } = useAppSession();

  const query = useGetKitchencalmMealPlanBase({
    query: {
      ...options?.query,
      select: (response: any) => response.data,
    },
    axios: {
      ...options?.axios,
      headers: {
        ...getAuthHeaders(accessToken),
        ...options?.axios?.headers,
      },
    },
  });

  return query;
};

/**
 * Update recipe - simplified interface
 */
export const useUpdateRecipe = () => {
  const { accessToken } = useAppSession();
  const mutation = usePutKitchencalmRecipesBase();

  return {
    ...mutation,
    mutate: (recipe: PutKitchencalmRecipesBody) => {
      mutation.mutate({
        data: recipe,
        axios: { headers: getAuthHeaders(accessToken) },
      });
    },
    mutateAsync: async (recipe: PutKitchencalmRecipesBody) => {
      const response = await mutation.mutateAsync({
        data: recipe,
        axios: { headers: getAuthHeaders(accessToken) },
      });
      return response.data;
    },
  };
};

/**
 * Update meal plan - simplified interface
 */
export const useUpdateMealPlan = () => {
  const { accessToken } = useAppSession();
  const mutation = usePutKitchencalmMealPlanBase();

  return {
    ...mutation,
    mutate: (mealPlan: PutKitchencalmMealPlanBody) => {
      mutation.mutate({
        data: mealPlan,
        axios: { headers: getAuthHeaders(accessToken) },
      });
    },
    mutateAsync: async (mealPlan: PutKitchencalmMealPlanBody) => {
      const response = await mutation.mutateAsync({
        data: mealPlan,
        axios: { headers: getAuthHeaders(accessToken) },
      });
      return response.data;
    },
  };
};

/**
 * Delete recipe - simplified interface
 */
export const useDeleteRecipe = () => {
  const { accessToken } = useAppSession();
  const mutation = useDeleteKitchencalmRecipesUuidBase();

  return {
    ...mutation,
    mutate: (uuid: string) => {
      mutation.mutate({
        uuid,
        axios: { headers: getAuthHeaders(accessToken) },
      });
    },
    mutateAsync: async (uuid: string) => {
      const response = await mutation.mutateAsync({
        uuid,
        axios: { headers: getAuthHeaders(accessToken) },
      });
      return response.data;
    },
  };
};

/**
 * Share recipe - simplified interface
 */
export const useShareRecipe = () => {
  const { accessToken } = useAppSession();
  const mutation = usePostKitchencalmRecipesShareBase();

  return {
    ...mutation,
    mutateAsync: async (recipe: IRecipe) => {
      const response = await mutation.mutateAsync({
        data: { recipe },
        axios: { headers: getAuthHeaders(accessToken) },
      });
      return response.data;
    },
  };
};

/**
 * Get S3 signed URL - simplified interface
 */
export const useGetSignedUrl = () => {
  const { accessToken } = useAppSession();
  const mutation = usePostKitchencalmS3SignedUrlBase();

  return {
    ...mutation,
    mutateAsync: async (key: string) => {
      const response = await mutation.mutateAsync({
        data: { key },
        axios: { headers: getAuthHeaders(accessToken) },
      });
      return response.data;
    },
  };
};

/**
 * Get S3 upload URL - simplified interface
 */
export const useGetUploadUrl = () => {
  const { accessToken } = useAppSession();
  const mutation = usePostKitchencalmS3UploadBase();

  return {
    ...mutation,
    mutateAsync: async (params: PostKitchencalmS3UploadBody) => {
      const response = await mutation.mutateAsync({
        data: params,
        axios: { headers: getAuthHeaders(accessToken) },
      });
      return response.data;
    },
  };
};

/**
 * Delete S3 object - simplified interface
 */
export const useDeleteS3Object = () => {
  const { accessToken } = useAppSession();
  const mutation = usePostKitchencalmS3DeleteBase();

  return {
    ...mutation,
    mutateAsync: async (key: string) => {
      const response = await mutation.mutateAsync({
        data: { key },
        axios: { headers: getAuthHeaders(accessToken) },
      });
      return response.data;
    },
  };
};

// Export query key functions for cache management
export {
  getGetKitchencalmRecipesQueryKey as getRecipesQueryKey,
  getGetKitchencalmMealPlanQueryKey as getMealPlanQueryKey,
};

// Export aliases for backward compatibility
export { useGetRecipes as useGetKitchencalmRecipes };
export { useGetMealPlan as useGetKitchencalmMealPlan };
