import apiSlice from "./apiSlice";

export const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUpcomingMoviesByPopularity: builder.query({
      query: ({ page }) => ({
        url: "/discover/movie",
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "en-US",
          page,
          "primary_release_date.gte": new Date().toISOString().split("T")[0],
          sort_by: "popularity.desc",
        },
      }),
    }),
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
    searchMovieByName: builder.query({
      query: ({ searchTerm, page }) => ({
        url: `/search/movie`,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          query: searchTerm,
          language: "en-US",
          page,
        },
      }),
    }),
  }),
});

export const {
  useGetUpcomingMoviesByPopularityQuery,
  useGetParticularMovieQuery,
  useGetMovieCreditsQuery,
  useSearchMovieByNameQuery,
} = moviesApiSlice;
