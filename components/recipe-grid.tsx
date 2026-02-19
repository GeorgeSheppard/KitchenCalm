import { useState } from "react";
import { IRecipe, RecipeUuid } from "../core/types/recipes";
import { useRecipes } from "../core/dynamo/hooks/use_dynamo_get";
import { ConnectedRecipePreviewCard } from "./connected-recipe-preview-card";
import { CreateRecipeCard } from "./create-recipe-card";
import { RecipeDetailDialog } from "./recipe-detail-dialog";
import { RecipePreviewCard } from "./recipe-preview-card";
import { Skeleton } from "@/components/ui/skeleton";
import { allRecipes } from "@/lib/recipe-data";
import type { Recipe } from "@/lib/recipe-data";

interface RecipeGridProps {
  recipeIds: RecipeUuid[];
}

export function RecipeGrid({ recipeIds }: RecipeGridProps) {
  const { data: recipes, isLoading } = useRecipes();
  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe | null>(null);
  const [selectedTestRecipe, setSelectedTestRecipe] = useState<Recipe | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  const recipesMap = new Map<RecipeUuid, IRecipe>();
  if (recipes) {
    for (const r of recipes) {
      recipesMap.set(r.uuid, r);
    }
  }

  const handleRecipeClick = (recipe: IRecipe) => {
    setSelectedRecipe(recipe);
    setSelectedTestRecipe(null);
    setDialogOpen(true);
  };

  const hasRealRecipes = recipes && recipes.length > 0;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-48 rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CreateRecipeCard />
        {hasRealRecipes
          ? recipeIds.map((id) => {
              const recipe = recipesMap.get(id);
              if (!recipe) return null;
              return (
                <ConnectedRecipePreviewCard
                  key={id}
                  recipe={recipe}
                  onClick={() => handleRecipeClick(recipe)}
                />
              );
            })
          : allRecipes.map((recipe) => (
              <div
                key={recipe.title}
                onClick={() => {
                  setSelectedTestRecipe(recipe);
                  setSelectedRecipe(null);
                  setDialogOpen(true);
                }}
              >
                <RecipePreviewCard recipe={recipe} />
              </div>
            ))}
      </div>

      <RecipeDetailDialog
        recipe={selectedRecipe}
        testRecipe={selectedTestRecipe}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
