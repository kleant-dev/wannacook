/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from "styled-components";
import RecipeHeader from "./RecipeHeader";
import { useRecipes } from "./useRecipes";
import { BiConfused } from "react-icons/bi";

export type RecipeHeaderType = {
  id: number;
  title: string;
  imageType: string;
  image: string;
};

const StyledRecipeList = styled.div`
  background-color: var(--background-color);
`;

const Error = styled.p`
  margin-top: 4.2rem;
  text-align: center;
  font-size: 1.8rem;
`;

function RecipesList() {
  const { recipes, isLoading, error } = useRecipes();
  console.log(recipes);
  
  isLoading && <p>Loading...</p>;
  if (recipes && recipes.results.length === 0)
    return (
      <Error>
        <BiConfused /> Could not find any recipes. Try a different search.
      </Error>
    );
  if (recipes && recipes.results.length > 0)
    return (
      <StyledRecipeList>
        {recipes.results.map((recipe: RecipeHeaderType) => (
          <RecipeHeader
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
          />
        ))}
      </StyledRecipeList>
    );
}

export default RecipesList;
