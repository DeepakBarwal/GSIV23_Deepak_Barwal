// This is the parent apiSlice, other specific slices will inject endpoints on top of it
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants/urls";

const baseQuery = fetchBaseQuery({ baseUrl: API_BASE_URL });

const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});

export default apiSlice;
