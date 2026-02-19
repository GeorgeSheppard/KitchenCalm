"use client"

import Image from "@/components/ui/next-image-compat"
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
    <div className="group relative flex items-start gap-2 rounded-md border border-border/50 bg-card p-2 shadow-sm transition-all hover:shadow-md">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onRemove(meal.id)}
        className="absolute -right-1.5 -top-1.5 size-5 rounded-full bg-destructive/10 text-destructive opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/20"
        aria-label="Remove meal"
      >
        <X className="size-3" />
      </Button>

      <div className="relative size-9 shrink-0 rounded overflow-hidden">
        <Image
          src={meal.recipe.image}
          alt={meal.recipe.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <span className="text-xs font-medium text-foreground leading-tight truncate">
          {meal.recipe.title}
        </span>

        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            className="size-5 rounded-full"
            onClick={() =>
              onUpdateServings(meal.id, Math.max(1, meal.servings - 1))
            }
            aria-label="Decrease servings"
          >
            <Minus className="size-2.5" />
          </Button>
          <span className="text-[11px] font-medium text-foreground min-w-[20px] text-center tabular-nums">
            {meal.servings}x
          </span>
          <Button
            variant="outline"
            size="icon"
            className="size-5 rounded-full"
            onClick={() => onUpdateServings(meal.id, meal.servings + 1)}
            aria-label="Increase servings"
          >
            <Plus className="size-2.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
