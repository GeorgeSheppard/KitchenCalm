import { useRouter } from "next/router";
import { useState, useMemo } from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { ExitSaveButtons } from "../../../core/exit_save_buttons";
import { IRecipe } from "../../../../core/types/recipes";
import {
  recipeToString,
  isNewRecipe,
} from "../../../../core/utils/recipe_formatter";

export const TextInputWithData = ({ recipe }: { recipe: IRecipe }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Convert recipe to string format, or start empty if new recipe
  const initialText = useMemo(() => {
    const isNew = isNewRecipe(recipe);
    return isNew ? "" : recipeToString(recipe);
  }, [recipe]);

  const [recipeText, setRecipeText] = useState(initialText);

  const onSubmit = async () => {
    setLoading(true);
    try {
      // TODO: Call backend endpoint to convert text to recipe format
      // await convertTextToRecipe(recipeText);
      // router.push("/food");
    } catch (error) {
      console.error("Error submitting recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 3, pb: 3 }}>
      <Card sx={{ padding: 4 }}>
        <TextField
          fullWidth
          multiline
          rows={20}
          placeholder="Paste or type your recipe here..."
          value={recipeText}
          onChange={(e) => setRecipeText(e.target.value)}
          variant="outlined"
        />
        <ExitSaveButtons
          saveDisabled={loading || !recipeText.trim()}
          exitOnClick={() => router.push("/food")}
          saveOnClick={onSubmit}
          boxSx={{ display: "flex", justifyContent: "space-between", pt: 2 }}
        />
      </Card>
    </Container>
  );
};
