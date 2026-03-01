"use client"

import type { PlannedMeal } from "@/lib/meal-planner-data"
import { PlannedMealCard } from "./planned-meal-card"

interface MealSlotProps {
  meals: PlannedMeal[]
  onUpdateServings: (id: string, servings: number) => void
  onUpdateComponentServings: (id: string, componentId: string, servings: number) => void
  onRemoveMeal: (id: string) => void
}

export function MealSlot({
  meals,
  onUpdateServings,
  onUpdateComponentServings,
  onRemoveMeal,
}: MealSlotProps) {
  return (
    <>
      {meals.map((meal) => (
        <PlannedMealCard
          key={meal.id}
          meal={meal}
          onUpdateServings={onUpdateServings}
          onUpdateComponentServings={onUpdateComponentServings}
          onRemove={onRemoveMeal}
        />
      ))}
    </>
  )
}
