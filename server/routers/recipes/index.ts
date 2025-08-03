import { z } from "zod";
import { publicProcedure, router, withUser } from "../../trpc";
import {
  getRecipesForUser,
  getSharedRecipe,
} from "./queries";
import { deleteRecipe, shareRecipe, updateRecipe } from "./mutations";
import { recipeValidator } from "./validators/recipe";
import { v4 as uuidv4 } from "uuid";
import { IInstruction, IRecipe, IRecipeIngredient, IRecipes, Unit } from "../../../core/types/recipes";

export const recipesRouter = router({
  getRecipes: withUser.query(async ({ ctx }) => {
    if (ctx.usePrisma) {
      const recipes = await ctx.db.recipe.findMany({
        where: {
          createdById: ctx.session.id,
        },
        include: {
          images: {
            orderBy: { timestamp: "asc" },
          },
          components: {
            orderBy: { order: "asc" },
            include: {
              ingredients: {
                orderBy: { order: "asc" },
              },
              instructions: {
                orderBy: { order: "asc" },
              },
            },
          },
        },
        orderBy: { createdAt: "desc" },
      })

      const stuff = recipes.map((recipe): IRecipe => {
        return {
          ...recipe,
          images: recipe.images.map((image): IRecipe['images'][number] => {
            return {
              key: image.key,
              // TODO: Fix when old backend is removed
              timestamp: image.timestamp as any as number
            }
          }),
          components: recipe.components.map((component): IRecipe['components'][number] => {
            return {
              ...component,
              instructions: component.instructions.map((instruction): IInstruction => {
                return {
                  text: instruction.instruction,
                }
              }),
              ingredients: component.ingredients.map((ingredient): IRecipeIngredient => {
                return {
                  name: ingredient.name,
                  quantity: {
                    unit: ingredient.unit as any as Unit,
                    value: ingredient.quantity
                  }
                }
              }),
              servings: component.servings ?? 0
            }
          })
        }
      })
      return stuff.reduce((acc, recipe) => acc.set(recipe.uuid, recipe), new Map());
    }

    return getRecipesForUser({ user: ctx.session.id })
  }),
  deleteRecipe: withUser
    .input(z.object({ recipeId: z.string() }))
    .mutation(({ ctx, input: { recipeId } }) => {
      if (ctx.usePrisma) {
        return ctx.db.recipe.delete({
          where: {
            createdById: ctx.session.id,
            id: recipeId
          },
        });
      }
      return deleteRecipe(ctx.session.id, recipeId)
    }),
  updateRecipe: withUser
    .input(z.object({ recipe: recipeValidator }))
    .mutation(({ ctx, input: { recipe } }) => {
      if (ctx.usePrisma) {
        console.log('recipe', recipe.uuid)
        const { images, ...recipeWithoutImages } = recipe
        return ctx.db.$transaction([
          ctx.db.recipe.deleteMany({
            where: {
              createdById: ctx.session.id,
              id: recipe.uuid
            }
          }),
          ctx.db.recipe.create({
            data: {
              createdBy: {
                connectOrCreate: {
                  create: {
                    id: ctx.session.id,
                  },
                  where: {
                    id: ctx.session.id,
                  }
                }
              },
              ...recipeWithoutImages,
              components: {
                create: recipeWithoutImages.components.map(component => {
                  return {
                    ...component,
                    instructions: {
                      create: component.instructions.map((instruction, order) => ({
                        uuid: uuidv4(),
                        instruction: instruction.text,
                        order
                      }))
                    },
                    ingredients: {
                      create: component.ingredients.map(ingredient => ({
                        name: ingredient.name,
                        quantity: ingredient.quantity.value ?? 0,
                        unit: ingredient.quantity.unit,
                        uuid: uuidv4()
                      }))
                    }
                  }
                })
              }
            }
          })
        ]);
      }

      return updateRecipe(ctx.session.id, recipe)
    }),
  createSharedRecipe: publicProcedure
    .input(z.object({ recipe: recipeValidator }))
    .mutation(({ input: { recipe } }) => shareRecipe(uuidv4(), recipe)),
  getSharedRecipe: publicProcedure
    .input(z.object({ share: z.string() }))
    .query(({ input: { share } }) => getSharedRecipe({ id: share })),
});
