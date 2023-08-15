import apiSlice from "./apiSlice";

export const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUpcomingMoviesByPopularity: builder.query({
      query: ({ page }) => ({
        url: "",
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: "en-US",
          page,
          "primary_release_date.gte": new Date().toISOString().split("T")[0],
          sort_by: "popularity.desc",
        },
      }),
    }),
  }),
});

export const { useGetUpcomingMoviesByPopularityQuery } = moviesApiSlice;
