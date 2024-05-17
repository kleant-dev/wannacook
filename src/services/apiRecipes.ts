import { RecipeHeaderType } from "../features/recipes/RecipesList";

/* eslint-disable @typescript-eslint/no-unused-vars */
const baseUrl = "https://api.spoonacular.com";
const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

const searchQueryUrl = `${baseUrl}/recipes/complexSearch?apiKey=${apiKey}&query=`;
const cuisineUrl = `${baseUrl}/recipes/complexSearch?apiKey=${apiKey}&cuisine=`;
const mealTypeUrl = `${baseUrl}/recipes/complexSearch?apiKey=${apiKey}&type=`;
type Recipes = {
  number: number;
  offset: number;
  results: RecipeHeaderType[];
  totalResults: number;
};

type RecipeDetails = {
  aggregateLikes: number;
  analyzedInstructions: {
    name: string;
    steps: { number: number; step: string }[];
  }[];
  cheap: boolean;
  cookingMinutes: number;
  creditsText: string;
  cuisines: string[];
  diets: string[];
  dairyFree: boolean;
  dishTypes: string[];
  extendedIngredients: {
    amount: number;
    id: number;
    image: string;
    name: string;
    original: string;
    originalString: string;
    originalName: string;
    unit: string;
  }[];
  gaps: string;
  healthScore: number;
  id: number;
  image: string;
  imageType: string;
  glutenFree: boolean;
  instructions: string;
  license: string;
  nutrition: {
    nutrients: {
      name: string;
      amount: number;
      unit: string;
      percentOfDailyNeeds: number;
    }[];
    properties: { name: string; amount: number; unit: string }[];
    flavonoids: { name: string; amount: number; unit: string }[];
    ingredients: { id: number; name: string; amount: number; unit: string }[];
    caloricBreakdown: {
      percentProtein: number;
      percentFat: number;
      percentCarbs: number;
    };
    weightPerServing: { amount: number; unit: string };
  };
  lowFodmap: boolean;
  occasions: string[];
  originalId: number | null;
  preparationMinutes: number;
  pricePerServing: number;
  readyInMinutes: number;
  servings: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
  summary: string;
  sustainable: boolean;
  title: string;
  vegan: boolean;
  taste: { [key: string]: number };
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  weightWatcherSmartPoints: number;
  winePairing: {
    pairedWines: Array<unknown>;
    pairingText: string;
    productMatches: Array<unknown>;
  };
};

const cuisines = [
  "african",
  "asian",
  "american",
  "british",
  "cajun",
  "caribbean",
  "chinese",
  "eastern european",
  "european",
  "french",
  "german",
  "greek",
  "indian",
  "irish",
  "italian",
  "japanese",
  "jewish",
  "korean",
  "latin american",
  "mediterranean",
  "mexican",
  "middle eastern",
  "nordic",
  "southern",
  "spanish",
  "thai",
  "vietnamese",
];

const mealTypes = [
  "main course",
  "side dish",
  "dessert",
  "appetizer",
  "salad",
  "bread",
  "breakfast",
  "soup",
  "beverage",
  "sauce",
  "marinade",
  "fingerfood",
  "snack",
  "drink",
];

export async function getRecipes(query: string): Promise<Recipes | null> {
  let res: Response;
  try {
    if (cuisines.includes(query.toLowerCase())) {
      res = await fetch(cuisineUrl + query);
    } else if (mealTypes.includes(query.toLowerCase())) {
      res = await fetch(mealTypeUrl + query);
    } else {
      res = await fetch(searchQueryUrl + query);
    }

    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const data = await res.json();
    if (!data) throw new Error("Could not find any recipes");
    return data;
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Something went wrong"
    );
  }
}

export let details: undefined | RecipeDetails;

export async function getRecipeDetails(
  id: string | undefined
): Promise<RecipeDetails | null> {
  try {
    const res = await fetch(
      `${baseUrl}/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`
    );
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const data = await res.json();
    if (!data) throw new Error("Could not find any recipes");
    details = data;
    return data;
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Something went wrong"
    );
  }
}
