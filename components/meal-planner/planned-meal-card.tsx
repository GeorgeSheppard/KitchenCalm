"use client"

import type { PlannedMeal } from "@/lib/meal-planner-data"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X } from "lucide-react"

interface PlannedMealCardProps {
  meal: PlannedMeal
  onUpdateServings: (id: string, servings: number) => void
  onRemove: (id: string) => void
}

export function PlannedMealCard({
  meal,
  onUpdateServings,
  onRemove,
}: PlannedMealCardProps) {
  return (
    <div className="group relative rounded-lg border border-border/50 bg-card p-3 shadow-sm transition-all hover:shadow-md">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onRemove(meal.id)}
        className="absolute -right-1.5 -top-1.5 size-5 rounded-full bg-destructive/10 text-destructive opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/20"
        aria-label="Remove meal"
      >
        <X className="size-3" />
      </Button>

      <p className="text-sm font-medium text-foreground leading-snug mb-2">
        {meal.recipe.title}
      </p>

      <div className="flex items-center gap-1.5">
        <Button
          variant="outline"
          size="icon"
          className="size-6 rounded-full"
          onClick={() =>
            onUpdateServings(meal.id, Math.max(1, meal.servings - 1))
          }
          aria-label="Decrease servings"
        >
          <Minus className="size-3" />
        </Button>
        <span className="text-xs font-medium text-muted-foreground min-w-[28px] text-center tabular-nums">
          {meal.servings}x
        </span>
        <Button
          variant="outline"
          size="icon"
          className="size-6 rounded-full"
          onClick={() => onUpdateServings(meal.id, meal.servings + 1)}
          aria-label="Increase servings"
        >
          <Plus className="size-3" />
        </Button>
      </div>
    </div>
  )
}
