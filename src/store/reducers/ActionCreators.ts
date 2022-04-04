import tmdbApi from "../../api/tmdbApi";
import { AppDispatch } from "../store";
import {
  castFetchingSuccess,
  fetchingStart,
  movieFetchingSuccess,
  searchFetchingSuccess,
  singleMovieFetchingSuccess,
  fetchingError,
} from "./MovieSlice";

export const fetchTrendingMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchingStart);
    const { data } = await tmdbApi.getTrendingMovies("day");
    dispatch(movieFetchingSuccess(data.results));
  } catch (e) {}
};
export const fetchTopRatedMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchingStart());
    const { data } = await tmdbApi.getTopRatedMovies();
    dispatch(movieFetchingSuccess(data.results));
  } catch (e) {}
};

export const fetchUpcomingMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchingStart());
    const { data } = await tmdbApi.getUpcomingMovies();
    dispatch(movieFetchingSuccess(data.results));
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
