/**
 * Centralized React Query key factory
 * Ensures consistent cache keys across the application
 */

export const queryKeys = {
  // Recommendations endpoints
  recommendations: {
    all: ['recommendations'] as const,
    get: (id: string) => [...queryKeys.recommendations.all, 'get', id] as const,
    addEmail: (id: string) => [...queryKeys.recommendations.all, 'addEmail', id] as const,
  },

  // Recipes endpoints
  recipes: {
    all: ['recipes'] as const,
    list: () => [...queryKeys.recipes.all, 'list'] as const,
    detail: (uuid: string) => [...queryKeys.recipes.all, 'detail', uuid] as const,
    shared: (shareId: string) => [...queryKeys.recipes.all, 'shared', shareId] as const,
    search: (q: string, fields?: string) =>
      [...queryKeys.recipes.all, 'search', q, fields] as const,
  },

  // Meal plan endpoints
  mealPlan: {
    all: ['mealPlan'] as const,
    current: () => [...queryKeys.mealPlan.all, 'current'] as const,
  },

  // Shopping list endpoints
  shoppingList: {
    all: ['shoppingList'] as const,
    filtered: (startDate?: string, endDate?: string) =>
      [...queryKeys.shoppingList.all, 'filtered', startDate, endDate] as const,
  },

  // S3 endpoints
  s3: {
    all: ['s3'] as const,
    signedUrl: (key: string) => [...queryKeys.s3.all, 'signedUrl', key] as const,
    uploadUrl: (fileName: string) => [...queryKeys.s3.all, 'uploadUrl', fileName] as const,
  },

  // Auth endpoints
  auth: {
    all: ['auth'] as const,
    token: () => [...queryKeys.auth.all, 'token'] as const,
  },
} as const;
