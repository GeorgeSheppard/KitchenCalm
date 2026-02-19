export interface Ingredient {
  name: string
  amount: string
  unit?: string
}

export interface RecipePart {
  title: string
  ingredients: Ingredient[]
  instructions: string[]
}

export interface Recipe {
  title: string
  description: string
  image: string
  prepTime: string
  cookTime: string
  totalTime: string
  servings: string
  difficulty: "Easy" | "Medium" | "Hard"
  tags: string[]
  parts: RecipePart[]
  notes?: string[]
}

export const sampleRecipe: Recipe = {
  title: "Classic Cinnamon Rolls",
  description:
    "Soft, fluffy homemade cinnamon rolls with a buttery cinnamon sugar filling and silky cream cheese frosting. Perfect for weekend brunch or holiday mornings.",
  image: "/placeholder.jpg",
  prepTime: "30 min",
  cookTime: "25 min",
  totalTime: "2 hr 15 min",
  servings: "12 rolls",
  difficulty: "Medium",
  tags: ["Baking", "Breakfast", "Brunch"],
  parts: [
    {
      title: "Dough",
      ingredients: [
        { name: "Whole milk", amount: "1", unit: "cup" },
        { name: "Unsalted butter", amount: "3", unit: "tbsp" },
        { name: "Granulated sugar", amount: "1/4", unit: "cup" },
        { name: "Active dry yeast", amount: "2 1/4", unit: "tsp" },
        { name: "All-purpose flour", amount: "4", unit: "cups" },
        { name: "Fine sea salt", amount: "1", unit: "tsp" },
        { name: "Large eggs", amount: "2" },
      ],
      instructions: [
        "Warm the milk and butter in a small saucepan over medium heat until the butter melts and the mixture reaches 110°F. Stir in the sugar until dissolved.",
        "Transfer to a large bowl, sprinkle the yeast over the surface, and let stand for 5 minutes until foamy.",
        "Add the eggs and whisk to combine. Gradually stir in the flour and salt until a soft, slightly sticky dough forms.",
        "Turn onto a lightly floured surface and knead for 8 to 10 minutes until smooth and elastic. Shape into a ball.",
        "Place in a greased bowl, cover with a damp towel, and let rise in a warm place for 1 hour, or until doubled in size.",
      ],
    },
    {
      title: "Cinnamon Filling",
      ingredients: [
        { name: "Unsalted butter", amount: "1/3", unit: "cup" },
        { name: "Brown sugar", amount: "3/4", unit: "cup" },
        { name: "Ground cinnamon", amount: "2", unit: "tbsp" },
        { name: "Fine sea salt", amount: "1/4", unit: "tsp" },
      ],
      instructions: [
        "Soften the butter to room temperature and stir it together with the brown sugar, cinnamon, and salt until you have a smooth paste.",
        "Roll the risen dough out on a lightly floured surface into a roughly 16 × 12-inch rectangle.",
        "Spread the filling evenly over the dough, leaving a 1/2-inch border along one long edge.",
        "Starting from the opposite long edge, roll the dough up tightly into a log. Pinch the seam to seal.",
        "Using a sharp knife or unflavored dental floss, cut the log into 12 equal pieces. Arrange cut-side up in a greased 9 × 13-inch baking pan.",
        "Cover loosely with plastic wrap and let rise for 30 minutes while you preheat the oven to 375°F.",
        "Bake for 22 to 25 minutes, until the rolls are golden on top and cooked through in the center.",
      ],
    },
    {
      title: "Cream Cheese Frosting",
      ingredients: [
        { name: "Cream cheese", amount: "4", unit: "oz" },
        { name: "Unsalted butter", amount: "2", unit: "tbsp" },
        { name: "Powdered sugar", amount: "1", unit: "cup" },
        { name: "Vanilla extract", amount: "1", unit: "tsp" },
        { name: "Fine sea salt", amount: "1", unit: "pinch" },
      ],
      instructions: [
        "Beat the softened cream cheese and butter together with an electric mixer until smooth and fluffy, about 2 minutes.",
        "Add the powdered sugar, vanilla, and salt. Beat on low speed to incorporate, then increase to medium and mix until silky.",
        "Spread generously over the warm rolls as soon as they come out of the oven so the frosting melts slightly into the crevices.",
      ],
    },
  ],
  notes: [
    "For overnight rolls, cover the pan tightly after cutting and refrigerate for up to 18 hours. Let them sit at room temperature for 30 minutes before baking.",
    "Rolls are best enjoyed the same day, but leftovers keep well wrapped at room temperature for up to 2 days. Reheat briefly in the microwave.",
  ],
}
