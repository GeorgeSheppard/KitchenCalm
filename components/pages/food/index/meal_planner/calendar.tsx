import Grid from "@mui/material/Grid";
import { DroppableCard } from "./meal_drop_card";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { DateString } from "../../../../../core/types/meal_plan";
import { useMealPlan } from "../../../../../core/dynamo/hooks/use_dynamo_get";
import { memo } from 'react';

export interface ICalendarRowProps {
  selected: Set<DateString>;
  setSelected: Dispatch<SetStateAction<Set<DateString>>>;
}

export const Planner = memo(function MemoPlanner(props: ICalendarRowProps) {
  const { setSelected, selected } = props;
  const [lastSelected, setLastSelected] = useState<DateString | null>(null);
  const mealPlan = useMealPlan();

  // Toggles selection onClick
  const onClick = useCallback(
    (day: DateString) => (event: MouseEvent<HTMLDivElement>) => {
      setSelected((prevSelected) => {
        const newSelection = new Set(prevSelected);
        if (event.shiftKey) {
          event.preventDefault();
          const dates = mealPlan.data.map((item) => item.date);
          if (lastSelected) {
            const start = dates.indexOf(lastSelected);
            if (lastSelected !== day) {
              for (const date of dates.slice(start)) {
                newSelection.add(date);
                if (date === day) {
                  break;
                }
              }
            }
          }
        } else {
          if (newSelection.has(day)) {
            newSelection.delete(day);
          } else {
            newSelection.add(day);
          }
        }

        setLastSelected(day);
        return newSelection;
      });
    },
    [setSelected, lastSelected, mealPlan]
  );

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      marginTop={0}
      marginBottom={1}
      px={0}
    >
      {mealPlan.data.map(({ date }) => {
        return (
          <Grid
            item
            columns={1}
            key={date}
          >
            <DroppableCard
              day={date}
              selected={selected.has(date)}
              setSelected={setSelected}
              onClick={onClick}
              loading={mealPlan.isFetching}
            />
          </Grid>
        );
      })}
    </Grid>
  );
});
