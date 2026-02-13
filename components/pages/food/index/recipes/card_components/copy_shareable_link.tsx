import IconButton from "@mui/material/IconButton";
import { IRecipe } from "../../../../../../core/types/recipes";
import { useAppSession } from "../../../../../../core/hooks/use_app_session";
import ShareIcon from "@mui/icons-material/Share";
import { useTemporaryState } from "../../../../../../core/hooks/use_temporary_state";
import Tooltip from "@mui/material/Tooltip";
import { usePostKitchencalmRecipesShare } from "../../../../../../client/generated/hooks";

export interface ICopyIngredientsButtonProps {
  recipe: IRecipe;
}

export const CopyShareableLink = ({ recipe }: ICopyIngredientsButtonProps) => {
  const session = useAppSession();
  const shareRecipeMutation = usePostKitchencalmRecipesShare()

  const copyLink = async () => {
    // Pass recipe in the expected format for the generated hook
    const result = await shareRecipeMutation.mutateAsync({ recipe: recipe as any })
    const baseUrl = process.env.NEXT_PUBLIC_ENV_DOMAIN || process.env.ENV_DOMAIN;
    const url = new URL(`${baseUrl}/food`);
    url.searchParams.append("share", result.shareId)
    navigator.clipboard.writeText(url.toString());
  };

  const [tooltip, iconOnClick] = useTemporaryState(
    "Copy shareable link",
    "Copied!"
  );

  return (
    <Tooltip title={tooltip}>
      <IconButton
        onClick={() => {
          copyLink();
          iconOnClick();
        }}
        size="small"
        disabled={session.loading || !session.id}
        disableRipple
      >
        <ShareIcon fontSize="small" htmlColor="#212121" />
      </IconButton>
    </Tooltip>
  );
};
