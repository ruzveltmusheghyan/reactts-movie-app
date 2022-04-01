import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleMovie } from "../../models/movieModel";

interface MovieState {
  singleMovie: SingleMovie;
  movies: [];
  tv: [];
  cast: [];
  isLoading: boolean;
  error: string;
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
  error: "",
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
    movieFetchingSuccess(state, action: PayloadAction<[]>) {
      state.isLoading = false;
      state.error = "";
      state.movies = action.payload;
    },
    singleMovieFetchingSuccess(state, action: PayloadAction<SingleMovie>) {
      state.isLoading = false;
      state.error = "";
      state.singleMovie = action.payload;
    },
    movieFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    castFetching(state, action: PayloadAction<[]>) {
      state.cast = action.payload;
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
