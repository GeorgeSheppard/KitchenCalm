import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { IRecipe } from "../core/types/recipes";
import { useDeleteRecipeFromDynamo } from "../core/dynamo/hooks/use_dynamo_delete";

interface DeleteRecipeDialogProps {
  recipe: IRecipe;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDeleted?: () => void;
}

export function DeleteRecipeDialog({
  recipe,
  open,
  onOpenChange,
  onDeleted,
}: DeleteRecipeDialogProps) {
  const deleteRecipe = useDeleteRecipeFromDynamo();

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await deleteRecipe.mutateAsync(recipe.uuid);
      onDeleted?.();
      onOpenChange(false);
    } catch (error) {
      // error handling via react-query
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    // Prevent closing the dialog while delete is in progress
    if (deleteRecipe.isLoading) {
      return;
    }
    onOpenChange(newOpen);
  };

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete recipe?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete &quot;{recipe.name}&quot;. This action
            cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={deleteRecipe.isLoading}>Cancel</AlertDialogCancel>
          <Button
            onClick={handleDelete}
            disabled={deleteRecipe.isLoading}
            variant="destructive"
          >
            {deleteRecipe.isLoading && (
              <Loader2 className="size-4 mr-2 animate-spin" />
            )}
            {deleteRecipe.isLoading ? "Deleting..." : "Delete"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
