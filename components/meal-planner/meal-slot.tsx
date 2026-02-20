"use client"

import type { PlannedMeal } from "@/lib/meal-planner-data"
import { PlannedMealCard } from "./planned-meal-card"

interface MealSlotProps {
  meals: PlannedMeal[]
  onUpdateServings: (id: string, servings: number) => void
  onRemoveMeal: (id: string) => void
}

export function MealSlot({
  meals,
  onUpdateServings,
  onRemoveMeal,
}: MealSlotProps) {
  return (
    <>
      {meals.map((meal) => (
        <PlannedMealCard
          key={meal.id}
          meal={meal}
          onUpdateServings={onUpdateServings}
          onRemove={onRemoveMeal}
        />
      ))}
    </>
  )
}
