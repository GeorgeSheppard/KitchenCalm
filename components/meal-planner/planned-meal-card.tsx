"use client"

import { useState } from "react"
import type { PlannedMeal } from "@/lib/meal-planner-data"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X, ChevronDown } from "lucide-react"

interface PlannedMealCardProps {
  meal: PlannedMeal
  onUpdateServings: (id: string, servings: number) => void
  onUpdateComponentServings: (id: string, componentId: string, servings: number) => void
  onRemove: (id: string) => void
}

export function PlannedMealCard({
  meal,
  onUpdateServings,
  onUpdateComponentServings,
  onRemove,
}: PlannedMealCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="group relative rounded-lg border border-border/50 bg-card shadow-sm transition-all hover:shadow-md">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onRemove(meal.id)}
        className="absolute -right-1.5 -top-1.5 size-5 rounded-full bg-destructive/10 text-destructive opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/20"
        aria-label="Remove meal"
      >
        <X className="size-3" />
      </Button>

      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground leading-snug truncate">
              {meal.recipe.title}
            </p>
          </div>
          {meal.components.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="size-5 shrink-0"
              onClick={() => setExpanded(!expanded)}
              aria-label={expanded ? "Collapse components" : "Expand components"}
            >
              <ChevronDown className={`size-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </Button>
          )}
        </div>

        <div className="mt-2 flex items-center gap-1.5">
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

        {expanded && meal.components.length > 1 && (
          <div className="mt-3 space-y-2 border-t border-border/30 pt-3">
            {meal.components.map((component) => (
              <div key={component.componentId} className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground truncate flex-1">
                  {component.name}
                </span>
                <div className="flex items-center gap-0.5">
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-5 rounded-full"
                    onClick={() =>
                      onUpdateComponentServings(
                        meal.id,
                        component.componentId,
                        Math.max(0, component.servings - 1)
                      )
                    }
                    aria-label={`Decrease ${component.name} servings`}
                  >
                    <Minus className="size-2" />
                  </Button>
                  <span className="text-xs font-medium text-muted-foreground min-w-[20px] text-center tabular-nums">
                    {component.servings}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-5 rounded-full"
                    onClick={() =>
                      onUpdateComponentServings(
                        meal.id,
                        component.componentId,
                        component.servings + 1
                      )
                    }
                    aria-label={`Increase ${component.name} servings`}
                  >
                    <Plus className="size-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
