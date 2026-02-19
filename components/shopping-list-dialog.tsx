import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, Copy, Check } from "lucide-react";
import { IMealPlan, DateString } from "../core/types/meal_plan";
import { useGetKitchencalmShoppingList } from "../client/generated/hooks";
import { Spinner } from "@/components/ui/spinner";

interface ShoppingListDialogProps {
  mealPlan: IMealPlan;
}

export function ShoppingListDialog({ mealPlan }: ShoppingListDialogProps) {
  const [selected, setSelected] = useState<Set<DateString>>(() => new Set());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [shoppingList, setShoppingList] = useState("");
  const [copied, setCopied] = useState(false);

  const allDates = mealPlan.map((item) => item.date);
  const allSelected = selected.size === allDates.length && allDates.length > 0;

  const toggleAll = useCallback(() => {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(allDates));
    }
  }, [allSelected, allDates]);

  const toggleDate = useCallback((date: DateString) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(date)) {
        next.delete(date);
      } else {
        next.add(date);
      }
      return next;
    });
  }, []);

  // Get sorted dates for the API call
  const selectedDatesArray = Array.from(selected).sort();
  const startDate = selectedDatesArray[0];
  const endDate = selectedDatesArray[selectedDatesArray.length - 1];

  const { data: shoppingListData, isLoading } =
    useGetKitchencalmShoppingList(
      selected.size > 0 ? { startDate, endDate } : undefined,
      {
        query: {
          enabled: selected.size > 0,
        },
      }
    );

  const handleCreateList = () => {
    if (shoppingListData?.data) {
      setShoppingList(shoppingListData.data as string);
      setDialogOpen(true);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shoppingList);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Only show dates that have meals
  const datesWithMeals = allDates.filter((date) => {
    const item = mealPlan.find((i) => i.date === date);
    return item && Object.keys(item.plan).length > 0;
  });

  return (
    <>
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">
            Shopping List
          </h3>
          <Button size="sm" variant="ghost" onClick={toggleAll}>
            {allSelected ? "Deselect all" : "Select all"}
          </Button>
        </div>

        {datesWithMeals.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Add meals to your plan to create a shopping list
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {datesWithMeals.map((date) => {
              const label = date.split(" - ")[0]?.slice(0, 3) || date;
              return (
                <label
                  key={date}
                  className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm cursor-pointer hover:bg-accent/50 transition-colors"
                >
                  <Checkbox
                    checked={selected.has(date)}
                    onCheckedChange={() => toggleDate(date)}
                  />
                  <span>{label}</span>
                </label>
              );
            })}
          </div>
        )}

        <Button
          onClick={handleCreateList}
          disabled={selected.size === 0 || isLoading}
          className="w-full"
        >
          {isLoading ? (
            <Spinner className="size-4 mr-2" />
          ) : (
            <ShoppingCart className="size-4 mr-2" />
          )}
          Create Shopping List
        </Button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Shopping List</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
            <pre className="whitespace-pre-wrap text-sm text-foreground p-4">
              {shoppingList || "No shopping list available."}
            </pre>
          </ScrollArea>
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
        </DialogContent>
      </Dialog>
    </>
  );
}
