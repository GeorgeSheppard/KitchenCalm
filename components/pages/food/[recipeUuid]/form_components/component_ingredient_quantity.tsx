import { UseFormReturn } from "react-hook-form";
import { IRecipe } from "../../../../../core/types/recipes";
import TextField from "@mui/material/TextField";
import { $Enums } from "../../../../../generated/prisma";

export const ComponentIngredientQuantity = ({
  form,
  index,
  ingredientIndex,
}: {
  form: UseFormReturn<IRecipe>;
  index: number;
  ingredientIndex: number;
}) => {
  const {
    register,
    formState: { errors },
    watch,
  } = form;
  return (
    <TextField
      variant="standard"
      margin="none"
      type="number"
      inputProps={{ step: 0.01 }}
      {...register(
        `components.${index}.ingredients.${ingredientIndex}.quantity`,
        {
          min: 0,
          valueAsNumber: true,
          validate: (value, formValues) =>
            formValues.components[index].ingredients[ingredientIndex].unit === $Enums.Unit.NONE
              ? !value || isNaN(value)
              : !!value,
        }
      )}
      error={
        !!errors?.components?.[index]?.ingredients?.[ingredientIndex]?.quantity
      }
      disabled={
        watch(
          `components.${index}.ingredients.${ingredientIndex}.unit`
        ) === $Enums.Unit.NONE
      }
    />
  );
};
