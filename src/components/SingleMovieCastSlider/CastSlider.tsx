import { nanoid } from "nanoid";
import Slider from "react-slick";
import apiConfig from "../../api/config";
import { Actor } from "../../models/CastModel";
interface Props {
  cast: Actor[];
}

const CastSlider: React.FC<Props> = ({ cast }) => {
  const filterByImg = cast.filter((actor: Actor) => actor.profile_path);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: filterByImg.length > 5 ? 5 : filterByImg.length,
    slidesToScroll: 2,
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
        filterByImg.map((actor: Actor) => {
          return (
            <div key={nanoid()} className="cast-wrapper">
              <a
                target="_blank"
                href={`http://google.com/search?q=${actor.name}`}
              >
                <div className="cast-image__wrapper flex">
                  <img src={apiConfig.image(actor.profile_path)} alt="" />
                </div>
                {actor.name}
              </a>
            </div>
          );
        })}
    </Slider>
  );
};
export default CastSlider;
