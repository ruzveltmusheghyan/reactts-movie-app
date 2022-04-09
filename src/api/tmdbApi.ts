import axios from "axios";
import apiConfig from "./config";

const params = {
  api_key: apiConfig.apiKey,
  query: "",
};

const tmdbApi = {
  getMovies: (page: number, category: string) => {
    let url: string = "";
    if (category === "/trending" || category === "/") {
      url = `${apiConfig.baseURL}/trending/movie/day?api_key=${apiConfig.apiKey}&language=en-US&page=${page}`;
    } else {
      url = `${apiConfig.baseURL}/movie${category}?api_key=${apiConfig.apiKey}&language=en-US&page=${page}`;
    }
    return axios.get(url);
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
