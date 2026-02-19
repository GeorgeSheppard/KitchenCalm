import Link from "next/link"
import { RecipeCard } from "@/components/recipe-card"
import { RecipePreviewCard } from "@/components/recipe-preview-card"
import { DeviceFrame } from "@/components/device-frame"
import { sampleRecipe } from "@/lib/recipe-data"

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl flex flex-col gap-16">
        {/* Nav */}
        <div className="flex items-center justify-between">
          <h1 className="font-serif text-3xl text-foreground">Recipe Components</h1>
          <Link
            href="/meal-planner"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Open Meal Planner
          </Link>
        </div>

        {/* --- Preview Card --- */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="font-serif text-2xl text-foreground">Preview Card</h2>
            <p className="text-sm text-muted-foreground">
              Compact view for search results and recipe listings.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-8">
            <DeviceFrame label="Desktop" width="640px">
              <RecipePreviewCard recipe={sampleRecipe} />
            </DeviceFrame>
            <DeviceFrame label="Mobile" width="360px">
              <RecipePreviewCard recipe={sampleRecipe} />
            </DeviceFrame>
          </div>
        </section>

        {/* --- Full Recipe Card --- */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="font-serif text-2xl text-foreground">Full Recipe</h2>
            <p className="text-sm text-muted-foreground">
              Complete recipe with interactive ingredients and instructions.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row items-start gap-8">
            <DeviceFrame label="Desktop" width="640px">
              <RecipeCard recipe={sampleRecipe} />
            </DeviceFrame>
            <DeviceFrame label="Mobile" width="360px">
              <RecipeCard recipe={sampleRecipe} />
            </DeviceFrame>
          </div>
        </section>
      </div>
    </main>
  )
}
