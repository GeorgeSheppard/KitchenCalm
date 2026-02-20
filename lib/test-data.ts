import { format, startOfWeek, addDays } from "date-fns";
import { allRecipes } from "./recipe-data";
import type { PlannedMeal } from "./meal-planner-data";

const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 });

export const testPlannedMeals: PlannedMeal[] = [
  {
    id: "test-1",
    recipe: allRecipes[0], // Cinnamon Rolls
    mealType: "dinner",
    date: format(addDays(weekStart, 0), "yyyy-MM-dd"), // Monday
    servings: 4,
  },
  {
    id: "test-2",
    recipe: allRecipes[1], // Carbonara
    mealType: "dinner",
    date: format(addDays(weekStart, 1), "yyyy-MM-dd"), // Tuesday
    servings: 2,
  },
  {
    id: "test-3",
    recipe: allRecipes[3], // Chicken Stir-Fry
    mealType: "dinner",
    date: format(addDays(weekStart, 3), "yyyy-MM-dd"), // Thursday
    servings: 4,
  },
  {
    id: "test-4",
    recipe: allRecipes[4], // Blueberry Pancakes
    mealType: "dinner",
    date: format(addDays(weekStart, 5), "yyyy-MM-dd"), // Saturday
    servings: 2,
  },
];
