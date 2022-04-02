import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
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
import Search from "../../components/search/Search";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [movieState, setMovieState] = useState([]);
  const { movies } = useAppSelector((state) => state.movieReducer);
  const { isLoading } = useAppSelector((state) => state.movieReducer);
  useEffect(() => {
    setMovieState(movies);
  }, [movies]);
  console.log(movies);
  const navigation = [
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
    {
      pathname: "/top_rated",
      display: "Top Rated",
      icon: <AiOutlineStar />,
    },
  ];
  useEffect(() => {
    switch (pathname) {
      case "/top_rated":
        dispatch(fetchTopRatedMovies());
        navigate("/top_rated");
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
                    <Link key={i} to={el.pathname}>
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
                        {el.icon} {el.display}
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div>
                <Search />
              </div>
            </div>
            {isLoading ? (
              <div className="loading">
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <Card fromPath={pathname} movies={movieState} />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
