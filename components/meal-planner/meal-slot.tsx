"use client"

import { useState } from "react"
import type { Recipe } from "@/lib/recipe-data"
import type { MealType, PlannedMeal } from "@/lib/meal-planner-data"
import { PlannedMealCard } from "./planned-meal-card"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface MealSlotProps {
  date: string
  mealType: MealType
  meals: PlannedMeal[]
  onDrop: (recipe: Recipe, date: string, mealType: MealType) => void
  onUpdateServings: (id: string, servings: number) => void
  onRemoveMeal: (id: string) => void
}

export function MealSlot({
  date,
  mealType,
  meals,
  onDrop,
  onUpdateServings,
  onRemoveMeal,
}: MealSlotProps) {
  const [isDragOver, setIsDragOver] = useState(false)

  function handleDragOver(e: React.DragEvent) {
    if (e.dataTransfer.types.includes("application/recipe")) {
      e.preventDefault()
      e.dataTransfer.dropEffect = "copy"
      setIsDragOver(true)
    }
  }

  function handleDragLeave(e: React.DragEvent) {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false)
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setIsDragOver(false)
    const data = e.dataTransfer.getData("application/recipe")
    if (data) {
      try {
        const recipe: Recipe = JSON.parse(data)
        onDrop(recipe, date, mealType)
      } catch {
        // ignore malformed data
      }
    }
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "flex flex-col gap-1.5 rounded-lg border border-dashed p-2 min-h-[72px] transition-all",
        isDragOver
          ? "border-primary bg-primary/5 scale-[1.02] shadow-sm"
          : "border-transparent hover:border-border/50"
      )}
    >
      <span className="inline-flex self-start text-[10px] font-semibold uppercase tracking-wider rounded px-1.5 py-0.5 border bg-secondary text-secondary-foreground border-border/50">
        Meals
      </span>

      {meals.map((meal) => (
        <PlannedMealCard
          key={meal.id}
          meal={meal}
          onUpdateServings={onUpdateServings}
          onRemove={onRemoveMeal}
        />
      ))}

      {meals.length === 0 && (
        <div
          className={cn(
            "flex items-center justify-center rounded-md border border-dashed py-3 transition-colors",
            isDragOver
              ? "border-primary/40 text-primary"
              : "border-border/30 text-muted-foreground/30"
          )}
        >
          <Plus className="size-4" />
        </div>
      )}
    </div>
  )
}
