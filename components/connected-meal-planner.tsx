import { useState, useCallback, useMemo, useEffect, useRef } from "react";
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
import { allRecipes } from "@/lib/recipe-data";
import type { MealType } from "@/lib/meal-planner-data";
import { testPlannedMeals } from "@/lib/test-data";
import { RecipeUuid, IRecipe } from "../core/types/recipes";
import { WeekNavigation } from "./meal-planner/week-navigation";
import { CalendarGrid } from "./meal-planner/calendar-grid";
import { RecipeSidebar } from "./meal-planner/recipe-sidebar";
import { ShoppingListDialog } from "./shopping-list-dialog";

export function ConnectedMealPlanner() {
  const [weekStart, setWeekStart] = useState(() =>
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const [selectedDates, setSelectedDates] = useState<Set<string>>(
    () => new Set()
  );

  const { data: recipes } = useRecipes();
  const mealPlan = useMealPlan();
  const putMealPlan = usePutMealPlanToDynamo();

  // Build image URL map from recipes
  const [imageUrls, setImageUrls] = useState<Map<RecipeUuid, string>>(
    new Map()
  );
  const signedUrl = useGetSignedUrl();

  // Stable key for recipe list to avoid infinite re-renders
  // (useRecipes returns a new array reference every render)
  const recipeIds = useMemo(
    () => recipes?.map((r) => r.uuid).join(",") ?? "",
    [recipes]
  );

  // Resolve images for all recipes
  const resolvedRef = useRef("");
  useEffect(() => {
    if (!recipes || recipes.length === 0 || resolvedRef.current === recipeIds)
      return;
    resolvedRef.current = recipeIds;

    const newUrls = new Map<RecipeUuid, string>();
    let cancelled = false;

    const resolveImages = async () => {
      for (const recipe of recipes) {
        if (recipe.images?.[0]?.key) {
          try {
            const result = await signedUrl.mutateAsync(recipe.images[0].key);
            const url =
              typeof result === "string" ? result : (result as any)?.url;
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
  }, [recipeIds]);

  const days = useMemo(
    () =>
      eachDayOfInterval({
        start: weekStart,
        end: endOfWeek(weekStart, { weekStartsOn: 1 }),
      }),
    [weekStart]
  );

  // Convert backend data to v0 PlannedMeal[]
  const plannedMeals = useMemo(() => {
    if (!mealPlan.data || !recipes) return [];
    return mealPlanToPlannedMeals(mealPlan.data, recipes, imageUrls);
  }, [mealPlan.data, recipes, imageUrls]);

  // Filter to current week
  const weekMeals = useMemo(() => {
    const realMeals = plannedMeals.filter((m) =>
      days.some((d) => format(d, "yyyy-MM-dd") === m.date)
    );
    // Fall back to test data when no real meals exist
    if (realMeals.length === 0) {
      return testPlannedMeals.filter((m) =>
        days.some((d) => format(d, "yyyy-MM-dd") === m.date)
      );
    }
    return realMeals;
  }, [plannedMeals, days]);

  // Build sidebar recipe list (v0 format)
  const sidebarRecipes = useMemo(() => {
    if (recipes && recipes.length > 0) {
      return recipes.map((r) => iRecipeToRecipe(r, imageUrls.get(r.uuid)));
    }
    // Fall back to test recipes
    return allRecipes;
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

  const handleToggleDate = useCallback((dateStr: string) => {
    setSelectedDates((prev) => {
      const next = new Set(prev);
      if (next.has(dateStr)) {
        next.delete(dateStr);
      } else {
        next.add(dateStr);
      }
      return next;
    });
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
      const parts = id.split("-");
      const isoDate = parts.slice(0, 3).join("-");
      const recipeId = parts.slice(3).join("-");

      const dateStr = isoToDateString(isoDate);
      const iRecipe = recipes?.find((r) => r.uuid === recipeId);
      if (!iRecipe) return;

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

      const currentMeal = weekMeals.find((m) => m.id === id);
      if (!currentMeal) return;

      const components = iRecipe.components.map((c) => ({
        recipeId: iRecipe.uuid,
        componentId: c.uuid,
        servingsIncrease: -(currentMeal.servings + 1),
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
        <div className="flex items-center gap-2">
          <WeekNavigation
            weekStart={weekStart}
            onPreviousWeek={handlePreviousWeek}
            onNextWeek={handleNextWeek}
            onToday={handleToday}
          />
          <ShoppingListDialog selectedDates={selectedDates} />
        </div>
      </div>

      {/* Desktop: side-by-side layout */}
      <div className="hidden lg:flex lg:gap-6">
        <aside className="w-[280px] shrink-0">
          <div className="sticky top-6">
            <RecipeSidebar recipes={sidebarRecipes} />
          </div>
        </aside>
        <div className="flex-1 min-w-0">
          <CalendarGrid
            days={days}
            meals={weekMeals}
            selectedDates={selectedDates}
            onToggleDate={handleToggleDate}
            onDrop={handleDrop}
            onUpdateServings={handleUpdateServings}
            onRemoveMeal={handleRemoveMeal}
          />
        </div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="flex flex-col gap-6 lg:hidden">
        <RecipeSidebar recipes={sidebarRecipes} />
        <CalendarGrid
          days={days}
          meals={weekMeals}
          selectedDates={selectedDates}
          onToggleDate={handleToggleDate}
          onDrop={handleDrop}
          onUpdateServings={handleUpdateServings}
          onRemoveMeal={handleRemoveMeal}
        />
      </div>

    </div>
  );
}
