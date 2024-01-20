import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import Category from "../components/Category/Category.jsx";
import SingleProduct from "../components/SingleProduct/SingleProduct.jsx";
import TemporaryDrawer from "../components/Cart/MUICart.jsx";
import About from "../components/About/About.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:id",
    element: <Category />,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/category",
    element: <Category />,
  },
]);
