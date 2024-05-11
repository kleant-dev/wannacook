/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Favourites from "./pages/Favourites";
import About from "./pages/About";
import GlobalStyle from "./ui/GlobalStyles";
import { RecipesProvider } from "./context/RecipesContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      { path: "/favourites", element: <Favourites /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={true} />
        <GlobalStyle />
        <RecipesProvider>
          <RouterProvider router={router}></RouterProvider>
        </RecipesProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
