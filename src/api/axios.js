import axios from "axios";
import { API_BASE_URL } from "../constants/urls";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getUpcomingMovies = async (page = 1, options = {}) => {
  const res = await api.get(
    `/discover/movie?api_key=${
      process.env.REACT_APP_API_KEY
    }&primary_release_date.gte=${
      new Date().toISOString().split("T")[0]
    }&sort_by=popularity.desc&language=en-US&page=${page}&include_adult=false`,
    options
  );
  return res.data;
};

export const getSearchResults = async (keywords, page = 1, options = {}) => {
  const res = await api.get(
    `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${keywords}&page=${page}&language=en-US&include_adult=false`,
    options
  );
  return res.data;
};
