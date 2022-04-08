import { useEffect, useRef } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { nanoid } from "nanoid";
import { fetchMovies } from "../../store/reducers/ActionCreators";
import { navigation } from "./navigation";
import {
  getMovies,
  getPageNumber,
  isLoading,
} from "../../store/reducers/MovieSlice";
import Search from "../../components/search/Search";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "@mui/material";
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const movies = useSelector(getMovies);
  const loading = useSelector(isLoading);
  const pageNumber = useSelector(getPageNumber);
  const page = useRef<number>(1);

  useEffect(() => {
    page.current = 1;
    dispatch(fetchMovies(pathname, page.current));
  }, [pathname]);

  const loadMore = () => {
    page.current += 1;
    dispatch(fetchMovies(pathname, page.current));
  };

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
                        {<el.icon size={20} />} {el.display}
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
          <Button variant="contained" onClick={() => loadMore()}>
            Load More
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;
