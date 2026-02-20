import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, ChefHat } from "lucide-react"
import type { Recipe } from "@/lib/recipe-data"

const difficultyColor = {
  Easy: "bg-accent text-accent-foreground",
  Medium: "bg-primary/15 text-primary",
  Hard: "bg-destructive/15 text-destructive",
}

export function RecipeHeader({ recipe }: { recipe: Recipe }) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col gap-4 pt-6">
        <div className="flex flex-wrap items-center gap-2">
          {recipe.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-medium">
              {tag}
            </Badge>
          ))}
          <Badge className={`text-xs font-medium border-0 ${difficultyColor[recipe.difficulty]}`}>
            {recipe.difficulty}
          </Badge>
        </div>
        <h1 className="font-serif text-2xl tracking-tight text-foreground @[480px]:text-3xl @[600px]:text-4xl text-balance">
          {recipe.title}
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          {recipe.description}
        </p>
        <div className="grid grid-cols-2 gap-3 pt-2 @[400px]:grid-cols-3 @[520px]:grid-cols-5">
          <MetaItem icon={<Clock className="size-4" />} label="Prep" value={recipe.prepTime} />
          <MetaItem icon={<Clock className="size-4" />} label="Cook" value={recipe.cookTime} />
          <MetaItem icon={<Clock className="size-4" />} label="Total" value={recipe.totalTime} />
          <MetaItem icon={<Users className="size-4" />} label="Yield" value={recipe.servings} />
          <MetaItem icon={<ChefHat className="size-4" />} label="Level" value={recipe.difficulty} />
        </div>
      </div>
    </div>
  )
}

function MetaItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-secondary/60 px-3 py-2">
      <span className="text-primary shrink-0">{icon}</span>
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] text-muted-foreground uppercase tracking-wide leading-none">{label}</span>
        <span className="text-sm font-medium text-foreground truncate leading-snug">{value}</span>
      </div>
    </div>
  )
}
