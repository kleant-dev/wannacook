import { useRecipesContext } from "../../context/RecipesContext";
import { details } from "../../services/apiRecipes";
import styled from "styled-components";
import { useFavourites } from "./useFavourites";
import Spinner from "../../ui/Spinner";
import RecipesList from "../recipes/RecipesList";

export type DetailsType = typeof details;

const FavoritesError = styled.div`
  font-size: 2.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FavoritesHeader = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  padding-top: 2rem;
`;

function FavoritesList() {
  const { favorites } = useRecipesContext();
  console.log(favorites);
  const { favourites: favouriteRecipes, isLoading, error } = useFavourites();

  if (favorites.length === 0) {
    return <FavoritesError>No favorites yet</FavoritesError>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    console.error(error);
    return (
      <FavoritesError>An error occurred while loading favorites</FavoritesError>
    );
  }

  return (
    <>
      <FavoritesHeader>Your favorites</FavoritesHeader>
      <RecipesList favouriteRecipes={favouriteRecipes} />
    </>
  );
}

export default FavoritesList;
