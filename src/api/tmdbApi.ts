import axios from "axios";
import apiConfig from "./config";

const params = {
  params: {
    api_key: apiConfig.apiKey,
  },
};

const tmdbApi = {
  getTrendingMovies: (time: string) => {
    const url = `${apiConfig.baseURL}/trending/movie/${time}`;
    return axios.get(url, params);
  },
  getTopRatedMovies: () => {
    const url = `${apiConfig.baseURL}/movie/top_rated`;
    return axios.get(url, params);
  },
  getUpcomingMovies: () => {
    const url = `${apiConfig.baseURL}/movie/upcoming`;
    return axios.get(url, params);
  },
};

export default tmdbApi;
