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
import { useGetSignedUrl } from "../client/hooks";
import {
  parseMealId,
  buildUpdateServingsPayload,
  buildRemoveMealPayload,
  buildDropPayload,
} from "../core/meal_plan/meal_plan_utilities";
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
  useEffect(() => {
    if (!recipes || recipes.length === 0) return;

    const newUrls = new Map<RecipeUuid, string>();
    let cancelled = false;

    const resolveImages = async () => {
      for (const recipe of recipes) {
        if (recipe.images?.[0]?.key) {
          try {
            const result = await signedUrl.mutateAsync(recipe.images[0].key);
            const url =
              typeof result === "string" ? result : (result as any)?.signedUrl;
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
      putMealPlan.mutate(buildDropPayload(iRecipe, date));
    },
    [recipeByTitle, putMealPlan]
  );

  const handleUpdateServings = useCallback(
    (id: string, newServings: number) => {
      const { isoDate, recipeId } = parseMealId(id);
      const iRecipe = recipes?.find((r) => r.uuid === recipeId);
      if (!iRecipe) return;
      const currentMeal = weekMeals.find((m) => m.id === id);
      if (!currentMeal) return;
      putMealPlan.mutate(buildUpdateServingsPayload(iRecipe, isoDate, currentMeal.servings, newServings));
    },
    [recipes, weekMeals, putMealPlan]
  );

  const handleRemoveMeal = useCallback(
    (id: string) => {
      const { isoDate, recipeId } = parseMealId(id);
      const iRecipe = recipes?.find((r) => r.uuid === recipeId);
      if (!iRecipe) return;
      const currentMeal = weekMeals.find((m) => m.id === id);
      if (!currentMeal) return;
      putMealPlan.mutate(buildRemoveMealPayload(iRecipe, isoDate, currentMeal.servings));
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
