import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../../services/apiRecipes";
import { useRecipesContext } from "../../context/RecipesContext";
import { useEffect } from "react";

export function useRecipes() {
  const { query } = useRecipesContext();
  const {
    data: recipes,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => (query ? getRecipes(query) : Promise.resolve(null)),
  });
  useEffect(() => {
    if (query) refetch();
  }, [query, refetch]);
  return { recipes, isLoading, error };
}
