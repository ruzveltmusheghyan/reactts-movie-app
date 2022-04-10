import React, { useEffect } from "react";
import { useParams } from "react-router";
import Header from "../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleMovie } from "../../store/reducers/ActionCreators";
import apiConfig from "../../api/config";
import { useNavigate } from "react-router";
import { getSingleMovie, isError } from "../../store/reducers/MovieSlice";
import SingleMovieDetails from "../../components/singleMovieDetails/SingleMovieDetails";

interface myParams {
  category: string;
  id: string;
}

const Movie: React.FC = () => {
  const { category, id } = useParams<keyof myParams>() as myParams;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const singleMovie = useSelector(getSingleMovie);
  const errorFetching = useSelector(isError);
  useEffect(() => {
    if (id) {
      dispatch(fetchSingleMovie(category, id));
      window.scrollTo(0, 0);
    } else {
      navigate("/");
    }
  }, [id]);
  useEffect(() => {
    if (errorFetching) navigate("/");
  }, [errorFetching]);
  return (
    <>
      {singleMovie ? (
        <>
          <div
            className="background_poster"
            style={
              singleMovie?.backdrop_path
                ? {
                    backgroundImage: `url(${apiConfig?.image(
                      singleMovie?.backdrop_path || singleMovie?.poster_path
                    )})`,
                  }
                : {}
            }
          ></div>
          <Header />
          <SingleMovieDetails singleMovie={singleMovie} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Movie;
