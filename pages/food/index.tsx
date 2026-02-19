import { useState } from "react";
import { SearchBar } from "../../components/search-bar";
import { RecipeGrid } from "../../components/recipe-grid";
import { ConnectedMealPlanner } from "../../components/connected-meal-planner";
import { SharedRecipeBanner } from "../../components/shared-recipe-banner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  SearchableAttributes,
  useRecipeSearch,
} from "../../core/recipes/hooks/use_recipe_search";
import { useSearchDebounce } from "../../core/hooks/use_search_debounce";
import { IRecipe } from "../../core/types/recipes";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { ParsedUrlQuery } from "querystring";

type SharedRecipeId = string;

const allSearchValues = new Set<SearchableAttributes>([
  "name",
  "description",
  "ingredients",
]);

const getSharedRecipeIdFromQuery = (
  query: ParsedUrlQuery
): SharedRecipeId | undefined => {
  const { share } = query;
  if (share instanceof Array) return;
  if (!share) return;
  return share;
};

type Props = { sharedRecipe: IRecipe | null };

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  const { query } = context;

  const sharedRecipeId = getSharedRecipeIdFromQuery(query);
  if (!sharedRecipeId) return { props: { sharedRecipe: null } };

  try {
    const response = await fetch(
      `https://api.georgesheppard.dev/kitchencalm/recipes/shared/${sharedRecipeId}`
    );
    if (!response.ok) {
      return { props: { sharedRecipe: null } };
    }
    const recipe = await response.json();
    return {
      props: { sharedRecipe: recipe },
    };
  } catch (error) {
    console.error("Error fetching shared recipe:", error);
    return { props: { sharedRecipe: null } };
  }
};

const Recipes = (props: Props) => {
  const [keys, setKeys] = useState(() => allSearchValues);
  const [searchString, debouncedValue, setSearchString] =
    useSearchDebounce("");
  const searchResults = useRecipeSearch(debouncedValue, keys);

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      {props.sharedRecipe && (
        <div className="mb-6">
          <SharedRecipeBanner recipe={props.sharedRecipe} />
        </div>
      )}

      {/* Mobile: Tabs */}
      <div className="lg:hidden">
        <Tabs defaultValue="recipes">
          <TabsList className="mb-4 w-full">
            <TabsTrigger value="recipes" className="flex-1">
              Recipes
            </TabsTrigger>
            <TabsTrigger value="mealplan" className="flex-1">
              Meal Plan
            </TabsTrigger>
          </TabsList>
          <TabsContent value="recipes">
            <div className="flex flex-col gap-4">
              <SearchBar
                searchString={searchString}
                onSearchChange={setSearchString}
              />
              <RecipeGrid recipeIds={searchResults} />
            </div>
          </TabsContent>
          <TabsContent value="mealplan">
            <ConnectedMealPlanner />
          </TabsContent>
        </Tabs>
      </div>

      {/* Desktop: Side-by-side */}
      <div className="hidden lg:flex lg:gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-4">
            <SearchBar
              searchString={searchString}
              onSearchChange={setSearchString}
              keys={keys}
              onKeysChange={setKeys}
            />
            <RecipeGrid recipeIds={searchResults} />
          </div>
        </div>
        <aside className="w-[420px] shrink-0">
          <div className="sticky top-6">
            <ConnectedMealPlanner />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Recipes;
