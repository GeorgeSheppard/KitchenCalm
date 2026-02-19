import type { Recipe } from "./recipe-data"

export type MealType = "breakfast" | "lunch" | "dinner" | "snack"

export interface PlannedMeal {
  id: string
  recipe: Recipe
  mealType: MealType
  date: string // ISO date string "2026-02-18"
  servings: number
}

export const MEAL_TYPES: MealType[] = ["breakfast", "lunch", "dinner", "snack"]

export const MEAL_TYPE_LABELS: Record<MealType, string> = {
  breakfast: "Breakfast",
  lunch: "Lunch",
  dinner: "Dinner",
  snack: "Snack",
}

export const MEAL_TYPE_COLORS: Record<MealType, string> = {
  breakfast: "bg-amber-100 text-amber-800 border-amber-200",
  lunch: "bg-emerald-100 text-emerald-800 border-emerald-200",
  dinner: "bg-rose-100 text-rose-800 border-rose-200",
  snack: "bg-sky-100 text-sky-800 border-sky-200",
}

let _id = 0
export function generateId(): string {
  _id++
  return `meal-${Date.now()}-${_id}`
}

export function parseServingsNumber(servings: string): number {
  const match = servings.match(/\d+/)
  return match ? parseInt(match[0], 10) : 1
}
