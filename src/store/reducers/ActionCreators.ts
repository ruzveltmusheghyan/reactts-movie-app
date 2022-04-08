import tmdbApi from "../../api/tmdbApi";
import { movieCategories, Obj } from "../../models/movieModel";
import { AppDispatch } from "../store";
import {
  castFetchingSuccess,
  fetchingStart,
  movieFetchingSuccess,
  searchFetchingSuccess,
  singleMovieFetchingSuccess,
  fetchingError,
  getPageNumber,
} from "./MovieSlice";
import { useSelector } from "react-redux";

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
