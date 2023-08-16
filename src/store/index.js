import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.REACT_APP_ENV === "production" ? false : true,
});

export default store;
