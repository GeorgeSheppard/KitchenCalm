import { type Prisma, PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
	{
		name: "Chef Demo User",
		email: "chef2@example.com",
		recipes: {
			create: [
				{
					uuid: "recipe-beef-wellington",
					name: "Gordon Ramsay's Beef Wellington",
					description:
						"A classic British dish with tender beef fillet wrapped in puff pastry, perfect for special occasions.",
					images: {
						create: [
							{
								timestamp: BigInt(Date.now()),
								key: "beef-wellington-main",
								imageData:
									"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1ZjVmNSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2IiBmb250LXNpemU9IjE2cHgiPkJlZWYgV2VsbGluZ3RvbjwvdGV4dD4KPC9zdmc+",
								mimeType: "image/svg+xml",
							},
						],
					},
					components: {
						create: [
							{
								uuid: "component-wellington-main",
								name: "Main Wellington",
								storeable: false,
								servings: 4,
								order: 1,
								ingredients: {
									create: [
										{
											uuid: "ingredient-beef-fillet",
											name: "Beef fillet",
											quantity: 1,
											unit: "kg",
											order: 1,
											preparation: "trimmed",
										},
										{
											uuid: "ingredient-puff-pastry",
											name: "Puff pastry",
											quantity: 500,
											unit: "g",
											order: 2,
										},
										{
											uuid: "ingredient-mushrooms",
											name: "Mixed mushrooms",
											quantity: 400,
											unit: "g",
											order: 3,
											preparation: "finely chopped",
										},
										{
											uuid: "ingredient-prosciutto",
											name: "Prosciutto",
											quantity: 8,
											unit: "slices",
											order: 4,
										},
									],
								},
								instructions: {
									create: [
										{
											uuid: "instruction-sear-beef",
											instruction:
												"Season the beef fillet with salt and pepper, then sear in a hot pan with oil until browned on all sides.",
											order: 1,
										},
										{
											uuid: "instruction-cook-mushrooms",
											instruction:
												"Cook the chopped mushrooms in the same pan until all moisture has evaporated. Season and set aside to cool.",
											order: 2,
										},
										{
											uuid: "instruction-wrap-beef",
											instruction:
												"Lay out the prosciutto slices, spread with mushroom mixture, then wrap around the beef fillet.",
											order: 3,
										},
										{
											uuid: "instruction-pastry-wrap",
											instruction:
												"Wrap the beef in puff pastry, sealing the edges. Brush with beaten egg.",
											order: 4,
										},
										{
											uuid: "instruction-bake",
											instruction:
												"Bake at 200°C for 25-30 minutes until pastry is golden and beef is cooked to medium-rare.",
											order: 5,
										},
									],
								},
							},
						],
					},
				},
				{
					uuid: "recipe-korean-bulgogi",
					name: "Korean Bulgogi",
					description:
						"Tender marinated beef with sweet and savory flavors, perfect for weeknight dinners.",
					images: {
						create: [
							{
								timestamp: BigInt(Date.now()),
								key: "bulgogi-main",
								imageData:
									"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1ZjVmNSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2IiBmb250LXNpemU9IjE2cHgiPktvcmVhbiBCdWxnb2dpPC90ZXh0Pgo8L3N2Zz4=",
								mimeType: "image/svg+xml",
							},
						],
					},
					components: {
						create: [
							{
								uuid: "component-bulgogi-main",
								name: "Bulgogi",
								storeable: true,
								servings: 4,
								order: 1,
								ingredients: {
									create: [
										{
											uuid: "ingredient-ribeye",
											name: "Ribeye steak",
											quantity: 600,
											unit: "g",
											order: 1,
											preparation: "thinly sliced",
										},
										{
											uuid: "ingredient-soy-sauce",
											name: "Soy sauce",
											quantity: 60,
											unit: "ml",
											order: 2,
										},
										{
											uuid: "ingredient-brown-sugar",
											name: "Brown sugar",
											quantity: 2,
											unit: "tbsp",
											order: 3,
										},
										{
											uuid: "ingredient-sesame-oil",
											name: "Sesame oil",
											quantity: 1,
											unit: "tbsp",
											order: 4,
										},
										{
											uuid: "ingredient-garlic",
											name: "Garlic",
											quantity: 4,
											unit: "cloves",
											order: 5,
											preparation: "minced",
										},
									],
								},
								instructions: {
									create: [
										{
											uuid: "instruction-marinate",
											instruction:
												"Mix soy sauce, brown sugar, sesame oil, and garlic. Marinate the sliced beef for at least 30 minutes.",
											order: 1,
										},
										{
											uuid: "instruction-cook-bulgogi",
											instruction:
												"Cook the marinated beef in a hot pan or grill for 2-3 minutes per side until caramelized.",
											order: 2,
										},
										{
											uuid: "instruction-serve",
											instruction:
												"Serve hot with steamed rice and Korean side dishes.",
											order: 3,
										},
									],
								},
							},
						],
					},
				},
			],
		},
		preferences: {
			create: [
				{
					category: "chef_style",
					preference: "Gordon Ramsay recipes",
					context:
						"Enjoys professional chef techniques and high-quality ingredients",
					confidence: 0.9,
					source: "user",
				},
				{
					category: "cuisine",
					preference: "Korean food",
					context: "Recently interested in Korean cuisine",
					confidence: 0.8,
					source: "user",
				},
				{
					category: "dietary",
					preference: "gluten free",
					context: "Partner has gluten sensitivity",
					confidence: 1.0,
					source: "partner",
				},
			],
		},
	},
];

export async function main() {
	console.log("Starting seed...");

	for (const u of userData) {
		const user = await prisma.user.create({
			data: u,
			include: {
				recipes: {
					include: {
						images: true,
						components: {
							include: {
								ingredients: true,
								instructions: true,
							},
						},
					},
				},
				preferences: true,
			},
		});
		console.log(
			`Created user: ${user.name} with ${user.recipes.length} recipes`,
		);
	}

	console.log("Seed completed!");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
