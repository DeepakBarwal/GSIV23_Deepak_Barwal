import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.REACT_APP_ENV === "production" ? false : true,
});

export default store;
