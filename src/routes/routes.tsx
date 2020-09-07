import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import NotFoundPage from "../pages/NotFound/pages/NotFound";
import Recipes from "../pages/Recipes/Recipes";
import Register from "../pages/Register/Register";
import { AUTH_ONLY } from "./types";

export default () => [
  {
    path: "/",
    exact: true,
    component: Home,
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: "/recipes",
    exact: true,
    component: Recipes,
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
  },
  {
    path: "*",
    exact: true,
    component: NotFoundPage,
  },
];
