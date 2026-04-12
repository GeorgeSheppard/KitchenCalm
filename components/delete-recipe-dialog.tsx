import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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

  const handleDelete = async () => {
    try {
      await deleteRecipe.mutateAsync(recipe.uuid);
      onDeleted?.();
      onOpenChange(false);
    } catch (error) {
      // error handling via react-query
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (deleteRecipe.isLoading) {
      return;
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Delete recipe?</DialogTitle>
          <DialogDescription>
            This will permanently delete &quot;{recipe.name}&quot;. This action
            cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => handleOpenChange(false)}
            disabled={deleteRecipe.isLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            disabled={deleteRecipe.isLoading}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90 disabled:opacity-50"
          >
            {deleteRecipe.isLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
