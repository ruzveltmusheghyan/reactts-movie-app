import { useEffect, useRef } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import { useLocation } from "react-router";
import { fetchMovies } from "../../store/reducers/ActionCreators";
import { Navigation } from "./Navigation";
import { getMovies, isLoading } from "../../store/reducers/MovieSlice";
import Search from "../../components/search/Search";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import Loading from "../../components/loading/Loading";
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const movies = useSelector(getMovies);
  const loading = useSelector(isLoading);
  const page = useRef<number>(1);

  useEffect(() => {
    page.current = 1;
    dispatch(fetchMovies(pathname, page.current));
  }, [pathname]);
  const loadMore = () => {
    page.current += 1;
    dispatch(fetchMovies(pathname, page.current));
  };

  useEffect(() => {
    if (page.current > 1) window.scrollTo(0, document.body.scrollHeight);
  }, [movies]);
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div>
            <div className="filter__search flex justify-between">
              <div className="home__filter flex">
                <Navigation pathname={pathname} />
              </div>
              <div>
                <Search />
              </div>
            </div>

            {loading ? (
              <Loading />
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
