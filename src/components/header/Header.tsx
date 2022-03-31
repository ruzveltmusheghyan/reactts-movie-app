import React from "react";
import { Link } from "react-router-dom";
const Header = ({}) => {
  const navigation = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Movies",
      path: "/movie",
    },
    {
      display: "TV series",
      path: "/tv",
    },
    {
      display: "Favorite",
      path: "/favorite",
    },
  ];
  return (
    <header>
      <div className="background-container"></div>
      <div className="container align-start justify-between flex">
        <div className="logo">
          <Link to="/">
            <h1>Movie App</h1>
          </Link>
        </div>
        <div className="menu">
          <ul className="menu__list flex">
            {navigation.map((element, index) => {
              return (
                <li key={index} className="menu-list__item">
                  <Link to={element.path}>{element.display}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
