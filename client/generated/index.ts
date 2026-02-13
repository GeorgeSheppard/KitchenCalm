/**
 * Wrapper hooks that extract data from Orval-generated hooks
 * This layer provides a simpler interface by extracting response.data
 */

export {
  useDeleteKitchencalmRecipesUuid,
  useGetKitchencalmMealPlan,
  useGetKitchencalmRecipes,
  useGetKitchencalmRecipesSharedShareId,
  useGetKitchencalmShoppingList,
  usePostApiRecommendationsAddEmail,
  usePostApiRecommendationsDeleteEmail,
  usePostApiRecommendationsFromBookcase,
  usePostKitchencalmRecipesShare,
  usePostKitchencalmS3Delete,
  usePostKitchencalmS3SignedUrl,
  usePostKitchencalmS3Upload,
  usePostMcpAuthToken,
  usePutKitchencalmMealPlan,
  usePutKitchencalmRecipes,
  // Export query key functions
  getGetKitchencalmMealPlanQueryKey,
  getGetKitchencalmMealPlanQueryOptions,
  getGetKitchencalmRecipesQueryKey,
  getGetKitchencalmRecipesQueryOptions,
  getGetKitchencalmRecipesSharedShareIdQueryKey,
  getGetKitchencalmRecipesSharedShareIdQueryOptions,
  getGetKitchencalmShoppingListQueryKey,
  getGetKitchencalmShoppingListQueryOptions,
  getPostApiRecommendationsAddEmailMutationOptions,
  getPostApiRecommendationsDeleteEmailMutationOptions,
  getPostApiRecommendationsFromBookcaseMutationOptions,
  getPostKitchencalmRecipesShareMutationOptions,
  getPostKitchencalmS3DeleteMutationOptions,
  getPostKitchencalmS3SignedUrlMutationOptions,
  getPostKitchencalmS3UploadMutationOptions,
  getPostMcpAuthTokenMutationOptions,
  getPutKitchencalmMealPlanMutationOptions,
  getPutKitchencalmRecipesMutationOptions,
} from './hooks';
