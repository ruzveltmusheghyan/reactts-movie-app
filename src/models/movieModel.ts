export type Movie = {
  title: string;
  id: number;
  media_type?: string;
  poster_path?: string;
  vote_average?: string;
  isFavorite?: boolean;
};

export type Obj = {
  [key: string]: any;
};

export type SingleMovie = {
  id: number;
  title: string;
  original_title: string;
  backdrop_path: string;
  poster_path: string;
  name: string;
  genres: [];
  release_date: string;
  first_air_date: string;
  spoken_languages: [];
  runtime: number;
  episode_run_time: string;
  status: string;
  production_countries: [];
  overview: string;
};
