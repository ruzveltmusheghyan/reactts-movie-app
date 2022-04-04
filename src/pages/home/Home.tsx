import { useEffect, useState, useTransition } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { nanoid } from "nanoid";
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../../store/reducers/ActionCreators";
import { navigation } from "./navigation";
import { getMovies, isLoading } from "../../store/reducers/MovieSlice";
import Search from "../../components/search/Search";
import { useDispatch, useSelector } from "react-redux";
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const movies = useSelector(getMovies);
  const loading = useSelector(isLoading);
  useEffect(() => {
    switch (pathname) {
      case "/top_rated":
        dispatch(fetchTopRatedMovies());
        break;
      case "/trending":
        dispatch(fetchTrendingMovies());
        break;
      case "/upcoming":
        dispatch(fetchUpcomingMovies());
        break;
      case "/search":
        break;
      default:
        dispatch(fetchTrendingMovies());
    }
  }, [pathname]);
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div>
            <div className="filter__search flex justify-between">
              <div className="home__filter flex">
                {navigation.map((el, i) => {
                  return (
                    <Link key={nanoid()} to={el.pathname}>
                      <span
                        className={`filter__button flex align-center justify-center ${
                          pathname === el.pathname
                            ? "active"
                            : "" ||
                              (pathname === "/" && el.pathname === "/trending"
                                ? "active"
                                : "")
                        }`}
                      >
                        {<el.icon />} {el.display}
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div>
                <Search />
              </div>
            </div>
            {loading ? (
              <div className="loading">
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <Card fromPath={pathname} movies={movies} />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
