import { Movie } from "./movieModel";
import { movieCategories } from "./movieModel";
export type Movies = {
  results: Movie[];
  page: number;
  totalResults: number;
  category: string;
};
