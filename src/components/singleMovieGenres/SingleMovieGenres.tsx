import { Genre } from "../../models/MovieModel";
import { Chip } from "@mui/material";
import { nanoid } from "nanoid";
interface Props {
  genres: Genre[];
}

const SingleMovieGenres: React.FC<Props> = ({ genres }) => {
  return (
    <div className="genres flex align-center">
      {genres.slice(0, 5).map((genre) => {
        return (
          <Chip
            size="small"
            label={genre?.name}
            color="primary"
            key={nanoid()}
            className="genre__name"
          />
        );
      })}
    </div>
  );
};

export default SingleMovieGenres;
