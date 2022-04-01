import tmdbApi from "../../api/tmdbApi";
import { AppDispatch } from "../store";
import { movieSlice } from "./MovieSlice";
import { useNavigate } from "react-router";
export const fetchTrendingMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(movieSlice.actions.movieFetching());
    const { data } = await tmdbApi.getTrendingMovies("day");
    dispatch(movieSlice.actions.movieFetchingSuccess(data.results));
  } catch (e) {}
};
export const fetchTopRatedMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(movieSlice.actions.movieFetching());
    const { data } = await tmdbApi.getTopRatedMovies();
    dispatch(movieSlice.actions.movieFetchingSuccess(data.results));
  } catch (e) {}
};

export const fetchUpcomingMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(movieSlice.actions.movieFetching());
    const { data } = await tmdbApi.getUpcomingMovies();
    dispatch(movieSlice.actions.movieFetchingSuccess(data.results));
  } catch (e) {}
};

export const fetchSingleMovie =
  (category: string, movieId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(movieSlice.actions.movieFetching());
      const { data } = await tmdbApi.getSingleMovie(category, movieId);

      dispatch(movieSlice.actions.singleMovieFetchingSuccess(data));
    } catch (e) {}
  };

export const fetchMovieCast =
  (movieId: string) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await tmdbApi.getMovieCast(movieId);
      dispatch(movieSlice.actions.castFetching(data.cast));
    } catch (e) {}
  };
export const fetchSearch = (query: string) => async (dispatch: AppDispatch) => {
  try {
    if (query === "") {
      return;
    }
    const { data } = await tmdbApi.getSearchResults(query);
    dispatch(movieSlice.actions.searchFetching(data.results));
  } catch (e) {}
};
