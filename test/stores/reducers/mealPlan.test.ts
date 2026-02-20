import {
  addOrUpdatePlan,
  parseMealId,
  buildUpdateServingsPayload,
  buildRemoveMealPayload,
  buildDropPayload,
} from "../../../core/meal_plan/meal_plan_utilities";
import { IRecipe, Unit } from "../../../core/types/recipes";

// Helper to build a minimal IRecipe for testing
function makeRecipe(overrides?: Partial<IRecipe>): IRecipe {
  return {
    uuid: "recipe-1",
    name: "Test Recipe",
    description: "",
    images: [],
    components: [
      {
        name: "Main",
        uuid: "comp-1",
        ingredients: [],
        instructions: [],
        servings: 2,
      },
    ],
    ...overrides,
  };
}

function makeMultiComponentRecipe(): IRecipe {
  return makeRecipe({
    uuid: "recipe-2",
    components: [
      {
        name: "Sauce",
        uuid: "comp-a",
        ingredients: [],
        instructions: [],
        servings: 4,
      },
      {
        name: "Pasta",
        uuid: "comp-b",
        ingredients: [],
        instructions: [],
        servings: 4,
      },
    ],
  });
}

// ── parseMealId ──

describe("parseMealId", () => {
  test("parses a standard meal id", () => {
    expect(parseMealId("2026-02-19-recipe-1")).toEqual({
      isoDate: "2026-02-19",
      recipeId: "recipe-1",
    });
  });

  test("handles recipe ids with multiple hyphens", () => {
    expect(parseMealId("2026-02-19-abc-def-ghi")).toEqual({
      isoDate: "2026-02-19",
      recipeId: "abc-def-ghi",
    });
  });
});

// ── buildUpdateServingsPayload ──

describe("buildUpdateServingsPayload", () => {
  test("builds a positive delta when increasing servings", () => {
    const recipe = makeRecipe();
    const result = buildUpdateServingsPayload(recipe, "2026-02-19", 2, 5);
    expect(result.components).toEqual([
      { recipeId: "recipe-1", componentId: "comp-1", servingsIncrease: 3 },
    ]);
  });

  test("builds a negative delta when decreasing servings", () => {
    const recipe = makeRecipe();
    const result = buildUpdateServingsPayload(recipe, "2026-02-19", 4, 3);
    expect(result.components).toEqual([
      { recipeId: "recipe-1", componentId: "comp-1", servingsIncrease: -1 },
    ]);
  });

  test("builds zero delta when servings unchanged", () => {
    const recipe = makeRecipe();
    const result = buildUpdateServingsPayload(recipe, "2026-02-19", 3, 3);
    expect(result.components).toEqual([
      { recipeId: "recipe-1", componentId: "comp-1", servingsIncrease: 0 },
    ]);
  });

  test("only updates the first component for multi-component recipe", () => {
    const recipe = makeMultiComponentRecipe();
    const result = buildUpdateServingsPayload(recipe, "2026-02-19", 2, 4);
    expect(result.components).toHaveLength(1);
    expect(result.components).toEqual([
      { recipeId: "recipe-2", componentId: "comp-a", servingsIncrease: 2 },
    ]);
  });

  test("converts ISO date to DateString format", () => {
    const recipe = makeRecipe();
    // 2026-02-19 is a Thursday
    const result = buildUpdateServingsPayload(recipe, "2026-02-19", 1, 2);
    expect(result.date).toBe("Thursday - 19/02/2026");
  });
});

// ── buildRemoveMealPayload ──

describe("buildRemoveMealPayload", () => {
  test("uses negative servings to remove a meal", () => {
    const recipe = makeRecipe();
    const result = buildRemoveMealPayload(recipe, "2026-02-19", 3);
    expect(result.components).toEqual([
      { recipeId: "recipe-1", componentId: "comp-1", servingsIncrease: -4 },
    ]);
  });

  test("removes a meal with 1 serving", () => {
    const recipe = makeRecipe();
    const result = buildRemoveMealPayload(recipe, "2026-02-19", 1);
    expect(result.components).toEqual([
      { recipeId: "recipe-1", componentId: "comp-1", servingsIncrease: -2 },
    ]);
  });

  test("includes all components for multi-component recipe", () => {
    const recipe = makeMultiComponentRecipe();
    const result = buildRemoveMealPayload(recipe, "2026-02-19", 5);
    expect(result.components).toEqual([
      { recipeId: "recipe-2", componentId: "comp-a", servingsIncrease: -6 },
      { recipeId: "recipe-2", componentId: "comp-b", servingsIncrease: -6 },
    ]);
  });
});

// ── buildDropPayload ──

describe("buildDropPayload", () => {
  test("uses component servings as the increase", () => {
    const recipe = makeRecipe();
    const result = buildDropPayload(recipe, "2026-02-19");
    expect(result.components).toEqual([
      { recipeId: "recipe-1", componentId: "comp-1", servingsIncrease: 2 },
    ]);
  });

  test("defaults to 1 when component has no servings", () => {
    const recipe = makeRecipe({
      components: [
        { name: "Main", uuid: "comp-1", ingredients: [], instructions: [] },
      ],
    });
    const result = buildDropPayload(recipe, "2026-02-19");
    expect(result.components).toEqual([
      { recipeId: "recipe-1", componentId: "comp-1", servingsIncrease: 1 },
    ]);
  });

  test("includes all components for multi-component recipe", () => {
    const recipe = makeMultiComponentRecipe();
    const result = buildDropPayload(recipe, "2026-02-19");
    expect(result.components).toEqual([
      { recipeId: "recipe-2", componentId: "comp-a", servingsIncrease: 4 },
      { recipeId: "recipe-2", componentId: "comp-b", servingsIncrease: 4 },
    ]);
  });
});

// ── addOrUpdatePlan ──

describe("addOrUpdatePlan", () => {
  test("can add a recipe", () => {
    expect(
      addOrUpdatePlan(
        [{ date: "16/7/2022", plan: {} }],
        {
          date: "16/7/2022",
          components: [{ recipeId: "11", componentId: "1", servingsIncrease: 3 }],
        }
      )
    ).toStrictEqual([
      { date: "16/7/2022", plan: { "11": [{ componentId: "1", servings: 3 }] } },
    ]);
  });

  test("can reduce serving quantity on existing recipe", () => {
    expect(
      addOrUpdatePlan(
        [{ date: "16/7/2022", plan: { "11": [{ componentId: "1", servings: 3 }] } }],
        {
          date: "16/7/2022",
          components: [
            { recipeId: "11", componentId: "1", servingsIncrease: -1 },
          ],
        }
      )
    ).toStrictEqual([
      { date: "16/7/2022", plan: { "11": [{ componentId: "1", servings: 2 }] } },
    ]);
  });

  test("can reduce serving quantity with two existing recipes in the plan", () => {
    expect(
      addOrUpdatePlan(
        [
          {
            date: "16/7/2022",
            plan: {
              "11": [{ componentId: "1", servings: 2 }],
              "22": [{ componentId: "2", servings: 3 }],
            },
          },
        ],
        {
          date: "16/7/2022",
          components: [
            {
              recipeId: "22",
              componentId: "2",
              servingsIncrease: -1,
            },
          ],
        }
      )
    ).toStrictEqual([
      {
        date: "16/7/2022",
        plan: {
          "11": [{ componentId: "1", servings: 2 }],
          "22": [{ componentId: "2", servings: 2 }],
        },
      },
    ]);
  });

  test("can reduce servings with multiple components", () => {
    expect(
      addOrUpdatePlan(
        [
          {
            date: "16/7/2022",
            plan: {
              "11": [
                { componentId: "1", servings: 2 },
                { componentId: "2", servings: 4 },
              ],
            },
          },
        ],
        {
          date: "16/7/2022",
          components: [
            { recipeId: "11", componentId: "2", servingsIncrease: -1 },
          ],
        }
      )
    ).toStrictEqual([
      {
        date: "16/7/2022",
        plan: {
          "11": [
            { componentId: "1", servings: 2 },
            { componentId: "2", servings: 3 },
          ],
        },
      },
    ]);
  });

  test("can reduce servings with multiple components and multiple recipes", () => {
    expect(
      addOrUpdatePlan(
        [
          {
            date: "16/7/2022",
            plan: {
              "11": [
                { componentId: "1", servings: 2 },
                { componentId: "2", servings: 4 },
              ],
              "22": [
                { componentId: "3", servings: 6 },
                { componentId: "4", servings: 8 },
              ],
            },
          },
        ],
        {
          date: "16/7/2022",
          components: [
            { recipeId: "22", componentId: "4", servingsIncrease: -2 },
            {
              recipeId: "11",
              componentId: "2",
              servingsIncrease: -2,
            },
          ],
        }
      )
    ).toStrictEqual([
      {
        date: "16/7/2022",
        plan: {
          "11": [
            { componentId: "1", servings: 2 },
            { componentId: "2", servings: 2 },
          ],
          "22": [
            { componentId: "3", servings: 6 },
            { componentId: "4", servings: 6 },
          ],
        },
      },
    ]);
  });

  test("allows servings to reach zero", () => {
    expect(
      addOrUpdatePlan(
        [{ date: "d1", plan: { r1: [{ componentId: "c1", servings: 1 }] } }],
        { date: "d1", components: [{ recipeId: "r1", componentId: "c1", servingsIncrease: -1 }] }
      )
    ).toStrictEqual([
      { date: "d1", plan: { r1: [{ componentId: "c1", servings: 0 }] } },
    ]);
  });

  test("removes component when servings go below zero", () => {
    expect(
      addOrUpdatePlan(
        [{ date: "d1", plan: { r1: [{ componentId: "c1", servings: 1 }] } }],
        { date: "d1", components: [{ recipeId: "r1", componentId: "c1", servingsIncrease: -2 }] }
      )
    ).toStrictEqual([
      { date: "d1", plan: {} },
    ]);
  });

  test("removes recipe key when all components removed", () => {
    expect(
      addOrUpdatePlan(
        [{ date: "d1", plan: { r1: [{ componentId: "c1", servings: 0 }, { componentId: "c2", servings: 0 }] } }],
        { date: "d1", components: [
          { recipeId: "r1", componentId: "c1", servingsIncrease: -1 },
          { recipeId: "r1", componentId: "c2", servingsIncrease: -1 },
        ] }
      )
    ).toStrictEqual([
      { date: "d1", plan: {} },
    ]);
  });

  test("returns plan unchanged when date not found", () => {
    const plan = [{ date: "d1", plan: { r1: [{ componentId: "c1", servings: 2 }] } }];
    expect(
      addOrUpdatePlan(plan, {
        date: "d2",
        components: [{ recipeId: "r1", componentId: "c1", servingsIncrease: 1 }],
      })
    ).toStrictEqual(plan);
  });

  test("does not mutate the original plan", () => {
    const original = [{ date: "d1", plan: { r1: [{ componentId: "c1", servings: 2 }] } }];
    addOrUpdatePlan(original, {
      date: "d1",
      components: [{ recipeId: "r1", componentId: "c1", servingsIncrease: 1 }],
    });
    expect(original[0].plan.r1[0].servings).toBe(2);
  });

  test("preserves other dates in the plan", () => {
    expect(
      addOrUpdatePlan(
        [
          { date: "d1", plan: { r1: [{ componentId: "c1", servings: 1 }] } },
          { date: "d2", plan: { r2: [{ componentId: "c2", servings: 5 }] } },
        ],
        { date: "d1", components: [{ recipeId: "r1", componentId: "c1", servingsIncrease: 2 }] }
      )
    ).toStrictEqual([
      { date: "d1", plan: { r1: [{ componentId: "c1", servings: 3 }] } },
      { date: "d2", plan: { r2: [{ componentId: "c2", servings: 5 }] } },
    ]);
  });

  test("adds a new component to an existing recipe", () => {
    expect(
      addOrUpdatePlan(
        [{ date: "d1", plan: { r1: [{ componentId: "c1", servings: 2 }] } }],
        { date: "d1", components: [{ recipeId: "r1", componentId: "c2", servingsIncrease: 3 }] }
      )
    ).toStrictEqual([
      { date: "d1", plan: { r1: [{ componentId: "c1", servings: 2 }, { componentId: "c2", servings: 3 }] } },
    ]);
  });
});
