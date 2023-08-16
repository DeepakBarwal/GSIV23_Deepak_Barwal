import apiSlice from "./apiSlice";

export const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getParticularMovie: builder.query({
      query: ({ movieId }) => ({
        url: `/movie/${movieId}`,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "en-US",
        },
      }),
    }),
    getMovieCredits: builder.query({
      query: ({ movieId }) => ({
        url: `/movie/${movieId}/credits`,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "en-US",
        },
      }),
    }),
  }),
});

export const { useGetParticularMovieQuery, useGetMovieCreditsQuery } =
  moviesApiSlice;
