import Search from "../features/recipes/Search";
import RecipesList from "../features/recipes/RecipesList";
import styled from "styled-components";

const StyledRecipes = styled.div`
  height: 100vh;
  background-color: #fff9db;
`;

function Recipes() {
  return (
    <StyledRecipes>
      <Search />
      <RecipesList />
    </StyledRecipes>
  );
}

export default Recipes;
