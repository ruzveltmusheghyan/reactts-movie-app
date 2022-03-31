import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import {
  AiOutlineStar,
  AiOutlineFire,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../../store/reducers/ActionCreators";
const Home = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [movieState, setMovieState] = useState([]);
  const { movies } = useAppSelector((state) => state.movieReducer);
  const { isLoading } = useAppSelector((state) => state.movieReducer);
  useEffect(() => {
    setMovieState(movies);
  }, [movies]);
  const navigation = [
    {
      pathname: "/top_rated",
      display: "Top Rated",
      icon: <AiOutlineStar />,
    },
    {
      pathname: "/trending",
      display: "Trending Now",
      icon: <AiOutlineFire />,
    },
    {
      pathname: "/upcoming",
      display: "Upcoming",
      icon: <AiOutlineFieldTime />,
    },
  ];
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
      default:
        dispatch(fetchTopRatedMovies());
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div>
            <div className="home__filter flex">
              {navigation.map((el, i) => {
                return (
                  <Link key={i} to={el.pathname}>
                    <span className="filter__button flex align-center justify-center">
                      {el.icon} {el.display}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="category-text flex justify-between">
              {/* Trending movies */}
            </div>
            {isLoading ? (
              <div className="loading">
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <Card media={movieState} />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
