import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleMovie } from "../../models/movieModel";
import { RootState } from "../store";
interface MovieState {
  singleMovie: SingleMovie;
  movies: [];
  tv: [];
  cast: [];
  isLoading: boolean;
  error: boolean;
  isLogin: string | boolean;
  favoriteMovies: SingleMovie[];
}

const initialState: MovieState = {
  singleMovie: {
    id: 0,
    title: "",
    original_title: "",
    backdrop_path: "",
    poster_path: "",
    name: "",
    genres: [],
    release_date: "",
    first_air_date: "",
    spoken_languages: [],
    runtime: 0,
    episode_run_time: "",
    status: "",
    production_countries: [],
    overview: "",
  },
  favoriteMovies: [],
  cast: [],
  movies: [],
  tv: [],
  isLoading: false,
  error: false,
  isLogin: false,
};

localStorage.getItem("favoriteMovies") &&
  (initialState.favoriteMovies = JSON.parse(
    localStorage.getItem("favoriteMovies") || "[]"
  ));

export const movieSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    fetchingStart(state) {
      state.isLoading = true;
    },
    fetchingError(state) {
      state.error = true;
    },
    movieFetchingSuccess(state, { payload }) {
      state.isLoading = false;
      state.movies = payload;
    },
    singleMovieFetchingSuccess(state, { payload }) {
      state.isLoading = false;
      state.singleMovie = payload;
    },
    castFetchingSuccess(state, { payload }) {
      state.cast = payload;
    },
    searchFetchingSuccess(state, { payload }) {
      state.isLoading = false;
      state.movies = payload;
    },
    addToFavorites(state, { payload }) {
      const isFav = state.favoriteMovies.find((fav) =>
        fav.id === payload.id ? true : false
      );
      if (isFav) {
        state.favoriteMovies = state.favoriteMovies.filter(
          (fav) => fav.id !== payload.id
        );
      } else {
        state.favoriteMovies.push(payload);
      }
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify(state.favoriteMovies)
      );
    },
  },
});

export const {
  fetchingStart,
  fetchingError,
  movieFetchingSuccess,
  singleMovieFetchingSuccess,
  castFetchingSuccess,
  addToFavorites,
  searchFetchingSuccess,
} = movieSlice.actions;
export const getMovies = (state: RootState) => state.movieReducer.movies;
export const getCast = (state: RootState) => state.movieReducer.cast;
export const getFavoriteMovies = (state: RootState) =>
  state.movieReducer.favoriteMovies;
export const getSingleMovie = (state: RootState) =>
  state.movieReducer.singleMovie;
export const isLoading = (state: RootState) => state.movieReducer.isLoading;
export const isError = (state: RootState) => state.movieReducer.error;
export default movieSlice.reducer;
