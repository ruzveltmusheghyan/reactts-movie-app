import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Movie } from "../../models/movieModel";
interface Props {
  media: Movie[];
  fromPath: string;
}

const Card: React.FC<Props> = ({ media, fromPath }) => {
  return (
    <div className="card-wrapper flex">
      {media?.map((movie: Movie) => {
        return (
          <div key={movie.id} className="card flex align-center">
            <div>
              <a href={`${fromPath !== "tv" ? "/movie" : "tv"}/${movie.id}`}>
                <div className="card-image-wrapper">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="no image found"
                  />
                  <div className="watchlater">
                    <AiFillHeart size={30} />
                  </div>
                </div>
              </a>

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
