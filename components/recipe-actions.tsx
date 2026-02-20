import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Pencil, Share2, Copy, Trash2 } from "lucide-react";
import { IRecipe } from "../core/types/recipes";
import { Quantities } from "../core/recipes/units";
import { useShareRecipe } from "../client/hooks";
import { useAppSession } from "../core/hooks/use_app_session";
import { DeleteRecipeDialog } from "./delete-recipe-dialog";

interface RecipeActionsProps {
  recipe: IRecipe;
  onClose?: () => void;
}

export function RecipeActions({ recipe, onClose }: RecipeActionsProps) {
  const router = useRouter();
  const session = useAppSession();
  const shareRecipeMutation = useShareRecipe();
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleEdit = () => {
    onClose?.();
    router.push(`/food/${recipe.uuid}`);
  };

  const handleShare = async () => {
    try {
      const result = await shareRecipeMutation.mutateAsync(recipe);
      const baseUrl =
        process.env.NEXT_PUBLIC_ENV_DOMAIN || process.env.ENV_DOMAIN;
      const url = new URL(`${baseUrl}/food`);
      url.searchParams.append("share", result.shareId);
      await navigator.clipboard.writeText(url.toString());
    } catch {
      // ignore
    }
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
        <Button
          variant="outline"
          size="sm"
          onClick={handleShare}
          disabled={session.loading || !session.id}
        >
          <Share2 className="size-3.5 mr-1.5" />
          Share
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
