import { SearchBar } from "../../components/search-bar";
import { RecipeGrid } from "../../components/recipe-grid";
import { SharedRecipeBanner } from "../../components/shared-recipe-banner";
import { useRecipeSearch } from "../../core/recipes/hooks/use_recipe_search";
import { useSearchDebounce } from "../../core/hooks/use_search_debounce";
import { IRecipe } from "../../core/types/recipes";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { ParsedUrlQuery } from "querystring";

type SharedRecipeId = string;

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
  const [searchString, debouncedValue, setSearchString] =
    useSearchDebounce("");
  const searchResults = useRecipeSearch(debouncedValue);

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      {props.sharedRecipe && (
        <div className="mb-6">
          <SharedRecipeBanner recipe={props.sharedRecipe} />
        </div>
      )}

      <div className="flex flex-col gap-4">
        <SearchBar
          searchString={searchString}
          onSearchChange={setSearchString}
        />
        <RecipeGrid recipeIds={searchResults} />
      </div>
    </main>
  );
};

export default Recipes;
