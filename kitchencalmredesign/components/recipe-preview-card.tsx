import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Clock, Users } from "lucide-react"
import type { Recipe } from "@/lib/recipe-data"

const difficultyColor = {
  Easy: "bg-accent text-accent-foreground",
  Medium: "bg-primary/15 text-primary",
  Hard: "bg-destructive/15 text-destructive",
}

export function RecipePreviewCard({ recipe }: { recipe: Recipe }) {
  const totalIngredients = recipe.parts.reduce(
    (sum, part) => sum + part.ingredients.length,
    0
  )

  return (
    <Card className="group overflow-hidden border-border/60 shadow-sm transition-shadow hover:shadow-md cursor-pointer @container">
      <div className="flex flex-col @[480px]:flex-row">
        <div className="relative aspect-[4/3] w-full @[480px]:aspect-square @[480px]:w-48 @[560px]:w-56 shrink-0 overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge
              className={`text-xs font-medium border-0 shadow-sm ${difficultyColor[recipe.difficulty]}`}
            >
              {recipe.difficulty}
            </Badge>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-3 p-5">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {recipe.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-[11px] font-medium px-2 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors text-balance">
              {recipe.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {recipe.description}
            </p>
          </div>

          <div className="flex items-center gap-4 pt-1">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="size-3.5 text-primary" />
              <span>{recipe.totalTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Users className="size-3.5 text-primary" />
              <span>{recipe.servings}</span>
            </div>
            <div className="ml-auto text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{recipe.parts.length}</span>
              {recipe.parts.length === 1 ? " part" : " parts"}
              {" / "}
              <span className="font-medium text-foreground">{totalIngredients}</span>
              {" ingredients"}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
