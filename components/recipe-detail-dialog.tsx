import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { RecipeCard } from "./recipe-card";
import { RecipeActions } from "./recipe-actions";
import { IRecipe } from "../core/types/recipes";
import { iRecipeToRecipe } from "@/lib/adapters/recipe-adapter";
import { useRecipeImage } from "@/lib/adapters/use-recipe-image";
import type { Recipe } from "@/lib/recipe-data";

interface RecipeDetailDialogProps {
  recipe: IRecipe | null;
  testRecipe?: Recipe | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RecipeDetailDialog({
  recipe,
  testRecipe,
  open,
  onOpenChange,
}: RecipeDetailDialogProps) {
  const imageUrl = useRecipeImage(recipe?.images);

  const v0Recipe = recipe
    ? iRecipeToRecipe(recipe, imageUrl)
    : testRecipe || null;

  if (!v0Recipe) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl sm:max-w-3xl max-h-[90vh] p-0 gap-0 overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <h2 className="font-serif text-lg text-foreground">
            {v0Recipe.title}
          </h2>
          {recipe && (
            <RecipeActions
              recipe={recipe}
              onClose={() => onOpenChange(false)}
            />
          )}
        </div>
        <div className="overflow-y-auto max-h-[calc(90vh-60px)]">
          <div className="p-1">
            <RecipeCard recipe={v0Recipe} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
