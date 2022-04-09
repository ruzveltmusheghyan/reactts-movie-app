import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Movie } from "../../models/MovieModel";
interface Props {
  movies: Movie[];
  fromPath?: string;
}

const Card: React.FC<Props> = ({ movies, fromPath }) => {
  return (
    <div className="card-wrapper flex">
      {movies?.length > 0 ? (
        movies?.map((movie: Movie) => {
          return (
            <div key={movie.id} className="card flex align-center">
              <div>
                <div className="card-image-wrapper">
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt="no image found"
                    />
                  </Link>
                </div>

                <Link to={`/movie/${movie.id}`} className="movie__title">
                  <p>{movie?.title}</p>
                </Link>
                <span className="average__vote">{movie?.vote_average}</span>
              </div>
            </div>
          );
        })
      ) : (
        <p>No results</p>
      )}
    </div>
  );
};

export default Card;
