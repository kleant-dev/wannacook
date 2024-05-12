import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../../services/apiRecipes";

export function useRecipeDetails() {
  const { id } = useParams();
  const {
    data: recipeDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipeDetails"],
    queryFn: () => getRecipeDetails(id),
  });
  return { recipeDetails, isLoading, error };
}
