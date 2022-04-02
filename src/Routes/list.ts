import Favorites from "../pages/favorites/Favorites";
import Home from "../pages/home/Home";
import SingleMovie from "../pages/singleMovie/Movie";
export const list = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/top_rated",
    element: Home,
  },
  {
    path: "/trending",
    element: Home,
  },
  {
    path: "/upcoming",
    element: Home,
  },
  {
    path: "/favorite",
    element: Favorites,
  },
  {
    path: "/:category/:id",
    element: SingleMovie,
  },
  {
    path: "/search",
    element: Home,
  },
  {
    path: "*",
    element: Home,
  },
];
