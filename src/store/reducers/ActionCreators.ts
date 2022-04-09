import tmdbApi from "../../api/tmdbApi";
import { castFetchingSuccess } from "./castSlice";
import { AppDispatch } from "../store";
import {
  fetchingStart,
  movieFetchingSuccess,
  searchFetchingSuccess,
  singleMovieFetchingSuccess,
  fetchingError,
  similarMoviesFetchingSuccess,
} from "./MovieSlice";

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

      const { data } = await tmdbApi.getMovies(page, pathname);
      movieDetails(data.results);
    } catch (e) {}
  };

export const fetchSingleMovie =
  (category: string, movieId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchingStart());
      const { data } = await tmdbApi.getSingleMovie(category, movieId);
      dispatch(singleMovieFetchingSuccess(data));
    } catch (e) {
      dispatch(fetchingError());
    }
  };

export const fetchMovieCast =
  (movieId: string) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await tmdbApi.getMovieCast(movieId);
      dispatch(castFetchingSuccess(data.cast));
    } catch (e) {}
  };
export const fetchSearch = (query: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchingStart());
    const { data } = await tmdbApi.getSearchResults(query);
    dispatch(searchFetchingSuccess(data.results));
  } catch (e) {}
};

export const fetchSimilarMovies =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await tmdbApi.getSimilarMovies(id);
      dispatch(similarMoviesFetchingSuccess(data.results));
    } catch (e) {}
  };
