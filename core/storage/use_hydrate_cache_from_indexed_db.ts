import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { idbGet, idbDelete } from "./indexed_db";
import { RECIPES_CACHE_KEY, MEAL_PLAN_CACHE_KEY } from "./cache_keys";
import { getRecipesQueryKey, getMealPlanQueryKey } from "../../client/hooks";

const hasSessionCookie = () =>
  typeof document !== "undefined" &&
  document.cookie.includes("next-auth.session-token");

/**
 * Seeds the react-query cache from IndexedDB on mount so recipes/meal plan
 * can render instantly on first paint, without waiting for auth to resolve
 * or the network request to complete. The Orval-generated query functions
 * cache a raw axios-response-shaped object, so we wrap the stored payload
 * in `{ data: payload }` to match what `select` expects to unwrap.
 *
 * If a real query response is already cached (e.g. from a previous fetch
 * this session) it takes priority and the IndexedDB value is ignored.
 */
export const useHydrateCacheFromIndexedDb = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!hasSessionCookie()) {
      // No session cookie - nothing to optimistically show, and clear out
      // any stale data left over from a previous user on this device.
      idbDelete(RECIPES_CACHE_KEY);
      idbDelete(MEAL_PLAN_CACHE_KEY);
      return;
    }

    const recipesKey = getRecipesQueryKey();
    const mealPlanKey = getMealPlanQueryKey();

    idbGet(RECIPES_CACHE_KEY).then((payload) => {
      if (payload !== undefined && queryClient.getQueryData(recipesKey) === undefined) {
        queryClient.setQueryData(recipesKey, { data: payload });
      }
    });

    idbGet(MEAL_PLAN_CACHE_KEY).then((payload) => {
      if (payload !== undefined && queryClient.getQueryData(mealPlanKey) === undefined) {
        queryClient.setQueryData(mealPlanKey, { data: payload });
      }
    });
  }, [queryClient]);
};
