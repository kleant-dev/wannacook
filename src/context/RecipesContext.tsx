import { createContext, useContext, useReducer } from "react";

const RecipesContext = createContext<ContextValue | null>(null);

type ContextValue = {
  query: string;
  dispatch: React.Dispatch<Action>;
};
type Action = { type: "setQuery"; payload: string };
type State = { query: string };
const initialState = {
  query: "",
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "setQuery":
      return { ...state, query: action.payload };
  }
}

export function RecipesProvider({ children }: { children: React.ReactNode }) {
  const [{ query }, dispatch] = useReducer(reducer, initialState);
  return (
    <RecipesContext.Provider value={{ query, dispatch }}>
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
