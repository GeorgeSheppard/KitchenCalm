"use client"

import { useState } from "react"
import type { RecipeUuid, ComponentUuid, IRecipe } from "../../core/types/recipes"
import type { IMealPlanComponent } from "../../core/types/meal_plan"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X, ChevronDown } from "lucide-react"

interface PlannedMealCardProps {
  recipeId: RecipeUuid
  timestamp: number
  components: IMealPlanComponent[]
  recipes: Map<RecipeUuid, IRecipe>
  onUpdateComponentServings: (recipeId: RecipeUuid, componentId: ComponentUuid, timestamp: number, servings: number) => void
  onRemove: (recipeId: RecipeUuid, timestamp: number) => void
}

export function PlannedMealCard({
  recipeId,
  timestamp,
  components,
  recipes,
  onUpdateComponentServings,
  onRemove,
}: PlannedMealCardProps) {
  const [expanded, setExpanded] = useState(false)

  const recipe = recipes.get(recipeId)
  const recipeTitle = recipe?.name || "Unknown Recipe"

  return (
    <div className="group relative rounded-lg border border-border/50 bg-card shadow-sm transition-all hover:shadow-md">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onRemove(recipeId, timestamp)}
        className="absolute -right-1.5 -top-1.5 size-5 rounded-full bg-destructive/10 text-destructive opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/20"
        aria-label="Remove meal"
      >
        <X className="size-3" />
      </Button>

      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground leading-snug truncate">
              {recipeTitle}
            </p>
          </div>
          {components.length > 1 && (
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

        {expanded && components.length > 1 && (
          <div className="mt-3 space-y-2 border-t border-border/30 pt-3">
            {components.map((component) => {
              const componentDef = recipe?.components.find((c) => c.uuid === component.componentId)
              const componentName = componentDef?.name || "Component"

              return (
                <div key={component.componentId} className="flex items-center justify-between gap-2">
                  <span className="text-xs text-muted-foreground truncate flex-1">
                    {componentName}
                  </span>
                  <div className="flex items-center gap-0.5">
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-5 rounded-full"
                      onClick={() =>
                        onUpdateComponentServings(
                          recipeId,
                          component.componentId,
                          timestamp,
                          Math.max(0, component.servings - 1)
                        )
                      }
                      aria-label={`Decrease ${componentName} servings`}
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
                          recipeId,
                          component.componentId,
                          timestamp,
                          component.servings + 1
                        )
                      }
                      aria-label={`Increase ${componentName} servings`}
                    >
                      <Plus className="size-2" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
