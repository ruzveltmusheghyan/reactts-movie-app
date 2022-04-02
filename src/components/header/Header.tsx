import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../hamburger/Hamurger";
import { useLocation } from "react-router";
import { useAppSelector } from "../../hooks/redux";
const Header: React.FC = ({}) => {
  const location = useLocation();
  const favoriteMovies = useAppSelector(
    (state) => state.movieReducer.favoriteMovies
  );
  const navigation = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Favorite",
      path: "/favorite",
    },
  ];
  const active = navigation.findIndex((i) => i.path === location.pathname);
  return (
    <header>
      <div className="background-container"></div>
      <div className="container align-start justify-between flex">
        <div className="logo">
          <Link to="/trending">
            <h1>Movie App</h1>
          </Link>
        </div>
        <div className="menu">
          <ul className="menu__list flex">
            {navigation.map((e, i) => (
              <li
                key={i}
                className={
                  i === active ? "menu-list__item active" : "menu-list__item"
                }
              >
                <Link to={e.path}>{e.display}</Link>
                {e.path === "/favorite" && favoriteMovies.length > 0 ? (
                  <span className="watch-count">{favoriteMovies.length}</span>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default Header;
