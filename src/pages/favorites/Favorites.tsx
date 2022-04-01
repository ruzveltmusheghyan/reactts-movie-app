import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import { useAppSelector } from "../../hooks/redux";
import { useEffect, useState } from "react";
import { SingleMovie } from "../../models/movieModel";
import { spawn } from "child_process";

const Favorites = () => {
  const favoriteMovies = useAppSelector(
    (state) => state.movieReducer.favoriteMovies
  );
  const [movies, setMovies] = useState<SingleMovie[]>([]);
  useEffect(() => {
    setMovies(favoriteMovies);
  }, [favoriteMovies]);
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div>
            <div className="category-text flex justify-between">
              Favorite Movies
            </div>
            {movies.length > 0 ? (
              <Card movies={movies} />
            ) : (
              <p>No favorite movies :(</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Favorites;
