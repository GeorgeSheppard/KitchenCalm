import { UseFormReturn } from "react-hook-form";
import { IRecipe } from "../../../../../core/types/recipes";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { getDefaultIngredient } from "./component_ingredients";
import { $Enums } from "../../../../../generated/prisma";

export const ComponentIngredientUnit = ({
  form,
  index,
  ingredientIndex,
}: {
  form: UseFormReturn<IRecipe>;
  index: number;
  ingredientIndex: number;
}) => {
  const {
    watch,
    register,
    setValue,
    formState: { errors },
  } = form;
  return (
    <FormControl variant="standard">
      <Select
        margin="none"
        label="Unit"
        value={
          watch(
            `components.${index}.ingredients.${ingredientIndex}.unit`
          ) ?? getDefaultIngredient().unit
        }
        {...register(
          `components.${index}.ingredients.${ingredientIndex}.unit`,
          {
            required: "A unit is required",
          }
        )}
        onChange={(e) => {
          if (e.target.value === $Enums.Unit.NONE) {
            setValue(
              `components.${index}.ingredients.${ingredientIndex}.quantity`,
              1
            );
          }
          setValue(
            `components.${index}.ingredients.${ingredientIndex}.unit`,
            e.target.value as $Enums.Unit
          );
        }}
        error={
          !!errors?.components?.[index]?.ingredients?.[ingredientIndex]
            ?.unit
        }
      >
        {Object.entries($Enums.Unit).map((value) => {
          return (
            <MenuItem key={value[0]} value={value[1]}>
              {value[1]}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
