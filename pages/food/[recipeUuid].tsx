import LinearProgress from "@mui/material/LinearProgress";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { useRecipe } from "../../core/dynamo/hooks/use_dynamo_get";
import { RecipeUuid } from "../../core/types/recipes";
import { TextInputWithData } from "../../components/pages/food/[recipeUuid]/text_input_with_data";

export const NewRecipe = "newRecipe";

const getDefaultRecipe = (uuid: string) => ({
  uuid,
  name: "",
  description: "",
  images: [],
  components: [
    {
      name: "",
      ingredients: [],
      instructions: [],
      storeable: false,
      uuid: uuidv4(),
      servings: 1,
    },
  ],
});

export default function RecipeForm() {
  const router = useRouter();
  const uuid = router.query.recipeUuid as RecipeUuid | undefined;
  const recipe = useRecipe(uuid);
  if (!uuid) {
    return <LinearProgress />;
  }
  if (uuid === NewRecipe) {
    return <TextInputWithData recipe={getDefaultRecipe(uuidv4())} />;
  }
  if (recipe.isError) {
    console.error("Error: ", recipe.error);
    router.push("/food");
    return;
  }

  if (recipe.isLoading) {
    return <LinearProgress />;
  }

  if (!recipe.data) {
    console.error(`Error: ${uuid} doesn't exist`);
    router.push("/food");
    return;
  }

  return <TextInputWithData recipe={recipe.data} />;
}
