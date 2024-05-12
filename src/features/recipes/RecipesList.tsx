/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from "styled-components";
import RecipeHeader from "./RecipeHeader";
import { useRecipes } from "./useRecipes";
import { BiConfused } from "react-icons/bi";
import { CenteredContainer } from "../../ui/CenteredContainer";
import Spinner from "../../ui/Spinner";

export type RecipeHeaderType = {
  id: number;
  title: string;
  imageType: string;
  image: string;
};

const StyledRecipeList = styled.div`
  background-color: var(--background-color);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4.6rem;
`;

const Error = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 4.2rem;
  font-size: 1.8rem;
`;

function RecipesList() {
  const { recipes, isLoading, error } = useRecipes();

  isLoading && <Spinner />;
  if ((recipes && recipes.results.length === 0) || error)
    return (
      <Error>
        <BiConfused size={24} /> Could not find any recipes. Try a different
        search.
      </Error>
    );
  if (recipes && recipes.results.length > 0)
    return (
      <CenteredContainer color="var(--background-color)">
        <StyledRecipeList>
          {recipes.results.map((recipe: RecipeHeaderType) => (
            <RecipeHeader
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          ))}
        </StyledRecipeList>
      </CenteredContainer>
    );
}

export default RecipesList;
