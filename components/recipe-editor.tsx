import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { X, Save } from "lucide-react";
import { IRecipe } from "../core/types/recipes";
import { S3Key, Image } from "../core/types/general";
import { useParsedRecipeToDynamo } from "../core/dynamo/hooks/use_parse_recipe";
import { usePutRecipeToDynamo } from "../core/dynamo/hooks/use_dynamo_put";
import { recipeToString, isNewRecipe } from "../core/utils/recipe_formatter";
import { useRecipeImage } from "@/lib/adapters/use-recipe-image";
import { RecipeImageUpload } from "./recipe-image-upload";

interface RecipeEditorProps {
  recipe: IRecipe;
}

export function RecipeEditor({ recipe }: RecipeEditorProps) {
  const router = useRouter();
  const parsedRecipe = useParsedRecipeToDynamo();
  const putRecipe = usePutRecipeToDynamo();

  const [text, setText] = useState(() => {
    if (isNewRecipe(recipe)) return "";
    return recipeToString(recipe);
  });
  const [saving, setSaving] = useState(false);

  const existingImageUrl = useRecipeImage(recipe.images);
  const [imageKey, setImageKey] = useState<S3Key | undefined>(
    recipe.images?.[0]?.key
  );
  const [imageRemoved, setImageRemoved] = useState(false);

  const handleImageUploaded = useCallback((key: S3Key) => {
    setImageKey(key);
    setImageRemoved(false);
  }, []);

  const handleImageRemoved = useCallback(() => {
    setImageKey(undefined);
    setImageRemoved(true);
  }, []);

  const handleSave = async () => {
    if (!text.trim()) return;
    setSaving(true);
    try {
      const parsed = await parsedRecipe.mutateAsync(text, recipe.uuid);

      const images: Image[] = imageKey
        ? [{ key: imageKey, timestamp: Date.now() }]
        : imageRemoved
          ? []
          : recipe.images;

      const recipeWithImage = {
        ...parsed,
        uuid: recipe.uuid || parsed.uuid,
        images,
      } as IRecipe;

      await putRecipe.mutateAsync(recipeWithImage);
      router.push("/food");
    } catch {
      setSaving(false);
    }
  };

  const handleExit = () => {
    router.push("/food");
  };

  return (
    <Card className="mx-auto max-w-3xl border-border/60 shadow-sm">
      <CardContent className="flex flex-col gap-4 p-5 sm:p-8">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl text-foreground">
            {isNewRecipe(recipe) ? "New Recipe" : "Edit Recipe"}
          </h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handleExit}>
              <X className="size-4" />
            </Button>
          </div>
        </div>

        <RecipeImageUpload
          initialImageUrl={existingImageUrl}
          onImageUploaded={handleImageUploaded}
          onImageRemoved={handleImageRemoved}
        />

        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your recipe here. Include ingredients, quantities, and instructions..."
          className="min-h-[400px] resize-y text-sm leading-relaxed"
        />

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={handleExit}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={saving || !text.trim()}>
            {saving ? (
              <Spinner className="size-4 mr-2" />
            ) : (
              <Save className="size-4 mr-2" />
            )}
            Save Recipe
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
