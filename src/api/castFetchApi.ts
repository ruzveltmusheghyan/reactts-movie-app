import axios from "axios";
import { params } from "./config";
import apiConfig from "./config";
export const castFetchApi = {
  getMovieCast: (movieId: string) => {
    const url = `${apiConfig.baseURL}/movie/${movieId}/credits`;
    return axios.get(url, { params: params });
  },
};
