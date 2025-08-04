import { z } from "zod";
import { publicProcedure, router, withUser } from "../../trpc";
import {
  getRecipesForUser,
} from "./queries";
import { deleteRecipe, updateRecipe } from "./mutations";
import { recipeValidator } from "./validators/recipe";
import { v4 as uuidv4 } from "uuid";

const sharedUser = "share"

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
      })

      return recipes.reduce((acc, recipe) => acc.set(recipe.uuid, recipe), new Map());
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
            uuid: recipeId
          },
        });
      }
      return deleteRecipe(ctx.session.id, recipeId)
    }),
  updateRecipe: withUser
    .input(z.object({ recipe: recipeValidator }))
    .mutation(({ ctx, input: { recipe } }) => {
      console.log("updateRecipe", recipe)
      if (ctx.usePrisma) {

      /**
       * issue creating recipe when you aren't logged in
       */

        const { images, ...recipeWithoutImages } = recipe
        return ctx.db.$transaction([
          ctx.db.recipe.deleteMany({
            where: {
              createdById: ctx.session.id,
              uuid: recipe.uuid
            }
          }),
          ctx.db.recipe.create({
            data: {
              ...recipeWithoutImages,
              components: {
                create: recipeWithoutImages.components.map((component, index) => {
                  return {
                    ...component,
                    order: index,
                    instructions: {
                      create: component.instructions.map((instruction, index) => ({ ...instruction, uuid: uuidv4(), order: index }))
                    },
                    ingredients: {
                      create: component.ingredients.map((ingredient, index) => ({ ...ingredient, uuid: uuidv4(), order: index }))
                    }
                  }
                })
              },
              createdById: ctx.session.id
            }
          })
        ]);
      }

      return updateRecipe(ctx.session.id, recipe)
    }),
  createSharedRecipe: publicProcedure
    .input(z.object({ recipe: recipeValidator }))
    .mutation(async ({ ctx, input: { recipe } }) => {
      const id = uuidv4()
      const { images, ...recipeWithoutImages } = recipe
      await ctx.db.recipe.create({
        data: {
          ...recipeWithoutImages,
          components: {
            create: recipeWithoutImages.components.map((component, index) => {
              return {
                ...component,
                order: index,
                instructions: {
                  create: component.instructions.map((instruction, index) => ({ ...instruction, uuid: uuidv4(), order: index }))
                },
                ingredients: {
                  create: component.ingredients.map((ingredient, index) => ({ ...ingredient, uuid: uuidv4(), order: index }))
                }
              }
            })
          },
          createdById: sharedUser
        }
      })
      return id
    }),
  getSharedRecipe: publicProcedure
    .input(z.object({ share: z.string() }))
    .query(async ({ ctx, input: { share } }) => {
      const sharedRecipe = await ctx.db.recipe.findFirst({
        where: {
          createdById: sharedUser,
          id: share,
        },
        include: {
          images: true,
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
          }
        },
      })

      return sharedRecipe
    }),
});
