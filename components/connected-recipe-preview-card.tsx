import { IRecipe } from "../core/types/recipes";
import { iRecipeToRecipe } from "@/lib/adapters/recipe-adapter";
import { useRecipeImage } from "@/lib/adapters/use-recipe-image";
import { RecipePreviewCard } from "./recipe-preview-card";

interface ConnectedRecipePreviewCardProps {
  recipe: IRecipe;
  onClick?: () => void;
}

export function ConnectedRecipePreviewCard({
  recipe,
  onClick,
}: ConnectedRecipePreviewCardProps) {
  const imageUrl = useRecipeImage(recipe.images);
  const v0Recipe = iRecipeToRecipe(recipe, imageUrl);

  return (
    <div onClick={onClick}>
      <RecipePreviewCard recipe={v0Recipe} />
    </div>
  );
}
