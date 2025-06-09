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
    ],
  },
  {
    path: "/*",
    Component: ErroPage,
  },
]);
export default router;
