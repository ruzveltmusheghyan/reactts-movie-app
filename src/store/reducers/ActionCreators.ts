import tmdbApi from "../../api/tmdbApi";
import { AppDispatch } from "../store";
import { movieSlice } from "./MovieSlice";
export const fetchTrendingMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(movieSlice.actions.movieFetching());
    const response = await tmdbApi.getTrendingMovies("day");
    dispatch(movieSlice.actions.movieFetchingSuccess(response.data.results));
  } catch (e) {}
};
export const fetchTopRatedMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(movieSlice.actions.movieFetching());
    const response = await tmdbApi.getTopRatedMovies();
    dispatch(movieSlice.actions.movieFetchingSuccess(response.data.results));
  } catch (e) {}
};

export const fetchUpcomingMovies = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(movieSlice.actions.movieFetching());
    const response = await tmdbApi.getUpcomingMovies();
    dispatch(movieSlice.actions.movieFetchingSuccess(response.data.results));
  } catch (e) {}
};
