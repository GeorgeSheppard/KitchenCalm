import { useState } from "react";
import { IRecipe, RecipeUuid } from "../core/types/recipes";
import { useRecipes } from "../core/dynamo/hooks/use_dynamo_get";
import { ConnectedRecipePreviewCard } from "./connected-recipe-preview-card";
import { CreateRecipeCard } from "./create-recipe-card";
import { RecipeDetailDialog } from "./recipe-detail-dialog";
import { Skeleton } from "@/components/ui/skeleton";

interface RecipeGridProps {
  recipeIds: RecipeUuid[];
}

export function RecipeGrid({ recipeIds }: RecipeGridProps) {
  const { data: recipes, isLoading } = useRecipes();
  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const recipesMap = new Map<RecipeUuid, IRecipe>();
  if (recipes) {
    for (const r of recipes) {
      recipesMap.set(r.uuid, r);
    }
  }

  const handleRecipeClick = (recipe: IRecipe) => {
    setSelectedRecipe(recipe);
    setDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-48 rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        <CreateRecipeCard />
        {recipeIds.map((id) => {
          const recipe = recipesMap.get(id);
          if (!recipe) return null;
          return (
            <ConnectedRecipePreviewCard
              key={id}
              recipe={recipe}
              onClick={() => handleRecipeClick(recipe)}
            />
          );
        })}
      </div>

      <RecipeDetailDialog
        recipe={selectedRecipe}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
