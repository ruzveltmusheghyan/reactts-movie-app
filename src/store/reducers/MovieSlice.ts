import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleMovie } from "../../models/movieModel";

interface MovieState {
  singleMovie: SingleMovie;
  movies: [];
  tv: [];
  cast: [];
  isLoading: boolean;
  error: boolean;
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
};

localStorage.getItem("favoriteMovies") &&
  (initialState.favoriteMovies = JSON.parse(
    localStorage.getItem("favoriteMovies") || "[]"
  ));

export const movieSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    movieFetching(state) {
      state.isLoading = true;
    },
    fetchingError(state) {
      state.error = true;
    },
    movieFetchingSuccess(state, action: PayloadAction<[]>) {
      state.isLoading = false;
      state.movies = action.payload;
    },
    singleMovieFetchingSuccess(state, action: PayloadAction<SingleMovie>) {
      state.isLoading = false;
      state.singleMovie = action.payload;
    },

    castFetching(state, action: PayloadAction<[]>) {
      state.cast = action.payload;
    },
    searchFetching(state, action: PayloadAction<[]>) {
      state.isLoading = false;
      state.movies = action.payload;
    },
    addTOFavorites(state, action: PayloadAction<SingleMovie>) {
      const isFav = state.favoriteMovies.find((fav) =>
        fav.id === action.payload.id ? true : false
      );
      if (isFav) {
        state.favoriteMovies = state.favoriteMovies.filter(
          (fav) => fav.id !== action.payload.id
        );
      } else {
        state.favoriteMovies.push(action.payload);
      }
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify(state.favoriteMovies)
      );
    },
  },
});

export default movieSlice.reducer;
