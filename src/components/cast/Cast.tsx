// Import Swiper React components
// Import Swiper styles
import apiConfig from "../../api/config";
import { Obj } from "../../models/movieModel";

interface Props {
  cast: [];
}

const Cast: React.FC<Props> = ({ cast }) => {
  return (
    <div className="container flex">
      {cast &&
        cast.slice(0, 5).map((actor: Obj) => {
          return (
            <div key={actor.id} className="cast-wrapper">
              <div className="cast-image__wrapper flex">
                <img src={apiConfig.image(actor.profile_path)} alt="" />
              </div>
              {actor.name}
            </div>
          );
        })}
    </div>
  );
};
export default Cast;
