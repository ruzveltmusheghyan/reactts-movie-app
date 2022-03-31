import React, { useEffect, useState } from "react";

import Header from "../../components/header/Header";
const Movie = () => {
  return (
    <>
      <div className="background_poster"></div>
      <Header />
      <div className="container">
        <div className="details__container">
          <div className="details__poster">
            <img alt="" />
          </div>
          <div className="details__other flex">
            <p className="movie__title">qwe</p>
            <div className="genres">
              <span className="genre__name">qwe</span>
            </div>
            <div className="overview">
              <span className="overview__text">overview</span>
            </div>
            <div className="movie__details">
              <table className="table__details">
                <tbody>
                  <tr className="detail-row">
                    <td className="detail-data">Released</td>
                    <td className="detail-data">zcx</td>
                  </tr>
                  <tr className="detail-row">
                    <td className="detail-data">Language</td>
                    <td className="detail-data">
                      <span style={{ marginRight: "5px" }}>lng</span>
                    </td>
                  </tr>
                  <tr className="detail-row">
                    <td className="detail-data">Runtime</td>
                    <td className="detail-data">123h</td>
                  </tr>
                  <tr className="detail-row">
                    <td className="detail-data">Status</td>
                    <td className="detail-data">stat</td>
                  </tr>
                  <tr className="detail-row">
                    <td className="detail-data">Country </td>

                    <td className="detail-data">cntry</td>
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
  );
};

export default Movie;
