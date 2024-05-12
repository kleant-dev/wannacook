import styled from "styled-components";
import { useRecipeDetails } from "./useRecipeDetails";

const StyledRecipeDetails = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tags = styled.ul`
  display: flex;
`;

const Ingredients = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Instructions = styled.div``;
const Details = styled.div``;

function RecipeDetails() {
  const { recipeDetails, isLoading, error } = useRecipeDetails();
  isLoading && <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  if (recipeDetails)
    return (
      <StyledRecipeDetails>
        <img src={recipeDetails.image} alt={recipeDetails?.title} />
        <Header>
          <h3>{recipeDetails.title}</h3>
          <p>{recipeDetails.summary}</p>
          <ul>
            {recipeDetails.dishTypes.map((dishType) => (
              <li>{dishType}</li>
            ))}
          </ul>
        </Header>
        <Tags>
          <li>{recipeDetails.healthScore}</li>
          <li>{recipeDetails.glutenFree}</li>
          <li>{recipeDetails.vegetarian}</li>
          <li>{recipeDetails.vegan}</li>
          <li>{recipeDetails.cheap}</li>
        </Tags>
        <Ingredients>
          {recipeDetails.extendedIngredients.map((ingredient) => (
            <li>{ingredient.name}</li>
          ))}
        </Ingredients>
        <Instructions>
          {recipeDetails.analyzedInstructions[0].steps.map((instruction) => (
            <li>
              {instruction.number}
              {instruction.step}
            </li>
          ))}
        </Instructions>
        <Details>
          <p>Servings: {recipeDetails.servings}</p>
          <p>Ready: {recipeDetails.readyInMinutes}</p>
          <div>
            <p>Wine Pairing</p>
            {recipeDetails.winePairing.pairingText}
          </div>
        </Details>
      </StyledRecipeDetails>
    );
}

export default RecipeDetails;
