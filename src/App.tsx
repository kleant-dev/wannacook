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

const appId = `0c8b59aa`;
const appKey = `aa5cf18650e835bcff9a8cf7ff2bd26e`;

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
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>;
    </>
  );
}

export default App;
