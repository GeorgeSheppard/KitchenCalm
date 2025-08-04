import Typography from "@mui/material/Typography";
import { IRecipeInstruction } from "../../../../../../core/types/recipes";

export interface IInstructionsListProps {
  instructions: IRecipeInstruction[];
}

export const InstructionsList = (props: IInstructionsListProps) => {
  return (
    <div>
      {props.instructions.length > 0 && (
        <Typography variant="body2" fontSize={12} fontWeight={600}>
          Instructions
        </Typography>
      )}
      <div className="ml-4 space-y-1">
        {props.instructions.map(({ optional, instruction }, index) => {
          let visibleText = `${index + 1}. `;
          if (optional) {
            visibleText += "(Optional) ";
          }
          visibleText += instruction;
          return (
            <Typography key={instruction} variant="body2" fontSize={12}>
              {visibleText}
            </Typography>
          );
        })}
      </div>
    </div>
  );
};
