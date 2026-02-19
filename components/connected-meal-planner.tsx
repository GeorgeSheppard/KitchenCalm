import { useState, useCallback, useMemo, useEffect } from "react";
import {
  startOfWeek,
  addWeeks,
  subWeeks,
  eachDayOfInterval,
  endOfWeek,
  format,
} from "date-fns";
import { UtensilsCrossed } from "lucide-react";
import { useRecipes } from "../core/dynamo/hooks/use_dynamo_get";
import { useMealPlan } from "../core/dynamo/hooks/use_dynamo_get";
import { usePutMealPlanToDynamo } from "../core/dynamo/hooks/use_dynamo_put";
import { iRecipeToRecipe } from "@/lib/adapters/recipe-adapter";
import { mealPlanToPlannedMeals } from "@/lib/adapters/meal-plan-adapter";
import { isoToDateString } from "@/lib/adapters/date-adapter";
import { useGetSignedUrl } from "../client/hooks";
import type { Recipe } from "@/lib/recipe-data";
import type { MealType } from "@/lib/meal-planner-data";
import { RecipeUuid, IRecipe } from "../core/types/recipes";
import { WeekNavigation } from "./meal-planner/week-navigation";
import { CalendarGrid } from "./meal-planner/calendar-grid";
import { RecipeSidebar } from "./meal-planner/recipe-sidebar";
import { ShoppingListDialog } from "./shopping-list-dialog";

export function ConnectedMealPlanner() {
  const [weekStart, setWeekStart] = useState(() =>
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  const { data: recipes } = useRecipes();
  const mealPlan = useMealPlan();
  const putMealPlan = usePutMealPlanToDynamo();

  // Build image URL map from recipes
  const [imageUrls, setImageUrls] = useState<Map<RecipeUuid, string>>(
    new Map()
  );
  const signedUrl = useGetSignedUrl();

  // Resolve images for all recipes
  useEffect(() => {
    if (!recipes) return;
    const newUrls = new Map<RecipeUuid, string>();
    let cancelled = false;

    const resolveImages = async () => {
      for (const recipe of recipes) {
        if (recipe.images?.[0]?.key) {
          try {
            const result = await signedUrl.mutateAsync(recipe.images[0].key);
            const url = typeof result === "string" ? result : (result as any)?.url;
            if (url && !cancelled) {
              newUrls.set(recipe.uuid, url);
            }
          } catch {
            // skip
          }
        }
      }
      if (!cancelled) setImageUrls(newUrls);
    };

    resolveImages();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes]);

  const days = eachDayOfInterval({
    start: weekStart,
    end: endOfWeek(weekStart, { weekStartsOn: 1 }),
  });

  // Convert backend data to v0 PlannedMeal[]
  const plannedMeals = useMemo(() => {
    if (!mealPlan.data || !recipes) return [];
    return mealPlanToPlannedMeals(mealPlan.data, recipes, imageUrls);
  }, [mealPlan.data, recipes, imageUrls]);

  // Filter to current week
  const weekMeals = useMemo(() => {
    return plannedMeals.filter((m) =>
      days.some((d) => format(d, "yyyy-MM-dd") === m.date)
    );
  }, [plannedMeals, days]);

  // Build sidebar recipe list (v0 format)
  const sidebarRecipes = useMemo(() => {
    if (!recipes) return [];
    return recipes.map((r) => iRecipeToRecipe(r, imageUrls.get(r.uuid)));
  }, [recipes, imageUrls]);

  // Map v0 Recipe title back to IRecipe for meal plan operations
  const recipeByTitle = useMemo(() => {
    const map = new Map<string, IRecipe>();
    if (recipes) {
      for (const r of recipes) {
        map.set(r.name, r);
      }
    }
    return map;
  }, [recipes]);

  const handlePreviousWeek = useCallback(() => {
    setWeekStart((prev) => subWeeks(prev, 1));
  }, []);

  const handleNextWeek = useCallback(() => {
    setWeekStart((prev) => addWeeks(prev, 1));
  }, []);

  const handleToday = useCallback(() => {
    setWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }));
  }, []);

  const handleDrop = useCallback(
    (recipe: Recipe, date: string, _mealType: MealType) => {
      const iRecipe = recipeByTitle.get(recipe.title);
      if (!iRecipe) return;

      const dateStr = isoToDateString(date);
      const components = iRecipe.components.map((c) => ({
        recipeId: iRecipe.uuid,
        componentId: c.uuid,
        servingsIncrease: c.servings || 1,
      }));

      putMealPlan.mutate({ date: dateStr, components });
    },
    [recipeByTitle, putMealPlan]
  );

  const handleUpdateServings = useCallback(
    (id: string, newServings: number) => {
      // id format: "YYYY-MM-DD-recipeId"
      const parts = id.split("-");
      const isoDate = parts.slice(0, 3).join("-");
      const recipeId = parts.slice(3).join("-");

      const dateStr = isoToDateString(isoDate);
      const iRecipe = recipes?.find((r) => r.uuid === recipeId);
      if (!iRecipe) return;

      // Find current servings to compute the delta
      const currentMeal = weekMeals.find((m) => m.id === id);
      if (!currentMeal) return;
      const delta = newServings - currentMeal.servings;

      const components = iRecipe.components.map((c) => ({
        recipeId: iRecipe.uuid,
        componentId: c.uuid,
        servingsIncrease: delta,
      }));

      putMealPlan.mutate({ date: dateStr, components });
    },
    [recipes, weekMeals, putMealPlan]
  );

  const handleRemoveMeal = useCallback(
    (id: string) => {
      const parts = id.split("-");
      const isoDate = parts.slice(0, 3).join("-");
      const recipeId = parts.slice(3).join("-");

      const dateStr = isoToDateString(isoDate);
      const iRecipe = recipes?.find((r) => r.uuid === recipeId);
      if (!iRecipe) return;

      // Find current servings so we can negate them
      const currentMeal = weekMeals.find((m) => m.id === id);
      if (!currentMeal) return;

      const components = iRecipe.components.map((c) => ({
        recipeId: iRecipe.uuid,
        componentId: c.uuid,
        servingsIncrease: -(currentMeal.servings + 1), // negative enough to trigger removal
      }));

      putMealPlan.mutate({ date: dateStr, components });
    },
    [recipes, weekMeals, putMealPlan]
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <UtensilsCrossed className="size-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-serif text-2xl tracking-tight text-foreground">
              Meal Planner
            </h2>
            <p className="text-sm text-muted-foreground">
              {weekMeals.length === 0
                ? "Drag recipes onto the calendar to plan your week"
                : `${weekMeals.length} meal${weekMeals.length === 1 ? "" : "s"} planned this week`}
            </p>
          </div>
        </div>
        <WeekNavigation
          weekStart={weekStart}
          onPreviousWeek={handlePreviousWeek}
          onNextWeek={handleNextWeek}
          onToday={handleToday}
        />
      </div>

      {/* Recipe sidebar (shown above calendar on smaller screens within sidebar) */}
      <RecipeSidebar recipes={sidebarRecipes} />

      {/* Calendar */}
      <CalendarGrid
        days={days}
        meals={weekMeals}
        onDrop={handleDrop}
        onUpdateServings={handleUpdateServings}
        onRemoveMeal={handleRemoveMeal}
      />

      {/* Shopping list */}
      <ShoppingListDialog mealPlan={mealPlan.data} />
    </div>
  );
}
