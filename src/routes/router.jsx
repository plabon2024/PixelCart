import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ErroPage from "../pages/ErroPage";

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
    ],
  },
  {
    path: "/*",
    Component: ErroPage,
  },
]);
export default router;
