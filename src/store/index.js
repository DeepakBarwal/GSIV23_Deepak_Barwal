import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import searchResultsReducer from "./slices/searchResultsSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    searchResults: searchResultsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.REACT_APP_ENV === "production" ? false : true,
});

export default store;
