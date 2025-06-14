import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ErroPage from "../pages/ErroPage";
import PrivateRoute from "./PrivateRoute";
import Addproduct from "../pages/Addproduct";
import Allproduct from "../pages/Allproduct";
import Details from "../pages/Details";
import Cart from "../pages/Cart";
import MyProduct from "../pages/MyProduct";
import Categories from "../pages/Categories";
import ProductCategories from "../pages/Home/ProductCategories";
import Upadateprocuct from "../pages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/login",
        Component: Login,
      },

      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <Addproduct></Addproduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/upadateprocuct/:id",
        element: (
          <PrivateRoute>
            <Upadateprocuct></Upadateprocuct>
          </PrivateRoute>
        ),
      },
      {
        path: "/allproduct",
        element: (
          <PrivateRoute>
            <Allproduct></Allproduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/myproduct",
        element: (
          <PrivateRoute>
            <MyProduct></MyProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/Categories",
        element:<PrivateRoute>
          <Categories></Categories>
        </PrivateRoute>
      },
    ],
  },
  {
    path: "/*",
    Component: ErroPage,
  },
]);
export default router;
