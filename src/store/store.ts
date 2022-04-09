import { combineReducers, configureStore } from "@reduxjs/toolkit";

import movieReducer from "./reducers/MovieSlice";
import castReducer from "./reducers/castSlice";
const rootReducer = combineReducers({
  movieReducer,
  castReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
