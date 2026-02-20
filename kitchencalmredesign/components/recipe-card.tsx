import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RecipeHeader } from "@/components/recipe-header"
import { RecipePartSection } from "@/components/recipe-part"
import { RecipeNotes } from "@/components/recipe-notes"
import type { Recipe } from "@/lib/recipe-data"

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card className="overflow-hidden border-border/60 shadow-sm">
      <CardContent className="flex flex-col gap-8 p-5 sm:p-8">
        <RecipeHeader recipe={recipe} />

        <Separator />

        {recipe.parts.map((part, i) => (
          <div key={i} className="flex flex-col gap-8">
            <RecipePartSection
              part={part}
              partIndex={i}
              totalParts={recipe.parts.length}
            />
            {i < recipe.parts.length - 1 && <Separator />}
          </div>
        ))}

        {recipe.notes && recipe.notes.length > 0 && (
          <>
            <Separator />
            <RecipeNotes notes={recipe.notes} />
          </>
        )}
      </CardContent>
    </Card>
  )
}
