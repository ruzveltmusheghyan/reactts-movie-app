import axios from "axios";
import apiConfig from "./config";
import { params } from "./config";

export const movieFetchApi = {
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
  getSimilarMovies: (movieId: string) => {
    const url = `${apiConfig.baseURL}/movie/${movieId}/similar`;
    return axios.get(url, { params: params });
  },
};
