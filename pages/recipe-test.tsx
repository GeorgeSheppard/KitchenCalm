import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { IRecipe, Unit } from "../core/types/recipes";
import { RecipeCardV2 } from "../components/pages/food/index/recipes/recipe_card_v2";

const sampleRecipe: IRecipe = {
  uuid: "sample-001",
  name: "Creamy Lemon Herb Pasta",
  description:
    "A light and zesty pasta dish with a creamy lemon sauce, fresh herbs, and cherry tomatoes. Perfect for a quick weeknight dinner that feels special.",
  images: [],
  components: [
    {
      name: "Pasta & Sauce",
      uuid: "comp-001",
      servings: 4,
      storeable: false,
      ingredients: [
        { name: "Spaghetti", quantity: { unit: Unit.GRAM, value: 400 } },
        { name: "Heavy cream", quantity: { unit: Unit.MILLILITER, value: 200 } },
        { name: "Lemon", quantity: { unit: Unit.NUMBER, value: 2 } },
        { name: "Garlic cloves", quantity: { unit: Unit.NUMBER, value: 3 } },
        { name: "Parmesan cheese", quantity: { unit: Unit.GRAM, value: 80 } },
        { name: "Olive oil", quantity: { unit: Unit.TABLESPOON, value: 2 } },
        { name: "Salt", quantity: { unit: Unit.NO_UNIT } },
        { name: "Black pepper", quantity: { unit: Unit.NO_UNIT } },
      ],
      instructions: [
        { text: "Cook spaghetti in salted boiling water until al dente. Reserve 1 cup of pasta water before draining." },
        { text: "While pasta cooks, heat olive oil in a large pan over medium heat. Add minced garlic and cook for 1 minute until fragrant." },
        { text: "Add heavy cream, lemon zest, and lemon juice. Simmer for 3-4 minutes until slightly thickened." },
        { text: "Toss the drained pasta into the sauce. Add parmesan and toss until melted and creamy, adding pasta water as needed." },
        { text: "Season with salt and pepper to taste.", optional: true },
      ],
    },
    {
      name: "Herb Topping",
      uuid: "comp-002",
      storeable: true,
      ingredients: [
        { name: "Fresh basil leaves", quantity: { unit: Unit.GRAM, value: 15 } },
        { name: "Fresh parsley", quantity: { unit: Unit.GRAM, value: 10 } },
        { name: "Cherry tomatoes", quantity: { unit: Unit.GRAM, value: 150 } },
        { name: "Pine nuts", quantity: { unit: Unit.TABLESPOON, value: 2 } },
      ],
      instructions: [
        { text: "Halve the cherry tomatoes and roughly chop the fresh herbs." },
        { text: "Toast pine nuts in a dry pan over medium heat for 2-3 minutes until golden." },
        { text: "Scatter herbs, tomatoes, and pine nuts over the finished pasta.", optional: false },
      ],
    },
  ],
};

const sampleRecipeNoImage: IRecipe = {
  uuid: "sample-002",
  name: "Simple Garlic Bread",
  description: "Crispy, buttery garlic bread that pairs perfectly with any pasta dish.",
  images: [],
  components: [
    {
      name: "Garlic Butter",
      uuid: "comp-003",
      servings: 6,
      storeable: true,
      ingredients: [
        { name: "Baguette", quantity: { unit: Unit.NUMBER, value: 1 } },
        { name: "Butter", quantity: { unit: Unit.GRAM, value: 100 } },
        { name: "Garlic cloves", quantity: { unit: Unit.NUMBER, value: 4 } },
        { name: "Fresh parsley", quantity: { unit: Unit.GRAM, value: 10 } },
      ],
      instructions: [
        { text: "Preheat oven to 200C. Mix softened butter with minced garlic and chopped parsley." },
        { text: "Slice baguette in half lengthwise. Spread garlic butter generously on each half." },
        { text: "Bake for 10-12 minutes until golden and crispy." },
      ],
    },
  ],
};

export default function RecipeTestPage() {
  const [fullRecipe, setFullRecipe] = useState<IRecipe | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "rgba(200, 200, 200, 0.47)" }}>
      {/* Page header */}
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#207d39]">
            Design Preview
          </span>
        </div>
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
          Recipe Card Redesign
        </h1>
        <p className="text-sm text-[#666666] mb-8 max-w-lg">
          Comparing the new recipe card design in both preview (collapsed) and
          full (expanded) modes with sample recipe data.
        </p>

        {/* Section: Preview Cards */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-[#1a1a1a] mb-1">
            Preview Mode
          </h2>
          <p className="text-sm text-[#888888] mb-4">
            Cards as they appear in the masonry grid. Click to open full view.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <RecipeCardV2
              recipe={sampleRecipe}
              isPreview
              imageSrc="/images/sample-pasta.jpg"
              onClick={() => setFullRecipe(sampleRecipe)}
            />
            <RecipeCardV2
              recipe={sampleRecipeNoImage}
              isPreview
              onClick={() => setFullRecipe(sampleRecipeNoImage)}
            />
            <RecipeCardV2
              recipe={{
                ...sampleRecipe,
                uuid: "sample-003",
                name: "Lemon Herb Pasta (No Description)",
                description: "",
              }}
              isPreview
              imageSrc="/images/sample-pasta.jpg"
              onClick={() =>
                setFullRecipe({
                  ...sampleRecipe,
                  uuid: "sample-003",
                  name: "Lemon Herb Pasta (No Description)",
                  description: "",
                })
              }
            />
          </div>
        </section>

        {/* Section: Full Card */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-[#1a1a1a] mb-1">
            Full Mode (Expanded)
          </h2>
          <p className="text-sm text-[#888888] mb-4">
            The card as it appears when opened in a dialog. Sections are
            expandable/collapsible.
          </p>
          <div className="mx-auto max-w-lg">
            <RecipeCardV2
              recipe={sampleRecipe}
              isPreview={false}
              imageSrc="/images/sample-pasta.jpg"
            />
          </div>
        </section>
      </div>

      {/* Dialog for clicking preview cards */}
      <Dialog
        open={!!fullRecipe}
        onClose={() => setFullRecipe(null)}
        fullWidth
        PaperProps={{ className: "bg-transparent max-w-lg !shadow-none" }}
      >
        {fullRecipe && (
          <RecipeCardV2
            recipe={fullRecipe}
            isPreview={false}
            imageSrc={
              fullRecipe.uuid !== "sample-002"
                ? "/images/sample-pasta.jpg"
                : undefined
            }
          />
        )}
      </Dialog>
    </div>
  );
}
