import React from "react";
import Slider from "react-slick";
import { Movie } from "../../models/MovieModel";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
interface Props {
  movies: Movie[];
}

const MoviesSlider: React.FC<Props> = ({ movies }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: movies.length > 5 ? 5 : movies.length,
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
      {movies.map((movie) => {
        return (
          <div key={nanoid()} className="cast-wrapper">
            <div className="cast-image__wrapper flex">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </div>
        );
      })}
    </Slider>
  );
};

export default MoviesSlider;
