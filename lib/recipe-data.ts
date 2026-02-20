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
  difficulty?: "Easy" | "Medium" | "Hard"
  tags: string[]
  parts: RecipePart[]
  notes?: string[]
}

export const sampleRecipe: Recipe = {
  title: "Classic Cinnamon Rolls",
  description:
    "Soft, fluffy homemade cinnamon rolls with a buttery cinnamon sugar filling and silky cream cheese frosting. Perfect for weekend brunch or holiday mornings.",
  image: "/images/cinnamon-rolls.jpg",
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
        "Warm the milk and butter in a small saucepan over medium heat until the butter melts and the mixture reaches 110\u00B0F. Stir in the sugar until dissolved.",
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
        "Roll the risen dough out on a lightly floured surface into a roughly 16 \u00D7 12-inch rectangle.",
        "Spread the filling evenly over the dough, leaving a 1/2-inch border along one long edge.",
        "Starting from the opposite long edge, roll the dough up tightly into a log. Pinch the seam to seal.",
        "Using a sharp knife or unflavored dental floss, cut the log into 12 equal pieces. Arrange cut-side up in a greased 9 \u00D7 13-inch baking pan.",
        "Cover loosely with plastic wrap and let rise for 30 minutes while you preheat the oven to 375\u00B0F.",
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

export const pastaCarbonaraRecipe: Recipe = {
  title: "Spaghetti Carbonara",
  description:
    "A rich, creamy Italian classic made with eggs, pecorino romano, crispy pancetta, and freshly cracked black pepper. Simple ingredients, extraordinary flavor.",
  image: "/images/pasta-carbonara.jpg",
  prepTime: "10 min",
  cookTime: "20 min",
  totalTime: "30 min",
  servings: "4 servings",
  difficulty: "Medium",
  tags: ["Pasta", "Italian", "Dinner"],
  parts: [
    {
      title: "Carbonara",
      ingredients: [
        { name: "Spaghetti", amount: "1", unit: "lb" },
        { name: "Pancetta", amount: "8", unit: "oz" },
        { name: "Large eggs", amount: "4" },
        { name: "Pecorino Romano", amount: "1", unit: "cup" },
        { name: "Black pepper", amount: "2", unit: "tsp" },
        { name: "Garlic cloves", amount: "2" },
        { name: "Fine sea salt", amount: "1", unit: "tsp" },
      ],
      instructions: [
        "Bring a large pot of well-salted water to a rolling boil. Cook the spaghetti until just shy of al dente, reserving 2 cups of pasta water before draining.",
        "While the pasta cooks, cut the pancetta into small cubes and cook in a large skillet over medium heat until golden and crispy, about 8 minutes. Add minced garlic and cook 30 seconds more.",
        "In a bowl, whisk together the eggs, grated pecorino, and a generous amount of black pepper until smooth.",
        "Add the drained pasta to the skillet with the pancetta, toss to combine, then remove from heat. Immediately pour the egg mixture over the pasta and toss vigorously, adding pasta water a splash at a time until you get a silky, creamy sauce.",
        "Serve immediately with extra pecorino and black pepper on top.",
      ],
    },
  ],
}

export const greekSaladRecipe: Recipe = {
  title: "Classic Greek Salad",
  description:
    "A refreshing Mediterranean salad with ripe tomatoes, crisp cucumbers, tangy feta, and a bright lemon-oregano vinaigrette. Ready in minutes.",
  image: "/images/greek-salad.jpg",
  prepTime: "15 min",
  cookTime: "0 min",
  totalTime: "15 min",
  servings: "4 servings",
  difficulty: "Easy",
  tags: ["Salad", "Mediterranean", "Lunch"],
  parts: [
    {
      title: "Salad",
      ingredients: [
        { name: "Ripe tomatoes", amount: "4" },
        { name: "English cucumber", amount: "1" },
        { name: "Red onion", amount: "1/2" },
        { name: "Kalamata olives", amount: "1/2", unit: "cup" },
        { name: "Feta cheese", amount: "6", unit: "oz" },
      ],
      instructions: [
        "Cut the tomatoes into wedges, slice the cucumber into half-moons, and thinly slice the red onion.",
        "Arrange the vegetables on a large platter. Scatter the olives on top and crumble the feta over everything.",
      ],
    },
    {
      title: "Lemon-Oregano Vinaigrette",
      ingredients: [
        { name: "Extra virgin olive oil", amount: "1/4", unit: "cup" },
        { name: "Red wine vinegar", amount: "2", unit: "tbsp" },
        { name: "Lemon juice", amount: "1", unit: "tbsp" },
        { name: "Dried oregano", amount: "1", unit: "tsp" },
        { name: "Fine sea salt", amount: "1/2", unit: "tsp" },
      ],
      instructions: [
        "Whisk together the olive oil, red wine vinegar, lemon juice, oregano, and salt until emulsified.",
        "Drizzle generously over the salad just before serving. Toss gently at the table.",
      ],
    },
  ],
}

export const chickenStirFryRecipe: Recipe = {
  title: "Teriyaki Chicken Stir-Fry",
  description:
    "A quick weeknight dinner with tender chicken, crisp vegetables, and a glossy homemade teriyaki glaze served over steamed rice.",
  image: "/images/chicken-stir-fry.jpg",
  prepTime: "15 min",
  cookTime: "15 min",
  totalTime: "30 min",
  servings: "4 servings",
  difficulty: "Easy",
  tags: ["Asian", "Chicken", "Dinner"],
  parts: [
    {
      title: "Teriyaki Sauce",
      ingredients: [
        { name: "Soy sauce", amount: "1/4", unit: "cup" },
        { name: "Mirin", amount: "2", unit: "tbsp" },
        { name: "Brown sugar", amount: "2", unit: "tbsp" },
        { name: "Cornstarch", amount: "1", unit: "tsp" },
        { name: "Garlic cloves", amount: "2" },
        { name: "Fresh ginger", amount: "1", unit: "tsp" },
      ],
      instructions: [
        "Whisk together the soy sauce, mirin, brown sugar, and cornstarch until smooth. Mince the garlic and grate the ginger and add to the mixture. Set aside.",
      ],
    },
    {
      title: "Stir-Fry",
      ingredients: [
        { name: "Boneless chicken thighs", amount: "1.5", unit: "lbs" },
        { name: "Broccoli florets", amount: "2", unit: "cups" },
        { name: "Bell peppers", amount: "2" },
        { name: "Snap peas", amount: "1", unit: "cup" },
        { name: "Sesame oil", amount: "2", unit: "tbsp" },
        { name: "Sesame seeds", amount: "1", unit: "tbsp" },
        { name: "Steamed rice", amount: "4", unit: "cups" },
      ],
      instructions: [
        "Cut the chicken into bite-sized pieces. Slice the bell peppers into strips and trim the snap peas.",
        "Heat the sesame oil in a large wok or skillet over high heat. Cook the chicken in a single layer for 4 to 5 minutes until golden.",
        "Add the broccoli, peppers, and snap peas. Stir-fry for 3 minutes until crisp-tender.",
        "Pour the teriyaki sauce over everything and toss until the sauce thickens and coats the chicken and vegetables, about 1 to 2 minutes.",
        "Serve over steamed rice and sprinkle with sesame seeds.",
      ],
    },
  ],
}

export const blueberryPancakesRecipe: Recipe = {
  title: "Fluffy Blueberry Pancakes",
  description:
    "Light, airy buttermilk pancakes studded with juicy blueberries. A perfect lazy weekend breakfast topped with butter and real maple syrup.",
  image: "/images/blueberry-pancakes.jpg",
  prepTime: "10 min",
  cookTime: "15 min",
  totalTime: "25 min",
  servings: "8 pancakes",
  difficulty: "Easy",
  tags: ["Breakfast", "Pancakes", "Brunch"],
  parts: [
    {
      title: "Pancake Batter",
      ingredients: [
        { name: "All-purpose flour", amount: "1.5", unit: "cups" },
        { name: "Buttermilk", amount: "1.25", unit: "cups" },
        { name: "Large egg", amount: "1" },
        { name: "Unsalted butter", amount: "3", unit: "tbsp" },
        { name: "Granulated sugar", amount: "2", unit: "tbsp" },
        { name: "Baking powder", amount: "2", unit: "tsp" },
        { name: "Baking soda", amount: "1/2", unit: "tsp" },
        { name: "Fresh blueberries", amount: "1", unit: "cup" },
        { name: "Vanilla extract", amount: "1", unit: "tsp" },
        { name: "Fine sea salt", amount: "1/4", unit: "tsp" },
      ],
      instructions: [
        "Whisk together the flour, sugar, baking powder, baking soda, and salt in a large bowl.",
        "In a separate bowl, whisk the buttermilk, melted butter, egg, and vanilla extract until combined.",
        "Pour the wet ingredients into the dry and stir gently until just combined. A few lumps are fine. Fold in the blueberries.",
        "Heat a griddle or nonstick pan over medium heat and lightly butter. Pour 1/4 cup batter per pancake.",
        "Cook until bubbles form on the surface and the edges look set, about 2 to 3 minutes. Flip and cook 1 to 2 minutes more until golden.",
        "Serve stacked with butter, maple syrup, and extra blueberries.",
      ],
    },
  ],
}

export const allRecipes: Recipe[] = [
  sampleRecipe,
  pastaCarbonaraRecipe,
  greekSaladRecipe,
  chickenStirFryRecipe,
  blueberryPancakesRecipe,
]
