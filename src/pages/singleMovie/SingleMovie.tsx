import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/header/Header";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Obj } from "../../models/movieModel";
import { fetchSingleMovie } from "../../store/reducers/ActionCreators";
import apiConfig from "../../api/config";
const Movie = () => {
  const { category, id } = useParams();
  const dispatch = useAppDispatch();
  const [singleMovie, setSingleMovie] = useState<Obj>({});
  const movie: Obj = useAppSelector((state) => state.movieReducer.singleMovie);
  useEffect(() => {
    console.log("qwe");
    if (category && id) {
      dispatch(fetchSingleMovie(category, id));
    }
  }, []);
  useEffect(() => {
    setSingleMovie(movie);
  }, [movie]);
  return (
    <>
      {Object.keys(singleMovie).length !== 0 ? (
        <>
          <div
            className="background_poster"
            style={{
              backgroundImage: `url(${apiConfig.image(
                singleMovie?.backdrop_path || singleMovie?.poster_path
              )})`,
            }}
          ></div>
          <Header />
          <div className="container">
            <div className="details__container">
              <div className="details__poster">
                <img
                  src={apiConfig.w500Image(singleMovie.poster_path)}
                  alt=""
                />
              </div>
              <div className="details__other flex">
                <p className="movie__title">
                  {singleMovie?.title ||
                    singleMovie?.original_title ||
                    singleMovie?.name}
                </p>
                <div className="genres">
                  {singleMovie?.genres
                    .slice(0, 5)
                    .map((genre: Obj, i: number) => {
                      return (
                        <span key={i} className="genre__name">
                          {genre.name}
                        </span>
                      );
                    })}
                </div>
                <div className="overview">
                  <span className="overview__text">{singleMovie.overview}</span>
                </div>
                <div className="movie__details">
                  <table className="table__details">
                    <tbody>
                      <tr className="detail-row">
                        <td className="detail-data">Released</td>
                        <td className="detail-data">
                          {singleMovie.release_date ||
                            singleMovie.first_air_date}
                        </td>
                      </tr>
                      <tr className="detail-row">
                        <td className="detail-data">Language</td>
                        <td className="detail-data">
                          {singleMovie.spoken_languages.map(
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
                        <td className="detail-data">{singleMovie.status}</td>
                      </tr>
                      <tr className="detail-row">
                        <td className="detail-data">Country </td>
                        {singleMovie.production_countries.map(
                          (country: Obj, i: number) => {
                            return (
                              <td key={i} className="detail-data">
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
            <div className="media__cast">
              <h1>Actors</h1>
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
