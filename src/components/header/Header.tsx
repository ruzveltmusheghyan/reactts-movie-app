import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../hamburger/Hamurger";
import { useLocation } from "react-router";
import { navigation } from "./navigation";
import { useSelector } from "react-redux";
import { getFavoriteMovies } from "../../store/reducers/MovieSlice";
const Header: React.FC = ({}) => {
  const location = useLocation();
  const favoriteMovies = useSelector(getFavoriteMovies);

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
                {e.path === "/favorite" && favoriteMovies.length > 0 && (
                  <span className="watch-count">{favoriteMovies.length}</span>
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
