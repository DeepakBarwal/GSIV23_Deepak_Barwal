import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesList: [],
  searchList: [],
};

const moviesListSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.moviesList = [...new Set([...state.moviesList, ...action.payload])];
      return state;
    },
    addSearchMovies: (state, action) => {
      state.searchList = [...new Set([...state.searchList, ...action.payload])];
      return state;
    },
  },
});

export const { addMovies, addSearchMovies } = moviesListSlice.actions;
export default moviesListSlice.reducer;
