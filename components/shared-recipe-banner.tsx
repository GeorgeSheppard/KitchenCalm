import { IRecipe } from "../core/types/recipes";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import { useAppSession } from "../core/hooks/use_app_session";

interface SharedRecipeBannerProps {
  recipe: IRecipe;
}

export function SharedRecipeBanner({ recipe }: SharedRecipeBannerProps) {
  const session = useAppSession();

  return (
    <Card className="border-primary/30 bg-primary/5 p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-foreground">
            Someone shared a recipe with you!
          </p>
          <p className="text-sm text-muted-foreground">
            &quot;{recipe.name}&quot;
          </p>
        </div>
        <Button
          disabled={true}
          size="sm"
          title="Add to My Recipes feature is temporarily unavailable"
        >
          <Download className="size-4 mr-2" />
          Add to My Recipes
        </Button>
      </div>
    </Card>
  );
}
