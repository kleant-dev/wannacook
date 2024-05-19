import styled from "styled-components";
import { useRecipeDetails } from "./useRecipeDetails";
// import Spinner from "../../ui/Spinner";
import { CenteredContainer } from "../../ui/CenteredContainer";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";

const StyledRecipeDetails = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  & img {
    max-width: 62.5rem;
    height: 100%;
    object-fit: cover;
    margin: 0 auto;
  }
  @media (max-width: 52rem) {
    & img {
      max-width: 100%;
    }
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  & h2 {
    font-size: 5.4rem;
    text-align: center;
    color: #333;
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  list-style: none;
  color: #333;
  & li {
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }

  & li span {
    font-size: 2rem;
    @media (max-width: 50rem) {
      font-size: 2.6rem;
    }
  }

  & p {
    font-size: 2.4rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #f08c00;
    @media (max-width: 50rem) {
      font-size: 3rem;
    }
  }
`;

const Ingredients = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.8rem;
  color: #333;
  list-style: square;
  & p {
    font-size: 2.4rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #f08c00;
    @media (max-width: 50rem) {
      font-size: 3rem;
    }
  }
  @media (max-width: 50rem) {
    & li {
      font-size: 2.6rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 1fr;
`;

const Instructions = styled.div`
  padding: 3.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.8rem;
  list-style: none;
  line-height: 1.6;
  color: #333;
  & p {
    font-size: 2.4rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #f08c00;
  }
  @media (max-width: 50rem) {
    & p {
      font-size: 3rem;
    }
    & li {
      font-size: 2rem;
    }
  }

  & span {
    font-weight: 700;
  }
`;
const Details = styled.div`
  display: flex;
  gap: 3.2rem;
  align-items: center;
  & p {
    font-size: 2rem;
  }

  & p span {
    font-weight: 600;
  }
`;

const Wine = styled.div`
  & h3 {
    font-size: 2.4rem;
    font-weight: 600;
    color: #f03e3e;
  }
  & p {
    color: #333;
    font-size: 1.8rem;
    line-height: 1.6;
  }
  @media (max-width: 50rem) {
    & h3 {
      font-size: 3rem;
    }
  }
`;

interface NutrientProps {
  type: "calories" | "protein" | "carbs" | "fat";
}

const Nutrient = styled.div<NutrientProps>`
  background-color: ${(props) => {
    switch (props.type) {
      case "calories":
        return "#f03e3e";
      case "protein":
        return "#4caf50";
      case "carbs":
        return "#2196f3";
      case "fat":
        return "#e5d229";
      default:
        return "#e0e0e0"; // default background color
    }
  }};
  font-weight: 600;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  color: #fff;
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`;

const MainInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 5.4rem;
  grid-column: span 2;
  align-items: start;
  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
  }
`;

const Nutrients = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.2rem;
  row-gap: 1.2rem;
  margin-top: 2.4rem;
  padding-left: 3.2rem;
  grid-column: span 2;
  width: 80%;
  @media (max-width: 50rem) {
    grid-column: span 1;
    grid-template-columns: 1fr;
  }
`;
function RecipeDetails() {
  const { recipeDetails, isLoading, error } = useRecipeDetails();
  if (isLoading) return <p>Hello</p>;
  if (error) return <p>Something went wrong</p>;

  if (recipeDetails) {
    return (
      <CenteredContainer>
        <StyledRecipeDetails>
          <img src={recipeDetails.image} alt={recipeDetails?.title} />
          <Header>
            <h2>{recipeDetails.title}</h2>
          </Header>
          <Grid>
            <MainInfo>
              <Tags>
                <p>Characteristics </p>
                <li>
                  <span>HealthScore</span>
                  <span>{recipeDetails.healthScore}</span>
                </li>
                <li>
                  <span>Gluten Free</span>
                  {recipeDetails.glutenFree ? (
                    <MdOutlineDone size={24} color={"#37b24d"} />
                  ) : (
                    <IoMdClose size={24} color={"#f03e3e"} />
                  )}
                </li>
                <li>
                  <span>Vegetarian</span>
                  {recipeDetails.vegetarian ? (
                    <MdOutlineDone size={24} color={"#37b24d"} />
                  ) : (
                    <IoMdClose size={24} color={"#f03e3e"} />
                  )}
                </li>
                <li>
                  <span>Vegan</span>
                  {recipeDetails.vegan ? (
                    <MdOutlineDone size={24} color={"#37b24d"} />
                  ) : (
                    <IoMdClose size={24} color={"#f03e3e"} />
                  )}
                </li>
                <li>
                  <span>Cheap</span>
                  {recipeDetails.cheap ? (
                    <MdOutlineDone size={24} color={"#37b24d"} />
                  ) : (
                    <IoMdClose size={24} color={"#f03e3e"} />
                  )}
                </li>
              </Tags>
              <Ingredients>
                <p>Ingredients</p>
                {recipeDetails.extendedIngredients.map((ingredient, i) => (
                  <li key={i}>{ingredient.name}</li>
                ))}
              </Ingredients>
              <Nutrients>
                <Nutrient type="calories">
                  <span>Calories</span>{" "}
                  <span>{recipeDetails.nutrition.nutrients[0].amount}kcal</span>
                </Nutrient>
                <Nutrient type="carbs">
                  <span>Carbohydrates</span>{" "}
                  <span>{recipeDetails.nutrition.nutrients[3].amount}g</span>
                </Nutrient>
                <Nutrient type="protein">
                  <span>Protein</span>{" "}
                  <span>{recipeDetails.nutrition.nutrients[8].amount}g</span>
                </Nutrient>
                <Nutrient type="fat">
                  <span>Fat</span>{" "}
                  <span>{recipeDetails.nutrition.nutrients[1].amount}g</span>
                </Nutrient>
              </Nutrients>
            </MainInfo>
            <Instructions>
              <p>Instructions</p>
              {recipeDetails.analyzedInstructions[0].steps.map(
                (instruction, i) => (
                  <li key={i}>
                    <span>{instruction.number}</span>
                    {". "}
                    {instruction.step}
                  </li>
                )
              )}
            </Instructions>
          </Grid>
          <Details>
            <p>
              <span>Servings</span>: {recipeDetails.servings} persons
            </p>
            <p>
              <span>Ready</span>: {recipeDetails.readyInMinutes}min
            </p>
          </Details>
          <Wine>
            <div>
              <h3>Wine Pairing</h3>
              <p>{recipeDetails.winePairing.pairingText}</p>
            </div>
          </Wine>
        </StyledRecipeDetails>
      </CenteredContainer>
    );
  }
}

export default RecipeDetails;
