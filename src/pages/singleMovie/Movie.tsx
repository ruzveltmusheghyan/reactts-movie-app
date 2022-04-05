import React, { useEffect } from "react";
import { useParams } from "react-router";
import Header from "../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { Obj } from "../../models/movieModel";
import {
  fetchMovieCast,
  fetchSingleMovie,
} from "../../store/reducers/ActionCreators";
import apiConfig from "../../api/config";
import CastSlider from "../../components/cast/Cast";
import AddFav from "../../components/addFav/AddFav";
import { useNavigate } from "react-router";
import {
  getCast,
  getSingleMovie,
  isError,
} from "../../store/reducers/MovieSlice";
import { nanoid } from "nanoid";
import { Chip } from "@mui/material";
const Movie: React.FC = () => {
  const { category, id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const singleMovie = useSelector(getSingleMovie);
  const cast = useSelector(getCast);
  const errorFetching = useSelector(isError);
  useEffect(() => {
    if (category === "movie" && id) {
      dispatch(fetchSingleMovie(category, id));
      dispatch(fetchMovieCast(id));
    } else {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    if (errorFetching) navigate("/");
  }, [errorFetching]);
  return (
    <>
      {singleMovie ? (
        <>
          <div
            className="background_poster"
            style={{
              backgroundImage: `url(${apiConfig?.image(
                singleMovie?.backdrop_path || singleMovie?.poster_path
              )})`,
            }}
          ></div>
          <Header />
          <div className="container">
            <div className="details__container">
              <div className="details__poster">
                <img
                  src={apiConfig?.w500Image(singleMovie.poster_path)}
                  alt=""
                />
              </div>
              <div className="details__other flex">
                <p className="movie__title">
                  {singleMovie?.title ||
                    singleMovie?.original_title ||
                    singleMovie?.name}
                </p>
                <div className="genres flex align-center">
                  {singleMovie?.genres
                    .slice(0, 5)
                    .map((genre: Obj, i: number) => {
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
                <AddFav movie={singleMovie} />
                <div className="overview">
                  <span className="overview__text">{singleMovie.overview}</span>
                </div>
                <div className="movie__details">
                  <table className="table__details">
                    <tbody>
                      <tr className="detail-row">
                        <td className="detail-data">Released</td>
                        <td className="detail-data">
                          {singleMovie?.release_date ||
                            singleMovie?.first_air_date}
                        </td>
                      </tr>
                      <tr className="detail-row">
                        <td className="detail-data">Language</td>
                        <td className="detail-data">
                          {singleMovie?.spoken_languages.map(
                            (lng: Obj, i: number) => {
                              return (
                                <span key={i} style={{ marginRight: "5px" }}>
                                  {lng.english_name}
                                </span>
                              );
                            }
                          )}
                        </td>
                      </tr>
                      <tr className="detail-row">
                        <td className="detail-data">Runtime</td>
                        <td className="detail-data">
                          {singleMovie?.runtime && singleMovie.runtime !== 0
                            ? `${Math.floor(singleMovie.runtime / 60)}h ${
                                singleMovie.runtime % 60
                              }m`
                            : singleMovie.episode_run_time
                            ? `${singleMovie.episode_run_time[0]}`
                            : "Upcoming"}
                        </td>
                      </tr>
                      <tr className="detail-row">
                        <td className="detail-data">Status</td>
                        <td className="detail-data">{singleMovie?.status}</td>
                      </tr>
                      <tr className="detail-row">
                        <td className="detail-data">Country </td>
                        {singleMovie?.production_countries.map(
                          (country: Obj) => {
                            return (
                              <td key={nanoid()} className="detail-data">
                                {country.name}
                              </td>
                            );
                          }
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="container">
              <h1>Cast</h1>
              <div className="media__cast ">
                <CastSlider cast={cast} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Movie;
