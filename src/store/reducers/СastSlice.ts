import { createSlice } from "@reduxjs/toolkit";
import { Actor, Cast } from "../../models/CastModel";
import { RootState } from "../store";

const initialState: Cast = {
  cast: [] as Actor[],
};

const castSlice = createSlice({
  name: "cast",
  initialState,
  reducers: {
    castFetchingSuccess(state, { payload }) {
      state.cast = payload;
    },
  },
});

export const { castFetchingSuccess } = castSlice.actions;
export const getCast = (state: RootState) => state.castReducer.cast;
export default castSlice.reducer;
