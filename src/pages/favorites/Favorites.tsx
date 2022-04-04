import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import { SingleMovie } from "../../models/movieModel";
import { useSelector } from "react-redux";
import { getFavoriteMovies } from "../../store/reducers/MovieSlice";

const Favorites: React.FC = () => {
  const favoriteMovies = useSelector(getFavoriteMovies);
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
