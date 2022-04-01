import axios from "axios";
import apiConfig from "./config";

const params = {
  api_key: apiConfig.apiKey,
  query: "",
};

const tmdbApi = {
  getTrendingMovies: (time: string) => {
    const url = `${apiConfig.baseURL}/trending/movie/${time}`;
    return axios.get(url, { params: params });
  },
  getTopRatedMovies: () => {
    const url = `${apiConfig.baseURL}/movie/top_rated`;
    return axios.get(url, { params: params });
  },
  getUpcomingMovies: () => {
    const url = `${apiConfig.baseURL}/movie/upcoming`;
    return axios.get(url, { params: params });
  },
  getSingleMovie: (category: string, movieId: string) => {
    const url = `${apiConfig.baseURL}/${category}/${movieId}`;
    return axios.get(url, { params: params });
  },
  getMovieCast: (movieId: string) => {
    const url = `${apiConfig.baseURL}/movie/${movieId}/credits`;
    return axios.get(url, { params: params });
  },
  getSearchResults: (query: string) => {
    const url = `${apiConfig.baseURL}/search/movie/`;
    return axios.get(url, { params: { ...params, query: query } });
  },
};

export default tmdbApi;
