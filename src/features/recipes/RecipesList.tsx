import styled from "styled-components";
import RecipeHeader from "./RecipeHeader";
import { useRecipes } from "./useRecipes";
import { BiConfused } from "react-icons/bi";
import { CenteredContainer } from "../../ui/CenteredContainer";
import Spinner from "../../ui/Spinner";
import { DetailsType } from "../favourites/FavoritesList";

export type RecipeHeaderType = {
  id: number;
  title: string;
  imageType: string;
  image: string;
};

const StyledRecipeList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4.6rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const Error = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 4.2rem;
  font-size: 1.8rem;
`;

function RecipesList({
  favouriteRecipes,
}: {
  favouriteRecipes?: DetailsType[];
}) {
  const { recipes, isLoading, error } = useRecipes();
  if (!favouriteRecipes) {
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
        <CenteredContainer color="#fff9db">
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
  } else {
    return (
      <CenteredContainer color="#fff9db">
        <StyledRecipeList>
          {favouriteRecipes.map(
            (recipe: DetailsType) =>
              recipe && (
                <RecipeHeader
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                />
              )
          )}
        </StyledRecipeList>
      </CenteredContainer>
    );
  }
}

export default RecipesList;
