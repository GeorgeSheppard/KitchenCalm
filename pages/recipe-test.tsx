import { RecipeCard } from "@/components/recipe-card"
import { sampleRecipe } from "@/lib/recipe-data"

export default function RecipeTestPage() {
  // Update the image to use a placeholder
  const testRecipe = {
    ...sampleRecipe,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=450&fit=crop",
  }

  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <RecipeCard recipe={testRecipe} />
      </div>
    </main>
  )
}
