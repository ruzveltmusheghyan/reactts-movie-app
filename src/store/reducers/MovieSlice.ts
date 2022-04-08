import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { movieCategories, Movie } from "../../models/movieModel";
import { Movies } from "../../models/MoviesMode";
import { RootState } from "../store";
interface MovieState {
  singleMovie: Movie;
  movies: Movies;
  tv: [];
  cast: [];
  isLoading: boolean;
  error: boolean;
  isLogin: string | boolean;
  favoriteMovies: Movie[];
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
  favoriteMovies: [] as Movie[],
  cast: [],
  movies: {
    results: [] as Movie[],
    page: 1,
    totalResults: 0,
    category: "",
  },
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
      if (state.movies.category === payload.pathname) {
        state.movies.page += 1;
        state.movies = {
          ...state.movies,
          results: [...state.movies.results, ...payload.results],
        };
      } else {
        state.movies.category = payload.pathname;
        state.movies.results = payload.results;
      }
      state.isLoading = false;
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
export const getPageNumber = (state: RootState) =>
  state.movieReducer.movies.page;
export const getMovies = (state: RootState) =>
  state.movieReducer.movies.results;
export const getMoviesCategory = (state: RootState) =>
  state.movieReducer.movies.category;
export const getCast = (state: RootState) => state.movieReducer.cast;
export const getFavoriteMovies = (state: RootState) =>
  state.movieReducer.favoriteMovies;
export const getSingleMovie = (state: RootState) =>
  state.movieReducer.singleMovie;
export const isLoading = (state: RootState) => state.movieReducer.isLoading;
export const isError = (state: RootState) => state.movieReducer.error;
export default movieSlice.reducer;
