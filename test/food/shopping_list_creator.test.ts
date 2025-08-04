import { createShoppingListData } from "../../core/meal_plan/shopping_list_creator";
import { IRecipe } from "../../core/types/recipes";
import { $Enums } from "../../generated/prisma";

const recipes: IRecipe[] = [
  {
    uuid: "1",
    name: "Recipe 1",
    description: "",
    images: [],
    components: [
      {
        name: "Component 1",
        uuid: "2",
        instructions: [],
        ingredients: [
          {
            name: "Chicken",
            unit: $Enums.Unit.GRAM,
            quantity: 200,
          },
        ],
        servings: 1
      },
    ],
  },
  {
    uuid: "10",
    name: "Recipe 2",
    description: "",
    images: [],
    components: [
      {
        name: "Component 2",
        uuid: "4",
        instructions: [],
        ingredients: [
          {
            name: "Chicken",
            unit: $Enums.Unit.KILOGRAM,
            quantity: 1,
          },
        ],
        servings: 1
      },
    ],
  },
  {
    uuid: "100",
    name: "Recipe 3",
    description: "",
    images: [],
    components: [
      {
        name: "Component 3",
        uuid: "8",
        instructions: [],
        ingredients: [
          {
            name: "Chicken",
            unit: $Enums.Unit.GRAM,
            quantity: 300,
          },
          {
            name: "Other",
            unit: $Enums.Unit.GRAM,
            quantity: 100,
          },
        ],
        servings: 1
      },
    ],
  },
];

test("", () => {
  expect(
    createShoppingListData(
      recipes,
      {
        Day1: { "1": [{ componentId: "2", servings: 1 }] },
        Day2: { "10": [{ componentId: "4", servings: 1 }] },
        Day3: { "100": [{ componentId: "8", servings: 1 }] },
      },
      new Set(["Day1", "Day2", "Day3"])
    )
  ).toStrictEqual({
    Chicken: {
      meals: new Set(["Recipe 1", "Recipe 2", "Recipe 3"]),
      quantities: [
        { unit: $Enums.Unit.GRAM, value: 500 },
        { unit: $Enums.Unit.KILOGRAM, value: 1 },
      ],
    },
    Other: {
      meals: new Set(["Recipe 3"]),
      quantities: [{ unit: $Enums.Unit.GRAM, value: 100 }],
    },
  });
});
