import Slider from "react-slick";
import apiConfig from "../../api/config";
import { Obj } from "../../models/movieModel";
interface Props {
  cast: [];
}

const CastSlider: React.FC<Props> = ({ cast }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 350, settings: { slidesToShow: 1 } },
      { breakpoint: 500, settings: { slidesToShow: 2 } },
      { breakpoint: 700, settings: { slidesToShow: 2 } },
      { breakpoint: 1000, settings: { slidesToShow: 3 } },
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 1800, settings: { slidesToShow: 5 } },
    ],
  };
  return (
    <Slider {...settings}>
      {cast &&
        cast.map((actor: Obj) => {
          return (
            <div key={actor.id} className="cast-wrapper">
              <div className="cast-image__wrapper flex">
                <img src={apiConfig.image(actor.profile_path)} alt="" />
              </div>
              {actor.name}
            </div>
          );
        })}
    </Slider>
  );
};
export default CastSlider;
