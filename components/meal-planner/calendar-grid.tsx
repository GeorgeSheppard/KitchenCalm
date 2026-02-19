"use client"

import { format, isToday } from "date-fns"
import type { Recipe } from "@/lib/recipe-data"
import type { MealType, PlannedMeal } from "@/lib/meal-planner-data"
import { MealSlot } from "./meal-slot"
import { cn } from "@/lib/utils"

interface CalendarGridProps {
  days: Date[]
  meals: PlannedMeal[]
  onDrop: (recipe: Recipe, date: string, mealType: MealType) => void
  onUpdateServings: (id: string, servings: number) => void
  onRemoveMeal: (id: string) => void
}

export function CalendarGrid({
  days,
  meals,
  onDrop,
  onUpdateServings,
  onRemoveMeal,
}: CalendarGridProps) {
  return (
    <div className="flex flex-col gap-0 rounded-xl border border-border bg-card overflow-hidden">
      {/* Desktop: 7-column grid */}
      <div className="hidden lg:grid lg:grid-cols-7">
        {days.map((day) => {
          const dateStr = format(day, "yyyy-MM-dd")
          const today = isToday(day)
          const dayMeals = meals.filter((m) => m.date === dateStr)
          return (
            <div
              key={dateStr}
              className={cn(
                "flex flex-col border-r last:border-r-0 border-border/50",
                today && "bg-primary/[0.03]"
              )}
            >
              {/* Day header */}
              <div
                className={cn(
                  "flex flex-col items-center gap-0.5 py-3 border-b border-border/50",
                  today && "bg-primary/[0.06]"
                )}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {format(day, "EEE")}
                </span>
                <span
                  className={cn(
                    "flex size-7 items-center justify-center rounded-full text-sm font-semibold",
                    today
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground"
                  )}
                >
                  {format(day, "d")}
                </span>
              </div>
              {/* Single meal slot per day */}
              <div className="flex flex-col gap-1 p-1.5 min-h-[200px]">
                <MealSlot
                  date={dateStr}
                  mealType="dinner"
                  meals={dayMeals}
                  onDrop={onDrop}
                  onUpdateServings={onUpdateServings}
                  onRemoveMeal={onRemoveMeal}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Mobile: vertical day-by-day list */}
      <div className="flex flex-col lg:hidden divide-y divide-border/50">
        {days.map((day) => {
          const dateStr = format(day, "yyyy-MM-dd")
          const today = isToday(day)
          const dayMeals = meals.filter((m) => m.date === dateStr)
          return (
            <div
              key={dateStr}
              className={cn("flex flex-col", today && "bg-primary/[0.03]")}
            >
              <div
                className={cn(
                  "flex items-center gap-3 px-4 py-3 border-b border-border/30",
                  today && "bg-primary/[0.06]"
                )}
              >
                <span
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full text-base font-semibold",
                    today
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground"
                  )}
                >
                  {format(day, "d")}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">
                    {format(day, "EEEE")}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {format(day, "MMMM d")}
                  </span>
                </div>
              </div>
              <div className="p-2">
                <MealSlot
                  date={dateStr}
                  mealType="dinner"
                  meals={dayMeals}
                  onDrop={onDrop}
                  onUpdateServings={onUpdateServings}
                  onRemoveMeal={onRemoveMeal}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
