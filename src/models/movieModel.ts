export type Movie = {
  title: string;
  id: number;
  media_type?: string;
  poster_path: string;
  vote_average?: string;
  isFavorite?: boolean;
  original_title: string;
  backdrop_path: string;
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

export type Genre = {
  name: string;
};
export type Language = {
  english_name: string;
};
export type Country = {
  name: string;
};
export enum movieCategories {
  TopRated = "/top_rated",
  Trending = "/trending",
  Upcoming = "/upcoming",
}
