import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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
    } catch {
      // error handling via react-query
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete recipe?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete &quot;{recipe.name}&quot;. This action
            cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
