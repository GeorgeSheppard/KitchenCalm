import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import React, { memo, useCallback } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useMealPlan } from "../../../../../core/dynamo/hooks/use_dynamo_get";
import { DateString } from "../../../../../core/types/meal_plan";
import { useGetKitchencalmShoppingList } from "../../../../../client/generated/hooks";
import CircularProgress from "@mui/material/CircularProgress";

export interface ICreateShoppingListButtonProps {
  selected: Set<DateString>;
  openListDialog: () => void;
  setShoppingList: (data: string) => void;
  setSelected: React.Dispatch<React.SetStateAction<Set<string>>>;
}

export const CreateShoppingListButton = memo(function MemoCreateShoppingList(
  props: ICreateShoppingListButtonProps
) {
  const { selected, setSelected } = props;

  const mealPlan = useMealPlan();
  const allDates = mealPlan.data.map((item) => item.date);
  const allSelected = selected.size === allDates.length;

  const selectOrUnselect = useCallback(() => {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(allDates));
    }
  }, [setSelected, allDates, allSelected]);

  // Get start and end dates from selected dates
  const selectedDatesArray = Array.from(selected).sort();
  const startDate = selectedDatesArray[0];
  const endDate = selectedDatesArray[selectedDatesArray.length - 1];

  // Fetch shopping list from backend
  const { data: shoppingList, isLoading } = useGetKitchencalmShoppingList(
    selected.size > 0
      ? {
          startDate,
          endDate,
        }
      : undefined,
    {
      query: {
        enabled: selected.size > 0,
      },
    }
  );

  const handleCreateShoppingList = useCallback(() => {
    if (shoppingList && shoppingList.data) {
      // Extract the string data from AxiosResponse
      const shoppingListText = shoppingList.data;
      props.setShoppingList(shoppingListText);
      props.openListDialog();
    }
  }, [shoppingList, props]);

  return (
    <Tooltip
      title={
        props.selected.size === 0
          ? "Drag recipes into your meal plan, then select date(s) to create a shopping list from!"
          : ""
      }
      placement="bottom"
    >
      <ButtonGroup sx={{ width: "100%", position: "sticky", backgroundColor: 'white' }}>
        <Button variant="outlined" onClick={selectOrUnselect}>
          {allSelected ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </Button>
        <Button
          variant="outlined"
          fullWidth
          onClick={handleCreateShoppingList}
          disabled={
            props.selected.size === 0 ||
            mealPlan.isPlaceholderData ||
            isLoading
          }
        >
          {isLoading ? <CircularProgress size={24} /> : "Create shopping list"}
        </Button>
      </ButtonGroup>
    </Tooltip>
  );
});
