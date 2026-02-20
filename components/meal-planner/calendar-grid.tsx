"use client"

import { useState } from "react"
import { format, isToday } from "date-fns"
import { Plus } from "lucide-react"
import type { Recipe } from "@/lib/recipe-data"
import type { MealType, PlannedMeal } from "@/lib/meal-planner-data"
import { MealSlot } from "./meal-slot"
import { cn } from "@/lib/utils"

interface CalendarGridProps {
  days: Date[]
  meals: PlannedMeal[]
  selectedDates: Set<string>
  onToggleDate: (dateStr: string) => void
  onDrop: (recipe: Recipe, date: string, mealType: MealType) => void
  onUpdateServings: (id: string, servings: number) => void
  onRemoveMeal: (id: string) => void
}

function useDayDrop(
  dateStr: string,
  onDrop: (recipe: Recipe, date: string, mealType: MealType) => void
) {
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
        onDrop(recipe, dateStr, "dinner")
      } catch {
        // ignore malformed data
      }
    }
  }

  return { isDragOver, handleDragOver, handleDragLeave, handleDrop }
}

function DesktopDayColumn({
  day,
  meals,
  isSelected,
  onToggleDate,
  onDrop,
  onUpdateServings,
  onRemoveMeal,
}: {
  day: Date
  meals: PlannedMeal[]
  isSelected: boolean
  onToggleDate: (dateStr: string) => void
  onDrop: CalendarGridProps["onDrop"]
  onUpdateServings: CalendarGridProps["onUpdateServings"]
  onRemoveMeal: CalendarGridProps["onRemoveMeal"]
}) {
  const dateStr = format(day, "yyyy-MM-dd")
  const today = isToday(day)
  const dayMeals = meals.filter((m) => m.date === dateStr)
  const { isDragOver, handleDragOver, handleDragLeave, handleDrop } =
    useDayDrop(dateStr, onDrop)

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "flex flex-col border-r last:border-r-0 border-border/50 transition-colors",
        isSelected && "bg-primary/[0.06]",
        isDragOver && "bg-primary/5"
      )}
    >
      <div
        onClick={() => onToggleDate(dateStr)}
        className={cn(
          "flex flex-col items-center gap-0.5 py-3 border-b border-border/50 cursor-pointer transition-colors",
          isSelected ? "bg-primary/[0.10]" : "hover:bg-accent/50"
        )}
      >
        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {format(day, "EEE")}
        </span>
        <span
          className={cn(
            "flex size-7 items-center justify-center rounded-full text-sm font-semibold transition-colors",
            today
              ? "bg-primary text-primary-foreground"
              : isSelected
                ? "bg-primary/20 text-primary"
                : "text-foreground"
          )}
        >
          {format(day, "d")}
        </span>
      </div>
      <div className="flex flex-col gap-1.5 p-1.5 flex-1 min-h-[200px]">
        <MealSlot
          meals={dayMeals}
          onUpdateServings={onUpdateServings}
          onRemoveMeal={onRemoveMeal}
        />
        {dayMeals.length === 0 && (
          <div
            className={cn(
              "flex items-center justify-center rounded-md border border-dashed flex-1 transition-colors",
              isDragOver
                ? "border-primary/40 text-primary"
                : "border-border/30 text-muted-foreground/30"
            )}
          >
            <Plus className="size-4" />
          </div>
        )}
      </div>
    </div>
  )
}

function MobileDayRow({
  day,
  meals,
  isSelected,
  onToggleDate,
  onDrop,
  onUpdateServings,
  onRemoveMeal,
}: {
  day: Date
  meals: PlannedMeal[]
  isSelected: boolean
  onToggleDate: (dateStr: string) => void
  onDrop: CalendarGridProps["onDrop"]
  onUpdateServings: CalendarGridProps["onUpdateServings"]
  onRemoveMeal: CalendarGridProps["onRemoveMeal"]
}) {
  const dateStr = format(day, "yyyy-MM-dd")
  const today = isToday(day)
  const dayMeals = meals.filter((m) => m.date === dateStr)
  const { isDragOver, handleDragOver, handleDragLeave, handleDrop } =
    useDayDrop(dateStr, onDrop)

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "flex flex-col transition-colors",
        isSelected && "bg-primary/[0.06]",
        isDragOver && "bg-primary/5"
      )}
    >
      <div
        onClick={() => onToggleDate(dateStr)}
        className={cn(
          "flex items-center gap-3 px-4 py-3 border-b border-border/30 cursor-pointer transition-colors",
          isSelected ? "bg-primary/[0.10]" : "hover:bg-accent/50"
        )}
      >
        <span
          className={cn(
            "flex size-9 items-center justify-center rounded-full text-base font-semibold transition-colors",
            today
              ? "bg-primary text-primary-foreground"
              : isSelected
                ? "bg-primary/20 text-primary"
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
      <div className="flex flex-col gap-1.5 p-2 min-h-[60px]">
        <MealSlot
          meals={dayMeals}
          onUpdateServings={onUpdateServings}
          onRemoveMeal={onRemoveMeal}
        />
        {dayMeals.length === 0 && (
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
    </div>
  )
}

export function CalendarGrid({
  days,
  meals,
  selectedDates,
  onToggleDate,
  onDrop,
  onUpdateServings,
  onRemoveMeal,
}: CalendarGridProps) {
  return (
    <div className="flex flex-col gap-0 rounded-xl border border-border bg-card overflow-hidden">
      {/* Desktop: 7-column grid */}
      <div className="hidden lg:grid lg:grid-cols-7">
        {days.map((day) => (
          <DesktopDayColumn
            key={format(day, "yyyy-MM-dd")}
            day={day}
            meals={meals}
            isSelected={selectedDates.has(format(day, "yyyy-MM-dd"))}
            onToggleDate={onToggleDate}
            onDrop={onDrop}
            onUpdateServings={onUpdateServings}
            onRemoveMeal={onRemoveMeal}
          />
        ))}
      </div>

      {/* Mobile: vertical day-by-day list */}
      <div className="flex flex-col lg:hidden divide-y divide-border/50">
        {days.map((day) => (
          <MobileDayRow
            key={format(day, "yyyy-MM-dd")}
            day={day}
            meals={meals}
            isSelected={selectedDates.has(format(day, "yyyy-MM-dd"))}
            onToggleDate={onToggleDate}
            onDrop={onDrop}
            onUpdateServings={onUpdateServings}
            onRemoveMeal={onRemoveMeal}
          />
        ))}
      </div>
    </div>
  )
}
