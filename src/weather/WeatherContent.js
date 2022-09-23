import React from "react";

function WeatherContent({weatherData,othersData}) {
 
  let data = new Date().toLocaleString("en-Gb", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="weather-card one">
              <div className="top">
                <div className="wrapper">
                  <div className="mynav">
                    <a href="#">
                      <span className="lnr lnr-chevron-left"></span>
                    </a>
                    <a href="#">
                      <span className="lnr lnr-cog"></span>
                    </a>
                  </div>
                  <h1 className="heading">{othersData.name}</h1>
                  <h3 className="location">{othersData.name}</h3>
                  <h4 className="data">{data}</h4>
                  <p className="temp">
                    <span className="temp-value">{weatherData.temp}</span>
                    <span className="deg">0</span>
                    <a href="javascript:;">
                      <span className="temp-type">C</span>
                    </a>
                  </p>
                  <div className="wind">
                    <p className="speed">
                      Speed <span className="speed">{}</span>/
                      <span className="gust">Gust</span>{" "}
                      <span className="gust">{}</span>{" "}
                    </p>
                    <p className="description">{}</p>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="wrapper">
                  <ul className="forecast">
                    <a href="javascript:;">
                      <span className="lnr lnr-chevron-up go-up">{}</span>
                    </a>
                    <li className="active">
                      <span className="date">visibility</span>{" "}
                      {othersData.visibility}
                      <span className="lnr lnr-sun condition">
                        <span className="temp">
                          {weatherData.temp_max}
                          <span className="deg">0</span>
                          <span className="temp-type">C</span>
                        </span>
                      </span>
                    </li>
                    <li>
                      Sea Level-<span className="date">{weatherData.sea_level}</span>
                      <span className="lnr lnr-cloud condition">
                        <span className="temp">
                          {}
                          <span className="deg">0</span>
                          <span className="temp-type">C</span>
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherContent;
