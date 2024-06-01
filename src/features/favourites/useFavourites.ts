import { useQuery } from "@tanstack/react-query";
import { useRecipesContext } from "../../context/RecipesContext";
import { getFavourites } from "../../services/apiRecipes";

export function useFavourites() {
  const { favorites } = useRecipesContext();
  const {
    data: favourites,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => getFavourites(favorites),
  });
  return { favourites, isLoading, error };
}
