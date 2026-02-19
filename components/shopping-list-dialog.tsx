import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { ShoppingCart, Copy, Check, ArrowLeft } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { isoToDateString } from "@/lib/adapters/date-adapter";
import { useGetKitchencalmShoppingList } from "../client/generated/hooks";
import { useAppSession } from "../core/hooks/use_app_session";

interface ShoppingListDialogProps {
  selectedDates: Set<string>;
}

export function ShoppingListDialog({ selectedDates }: ShoppingListDialogProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [shoppingList, setShoppingList] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Convert selected ISO dates to the backend date format for the API
  const selectedSorted = Array.from(selectedDates).sort();
  const startDate = selectedSorted[0]
    ? isoToDateString(selectedSorted[0])
    : undefined;
  const endDate = selectedSorted[selectedSorted.length - 1]
    ? isoToDateString(selectedSorted[selectedSorted.length - 1])
    : undefined;

  const { accessToken } = useAppSession();
  const { refetch, isFetching } = useGetKitchencalmShoppingList(
    startDate && endDate ? { startDate, endDate } : undefined,
    {
      query: {
        enabled: false,
      },
      axios: {
        headers: accessToken ? { authorization: `Bearer ${accessToken}` } : {},
      },
    }
  );

  const handleCreate = async () => {
    const result = await refetch();
    if (result.data?.data) {
      setShoppingList(result.data.data as string);
    }
  };

  const handleCopy = async () => {
    if (!shoppingList) return;
    await navigator.clipboard.writeText(shoppingList);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpen = () => {
    setShoppingList(null);
    setCopied(false);
    setDialogOpen(true);
  };

  const handleBack = () => {
    setShoppingList(null);
  };

  return (
    <>
      <Button variant="outline" size="sm" onClick={handleOpen}>
        <ShoppingCart className="size-4 mr-2" />
        Shopping List
      </Button>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {shoppingList && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-7"
                  onClick={handleBack}
                >
                  <ArrowLeft className="size-4" />
                </Button>
              )}
              Shopping List
            </DialogTitle>
          </DialogHeader>

          {shoppingList ? (
            <>
              <div className="overflow-y-auto max-h-[60vh]">
                <pre className="whitespace-pre-wrap text-sm text-foreground p-4 bg-secondary/40 rounded-lg">
                  {shoppingList}
                </pre>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Close
                </Button>
                <Button onClick={handleCopy}>
                  {copied ? (
                    <Check className="size-4 mr-2" />
                  ) : (
                    <Copy className="size-4 mr-2" />
                  )}
                  {copied ? "Copied!" : "Copy to clipboard"}
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
              {selectedDates.size === 0 ? (
                <p className="text-sm text-muted-foreground py-4">
                  Click on days in the calendar to select them, then create your shopping list.
                </p>
              ) : (
                <p className="text-sm text-muted-foreground py-2">
                  {selectedDates.size} day{selectedDates.size === 1 ? "" : "s"} selected in the calendar.
                </p>
              )}
              <DialogFooter>
                <Button
                  onClick={handleCreate}
                  disabled={selectedDates.size === 0 || isFetching}
                  className="w-full"
                >
                  {isFetching ? (
                    <Spinner className="size-4 mr-2" />
                  ) : (
                    <ShoppingCart className="size-4 mr-2" />
                  )}
                  Create Shopping List
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
