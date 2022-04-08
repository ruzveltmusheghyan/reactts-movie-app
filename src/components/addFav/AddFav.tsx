import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Movie } from "../../models/movieModel";
import { FaHeartBroken, FaHeart } from "react-icons/fa";
import {
  addToFavorites,
  getFavoriteMovies,
} from "../../store/reducers/MovieSlice";

interface Props {
  movie: Movie;
}

const AddFav: React.FC<Props> = (movie) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(getFavoriteMovies);
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    const isFavorite = favoriteMovies.find((fav) =>
      fav.id === Number(id) ? true : false
    );
    isFavorite ? setIsFav(true) : setIsFav(false);
  }, [favoriteMovies]);
  const handleFavorite = (movie: Movie) => {
    dispatch(addToFavorites(movie));
  };
  return (
    <div>
      {isFav ? (
        <Button
          onClick={() => handleFavorite(movie.movie)}
          endIcon={<FaHeartBroken />}
          color="error"
          variant="contained"
          className="btn"
        >
          Remove from Favorites
        </Button>
      ) : (
        <Button
          onClick={() => handleFavorite(movie.movie)}
          color="primary"
          endIcon={<FaHeart />}
          variant="outlined"
          className="btn"
        >
          Add to Favorites
        </Button>
      )}
    </div>
  );
};

export default AddFav;
