import { createContext, useContext, useReducer } from "react";

const RecipesContext = createContext<ContextValue | null>(null);

type ContextValue = {
  query: string;
  favorites: number[];
  dispatch: React.Dispatch<Action>;
};
type Action =
  | { type: "setQuery"; payload: string }
  | { type: "addFavorite"; payload: number }
  | { type: "removeFavorite"; payload: number };
type State = {
  query: string;
  favorites: number[];
};
const initialState = {
  query: "",
  favorites: JSON.parse(localStorage.getItem("favorites") as string) || [],
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "setQuery":
      return { ...state, query: action.payload };
    case "addFavorite":
      localStorage.setItem(
        "favorites",
        JSON.stringify([...state.favorites, action.payload])
      );
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "removeFavorite":
      localStorage.setItem(
        "favorites",
        JSON.stringify([
          ...state.favorites.filter((id) => id !== action.payload),
        ])
      );
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
}

export function RecipesProvider({ children }: { children: React.ReactNode }) {
  const [{ query, favorites }, dispatch] = useReducer(reducer, initialState);
  return (
    <RecipesContext.Provider value={{ query, favorites, dispatch }}>
      {children}
    </RecipesContext.Provider>
  );
}

export function useRecipesContext() {
  const value = useContext(RecipesContext);
  if (!value)
    throw new Error("useRecipes must be used within a RecipesProvider");
  return value;
}
