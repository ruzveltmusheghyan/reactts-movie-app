import { movieCategories, Movie } from "./MovieModel";
export type Movies = {
  results: Movie[];
  page: number;
  totalResults: number;
  category: string;
};
