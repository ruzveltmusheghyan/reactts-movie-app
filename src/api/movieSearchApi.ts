import axios from "axios";
import apiConfig from "./config";
import { params } from "./config";

const movieSearchApi = {
  getSearchResults: (query: string) => {
    const url = `${apiConfig.baseURL}/search/movie/`;
    return axios.get(url, { params: { ...params, query: query } });
  },
};

export default movieSearchApi;
