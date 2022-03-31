import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  singleMovie: object;
  movies: [];
  tv: [];
  isLoading: boolean;
  error: string;
}

const initialState: MovieState = {
  singleMovie: {},
  movies: [],
  tv: [],
  isLoading: false,
  error: "",
};

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
    singleMovieFetchingSuccess(state, action: PayloadAction<[]>) {
      state.isLoading = false;
      state.error = "";
      state.singleMovie = action.payload;
    },
    movieFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default movieSlice.reducer;
