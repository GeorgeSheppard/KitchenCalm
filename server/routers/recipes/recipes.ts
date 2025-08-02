import { z } from "zod";
import { router, withUser } from "../../trpc";

export const recipesRouter = router({
	getAll: withUser.query(async ({ ctx }) => {
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
		});

		return recipes;
	}),

	getById: withUser
		.input(z.object({ id: z.string() }))
		.query(async ({ ctx, input }) => {
			const recipe = await ctx.db.recipe.findFirst({
				where: {
					id: input.id,
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
			});

			if (!recipe) {
				throw new Error("Recipe not found");
			}

			return recipe;
		}),
});
