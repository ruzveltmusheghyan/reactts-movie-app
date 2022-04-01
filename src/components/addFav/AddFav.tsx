import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { SingleMovie } from "../../models/movieModel";
import { movieSlice } from "../../store/reducers/MovieSlice";

interface Props {
  movie: SingleMovie;
}

const AddFav: React.FC<Props> = (movie) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [isFav, setIsFav] = useState(false);
  const favoriteMovies = useAppSelector(
    (state) => state.movieReducer.favoriteMovies
  );
  useEffect(() => {
    const isFavorite = favoriteMovies.find((fav) =>
      fav.id === Number(id) ? true : false
    );
    isFavorite ? setIsFav(true) : setIsFav(false);
  }, [favoriteMovies]);
  const handleFavorite = (movie: SingleMovie) => {
    dispatch(movieSlice.actions.addTOFavorites(movie));
  };
  return (
    <div>
      {isFav ? (
        <button onClick={() => handleFavorite(movie.movie)} className="btn">
          Remove from Favorites
        </button>
      ) : (
        <button onClick={() => handleFavorite(movie.movie)} className="btn">
          Add to Favorites
        </button>
      )}
    </div>
  );
};

export default AddFav;
