import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConfirmDeleteButtonProps {
  onDelete: () => Promise<void>;
  disabled?: boolean;
}

export function ConfirmDeleteButton({
  onDelete,
  disabled,
}: ConfirmDeleteButtonProps) {
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);

  if (confirming) {
    return (
      <Button
        variant="destructive"
        size="sm"
        onClick={async () => {
          setDeleting(true);
          try {
            await onDelete();
          } catch (error) {
            console.error("[ConfirmDeleteButton] onDelete failed:", error);
          } finally {
            setDeleting(false);
            setConfirming(false);
          }
        }}
        disabled={deleting || disabled}
      >
        {deleting ? "Deleting..." : "Are you sure?"}
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setConfirming(true)}
      disabled={disabled}
      className="text-destructive hover:text-destructive"
    >
      <Trash2 className="size-3.5 mr-1.5" />
      Delete
    </Button>
  );
}
