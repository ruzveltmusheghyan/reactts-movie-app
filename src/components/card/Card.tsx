import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Movie } from "../../models/movieModel";
interface Props {
  media?: Movie[];
}

const Card: React.FC<Props> = ({ media }) => {
  return (
    <div className="card-wrapper flex">
      {media?.map((movie: Movie) => {
        return (
          <div key={movie.id} className="card flex align-center">
            <div>
              <a>
                <div className="card-image-wrapper">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="no image found"
                  />
                </div>
              </a>

              <a className="movie__title">
                <p>{movie?.title}</p>
              </a>
              <div className="watchlater">
                <AiFillHeart size={30} style={{ color: "#ffcb74" }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
