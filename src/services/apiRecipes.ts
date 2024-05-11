import { RecipeHeaderType } from "../features/recipes/RecipesList";

/* eslint-disable @typescript-eslint/no-unused-vars */
const baseUrl = "https://api.spoonacular.com";
const apiKey = `52a45630931042f786ef078d6c991079`;

const url = `${baseUrl}/recipes/complexSearch?apiKey=${apiKey}&query=`;

type Recipes = {
  number: number;
  offset: number;
  results: RecipeHeaderType[];
  totalResults: number;
};
export async function getRecipes(query: string): Promise<Recipes | null> {
  try {
    const response = await fetch(url + query);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    if (!data) throw new Error("Could not find any recipes");
    return data;
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Something went wrong"
    );
  }
}
