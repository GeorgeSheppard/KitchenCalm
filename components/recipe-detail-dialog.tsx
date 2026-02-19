import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { RecipeCard } from "./recipe-card";
import { RecipeActions } from "./recipe-actions";
import { IRecipe } from "../core/types/recipes";
import { iRecipeToRecipe } from "@/lib/adapters/recipe-adapter";
import { useRecipeImage } from "@/lib/adapters/use-recipe-image";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RecipeDetailDialogProps {
  recipe: IRecipe | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RecipeDetailDialog({
  recipe,
  open,
  onOpenChange,
}: RecipeDetailDialogProps) {
  const imageUrl = useRecipeImage(recipe?.images);

  if (!recipe) return null;

  const v0Recipe = iRecipeToRecipe(recipe, imageUrl);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 gap-0 overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <h2 className="font-serif text-lg text-foreground">{v0Recipe.title}</h2>
          <RecipeActions recipe={recipe} onClose={() => onOpenChange(false)} />
        </div>
        <ScrollArea className="max-h-[calc(90vh-60px)]">
          <div className="p-1">
            <RecipeCard recipe={v0Recipe} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
