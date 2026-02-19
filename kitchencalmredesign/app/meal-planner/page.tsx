import { MealPlanner } from "@/components/meal-planner/meal-planner"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meal Planner",
  description: "Plan your weekly meals by dragging recipes onto a calendar",
}

export default function MealPlannerPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <MealPlanner />
      </div>
    </main>
  )
}
