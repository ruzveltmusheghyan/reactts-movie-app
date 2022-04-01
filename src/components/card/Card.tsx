import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Movie } from "../../models/movieModel";
interface Props {
  movies: Movie[];
  fromPath?: string;
}

const handleFavorite = (movie: Movie) => {};

const Card: React.FC<Props> = ({ movies, fromPath }) => {
  return (
    <div className="card-wrapper flex">
      {movies?.map((movie: Movie) => {
        return (
          <div key={movie.id} className="card flex align-center">
            <div>
              <div className="card-image-wrapper">
                <a href={`${fromPath !== "tv" ? "/movie" : "tv"}/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="no image found"
                  />
                </a>
              </div>

              <a className="movie__title">
                <p>{movie?.title}</p>
              </a>
              <span className="average__vote">{movie?.vote_average}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
