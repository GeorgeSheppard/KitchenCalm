import { useState, useCallback, useMemo } from "react";
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
import { useRecipeSearch } from "../core/recipes/hooks/use_recipe_search";
import { useSearchDebounce } from "../core/hooks/use_search_debounce";
import { usePutMealPlanToDynamo } from "../core/dynamo/hooks/use_dynamo_put";
import { iRecipeToRecipe } from "@/lib/adapters/recipe-adapter";
import { mealPlanToPlannedMeals } from "@/lib/adapters/meal-plan-adapter";
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

  const [searchString, debouncedSearch, setSearchString] = useSearchDebounce("");
  const { data: recipes } = useRecipes();
  const searchResultIds = useRecipeSearch(debouncedSearch);
  const mealPlan = useMealPlan();
  const putMealPlan = usePutMealPlanToDynamo();

  // Build image URL map from presigned URLs included in recipe data
  const imageUrls = useMemo(() => {
    const urls = new Map<RecipeUuid, string>();
    if (recipes) {
      for (const recipe of recipes) {
        const url = recipe.images?.[0]?.presignedUrl;
        if (url) {
          urls.set(recipe.uuid, url);
        }
      }
    }
    return urls;
  }, [recipes]);

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

  // Build sidebar recipe list (v0 format), filtered by search
  const sidebarRecipes = useMemo(() => {
    if (!recipes) return [];
    const ids = new Set(searchResultIds);
    return recipes
      .filter((r) => ids.has(r.uuid))
      .map((r) => iRecipeToRecipe(r, imageUrls.get(r.uuid)));
  }, [recipes, imageUrls, searchResultIds]);

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
            <RecipeSidebar recipes={sidebarRecipes} searchString={searchString} onSearchChange={setSearchString} />
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
        <RecipeSidebar recipes={sidebarRecipes} searchString={searchString} onSearchChange={setSearchString} />
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
