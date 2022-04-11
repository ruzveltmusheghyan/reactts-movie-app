import React from "react";
import { useSelector } from "react-redux";
import { getCast } from "../../store/reducers/СastSlice";
import { getSimilarMovies } from "../../store/reducers/MovieSlice";
import apiConfig from "../../api/config";
import { Movie } from "../../models/MovieModel";
import CastSlider from "../SingleMovieCastSlider/CastSlider";
import AddFav from "../addFav/AddFav";
import MoviesSlider from "../similarMoviesSlider/MoviesSlider";
import SingleMovieGenres from "../singleMovieGenres/SingleMovieGenres";
import SingleMovieInfo from "../singleMovieInfo/SingleMovieInfo";
interface Props {
  singleMovie: Movie;
}

const SingleMovieDetails: React.FC<Props> = ({ singleMovie }) => {
  const cast = useSelector(getCast);
  const similarMovies = useSelector(getSimilarMovies);
  return (
    <div className="container">
      <div className="details__container">
        <div className="details__poster">
          <img src={apiConfig?.w500Image(singleMovie?.poster_path)} alt="" />
        </div>
        <div className="details__other flex">
          <p className="movie__title">
            {singleMovie?.title ||
              singleMovie?.original_title ||
              singleMovie?.name}
          </p>
          <SingleMovieGenres genres={singleMovie?.genres} />
          <AddFav movie={singleMovie} />
          <div className="overview">
            <span className="overview__text">{singleMovie.overview}</span>
          </div>
          <SingleMovieInfo singleMovie={singleMovie} />
        </div>
      </div>
      <div className="container">
        <p className="category-text">Cast</p>
        <div className="media__cast ">
          <CastSlider cast={cast} />
        </div>
        <p className="category-text">Similar Movies</p>
        <div className="similar__movies">
          <MoviesSlider movies={similarMovies} />
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDetails;
