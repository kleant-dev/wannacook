import Search from "../features/recipes/Search";
import RecipesList from "../features/recipes/RecipesList";
import { StyledPage } from "./Favourites";

function Recipes() {
  return (
    <StyledPage>
      <Search />
      <RecipesList />
    </StyledPage>
  );
}

export default Recipes;
