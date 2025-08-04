import { $Enums, RecipeImage } from "../../generated/prisma";

export type RecipeUuid = string;
export type ComponentUuid = string;
export type IngredientUuid = string;
export type IIngredientName = string;

export interface IRecipeInstruction {
  instruction: string;
  optional: boolean;
}

export interface IRecipeIngredient {
  name: IIngredientName;
  unit: $Enums.Unit;
  quantity: number;
}

export interface IRecipeComponent {
  name: string;
  uuid: ComponentUuid;
  ingredients: IRecipeIngredient[];
  instructions: IRecipeInstruction[];
  storeable?: boolean;
  servings: number | null;
}

export interface IRecipe {
  uuid: RecipeUuid;
  name: string;
  description: string;
  images: RecipeImage[];
  components: IRecipeComponent[];
}

export type IRecipes = Map<RecipeUuid, IRecipe>

export type IRecipeImage = RecipeImage
