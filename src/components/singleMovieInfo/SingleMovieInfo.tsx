import React from "react";
import { Language } from "../../models/MovieModel";
import { Country } from "../../models/MovieModel";
import { nanoid } from "nanoid";
import { Movie } from "../../models/MovieModel";

interface Props {
  singleMovie: Movie;
}

const SingleMovieInfo: React.FC<Props> = ({ singleMovie }) => {
  return (
    <div className="movie__details">
      <table className="table__details">
        <tbody>
          <tr className="detail-row">
            <td className="detail-data">Released</td>
            <td className="detail-data">
              {singleMovie?.release_date || singleMovie?.first_air_date}
            </td>
          </tr>
          <tr className="detail-row">
            <td className="detail-data">Language</td>
            <td className="detail-data">
              {singleMovie?.spoken_languages.map((lng: Language) => {
                return (
                  <span key={nanoid()} style={{ marginRight: "5px" }}>
                    {lng.english_name}
                  </span>
                );
              })}
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
            {singleMovie?.production_countries.map((country: Country) => {
              return (
                <td key={nanoid()} className="detail-data">
                  {country.name}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleMovieInfo;
