const apiConfig = {
  baseURL: "https://api.themoviedb.org/3",
  apiKey: "a19a83066c40bc812637774422b23ca5",
  w500Image: (imgURL: string) => `https://image.tmdb.org/t/p/w500/${imgURL}`,
  image: (imgURL: string) => `https://image.tmdb.org/t/p/original/${imgURL}`,
};

export const params = {
  api_key: apiConfig.apiKey,
};

export default apiConfig;
