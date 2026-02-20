"use client"

import { useState, useCallback } from "react"
import {
  startOfWeek,
  addWeeks,
  subWeeks,
  eachDayOfInterval,
  endOfWeek,
  format,
} from "date-fns"
import type { Recipe } from "@/lib/recipe-data"
import { allRecipes } from "@/lib/recipe-data"
import type { MealType, PlannedMeal } from "@/lib/meal-planner-data"
import { generateId, parseServingsNumber } from "@/lib/meal-planner-data"
import { WeekNavigation } from "./week-navigation"
import { RecipeSidebar } from "./recipe-sidebar"
import { CalendarGrid } from "./calendar-grid"
import { UtensilsCrossed } from "lucide-react"

export function MealPlanner() {
  const [weekStart, setWeekStart] = useState(() =>
    startOfWeek(new Date(), { weekStartsOn: 1 })
  )
  const [meals, setMeals] = useState<PlannedMeal[]>([])

  const days = eachDayOfInterval({
    start: weekStart,
    end: endOfWeek(weekStart, { weekStartsOn: 1 }),
  })

  const handlePreviousWeek = useCallback(() => {
    setWeekStart((prev) => subWeeks(prev, 1))
  }, [])

  const handleNextWeek = useCallback(() => {
    setWeekStart((prev) => addWeeks(prev, 1))
  }, [])

  const handleToday = useCallback(() => {
    setWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }))
  }, [])

  const handleDrop = useCallback(
    (recipe: Recipe, date: string, mealType: MealType) => {
      const newMeal: PlannedMeal = {
        id: generateId(),
        recipe,
        mealType,
        date,
        servings: parseServingsNumber(recipe.servings),
      }
      setMeals((prev) => [...prev, newMeal])
    },
    []
  )

  const handleUpdateServings = useCallback(
    (id: string, servings: number) => {
      setMeals((prev) =>
        prev.map((m) => (m.id === id ? { ...m, servings } : m))
      )
    },
    []
  )

  const handleRemoveMeal = useCallback((id: string) => {
    setMeals((prev) => prev.filter((m) => m.id !== id))
  }, [])

  // Count meals for current week
  const weekMeals = meals.filter((m) => {
    return days.some((d) => format(d, "yyyy-MM-dd") === m.date)
  })

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <UtensilsCrossed className="size-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl tracking-tight text-foreground">
              Meal Planner
            </h1>
            <p className="text-sm text-muted-foreground">
              {weekMeals.length === 0
                ? "Drag recipes onto the calendar to plan your week"
                : `${weekMeals.length} meal${weekMeals.length === 1 ? "" : "s"} planned this week`}
            </p>
          </div>
        </div>
        <WeekNavigation
          weekStart={weekStart}
          onPreviousWeek={handlePreviousWeek}
          onNextWeek={handleNextWeek}
          onToday={handleToday}
        />
      </div>

      {/* Main layout: sidebar + calendar */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 shrink-0">
          {/* Mobile: horizontal scroll strip */}
          <div className="lg:hidden">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1 mb-2">
              Recipes - drag onto calendar
            </h2>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
              {allRecipes.map((recipe) => (
                <MobileDraggableRecipe key={recipe.title} recipe={recipe} />
              ))}
            </div>
          </div>
          {/* Desktop: vertical sidebar */}
          <div className="hidden lg:block sticky top-6">
            <RecipeSidebar recipes={allRecipes} />
          </div>
        </aside>

        {/* Calendar */}
        <div className="flex-1 min-w-0">
          <CalendarGrid
            days={days}
            meals={weekMeals}
            onDrop={handleDrop}
            onUpdateServings={handleUpdateServings}
            onRemoveMeal={handleRemoveMeal}
          />
        </div>
      </div>
    </div>
  )
}

// Compact draggable chip for mobile sidebar
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { GripVertical } from "lucide-react"

function MobileDraggableRecipe({ recipe }: { recipe: Recipe }) {
  function handleDragStart(e: React.DragEvent) {
    e.dataTransfer.setData("application/recipe", JSON.stringify(recipe))
    e.dataTransfer.effectAllowed = "copy"
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="flex items-center gap-2 rounded-lg border border-border/60 bg-card px-3 py-2 shadow-sm cursor-grab active:cursor-grabbing hover:border-primary/30 transition-all select-none shrink-0"
    >
      <GripVertical className="size-3.5 text-muted-foreground/40 shrink-0" />
      <div className="relative size-8 shrink-0 rounded overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
          sizes="32px"
        />
      </div>
      <span className="text-xs font-medium text-foreground whitespace-nowrap">
        {recipe.title}
      </span>
      <Badge variant="secondary" className="text-[10px] px-1.5 py-0 shrink-0">
        {recipe.totalTime}
      </Badge>
    </div>
  )
}
