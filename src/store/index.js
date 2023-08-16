import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import moviesListReducer from "./slices/moviesListSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    movies: moviesListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.REACT_APP_ENV === "production" ? false : true,
});

export default store;
