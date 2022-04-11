import { castFetchingSuccess } from "./СastSlice";
import { AppDispatch } from "../store";
import {
  fetchingStart,
  movieFetchingSuccess,
  searchFetchingSuccess,
  singleMovieFetchingSuccess,
  fetchingError,
  similarMoviesFetchingSuccess,
} from "./MovieSlice";
import { movieFetchApi } from "../../api/movieFetchApi";
import { castFetchApi } from "../../api/castFetchApi";
import movieSearchApi from "../../api/movieSearchApi";

export const fetchMovies =
  (pathname: string, page: number) => async (dispatch: AppDispatch) => {
    try {
      if (page == 1) {
        dispatch(fetchingStart());
      }
      const movieDetails = <T>(results: T) => {
        const Movies = {
          results: results,
          pathname: pathname,
        };
        dispatch(movieFetchingSuccess(Movies));
      };

      const { data } = await movieFetchApi.getMovies(page, pathname);
      movieDetails(data.results);
    } catch (e) {}
  };

export const fetchSingleMovie =
  (category: string, movieId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchingStart());
      const { data } = await movieFetchApi.getSingleMovie(category, movieId);
      dispatch(fetchMovieCast(movieId));
      dispatch(fetchSimilarMovies(movieId));
      dispatch(singleMovieFetchingSuccess(data));
    } catch (e) {
      dispatch(fetchingError());
    }
  };

const fetchMovieCast = (movieId: string) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await castFetchApi.getMovieCast(movieId);
    dispatch(castFetchingSuccess(data.cast));
  } catch (e) {}
};
export const fetchSearch = (query: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchingStart());
    const { data } = await movieSearchApi.getSearchResults(query);
    dispatch(searchFetchingSuccess(data.results));
  } catch (e) {}
};

const fetchSimilarMovies = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await movieFetchApi.getSimilarMovies(id);
    dispatch(similarMoviesFetchingSuccess(data.results));
  } catch (e) {}
};
