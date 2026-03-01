import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Pencil, Copy, Trash2 } from "lucide-react";
import { IRecipe } from "../core/types/recipes";
import { Quantities } from "../core/recipes/units";
import { useAppSession } from "../core/hooks/use_app_session";
import { DeleteRecipeDialog } from "./delete-recipe-dialog";

interface RecipeActionsProps {
  recipe: IRecipe;
  onClose?: () => void;
}

export function RecipeActions({ recipe, onClose }: RecipeActionsProps) {
  const router = useRouter();
  const session = useAppSession();
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleEdit = () => {
    onClose?.();
    router.push(`/food/${recipe.uuid}`);
  };

  const handleCopyIngredients = () => {
    const ingredients = recipe.components.flatMap((c) => c.ingredients);
    const text = ingredients
      .map((ing) =>
        Quantities.toStringWithIngredient(ing.name, ing.quantity)
      )
      .join("\n");
    navigator.clipboard.writeText(text);
  };

  const handleDeleteConfirmed = () => {
    setDeleteOpen(false);
    onClose?.();
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={handleEdit}>
          <Pencil className="size-3.5 mr-1.5" />
          Edit
        </Button>
        <Button variant="outline" size="sm" onClick={handleCopyIngredients}>
          <Copy className="size-3.5 mr-1.5" />
          Copy ingredients
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setDeleteOpen(true)}
          className="text-destructive hover:text-destructive"
        >
          <Trash2 className="size-3.5 mr-1.5" />
          Delete
        </Button>
      </div>

      <DeleteRecipeDialog
        recipe={recipe}
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onDeleted={handleDeleteConfirmed}
      />
    </>
  );
}
