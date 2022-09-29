import axios from "axios";
import WeatherContent from "./WeatherContent";
import React, { useEffect, useState } from "react";

function MainWeather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [timersData, setTimersData] = useState([]);
  const [othersData, setOthersData] = useState([]);

  const API_key = "c79eb72da5f603d2d6098ca24fb7ce63";

  const fetchData = async (search = "pune") => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c79eb72da5f603d2d6098ca24fb7ce63`;
    await axios
      .get(url)
      .then((res) => {
        //console.log(res.data);
        setWeatherData(res.data.main);
        setOthersData(res.data);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
    setCity(" ");
  };

  console.log(othersData);

  useEffect(() => {
    setTimeout(() => {
      fetchData(city);
    }, 1000);
  }, []);

  // searching city
  const inputHandle = (e) => {
    clearTimeout(timersData); // debouncing
    let inputData = e.target.value;
    let timer = setTimeout(() => fetchData(inputData), 1000);
    setTimersData(timer);
    setCity(e.target.value);
    // console.log(inputData);
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Search..."
          onChange={inputHandle}
          value={city}
        />
      </div>

      <WeatherContent weatherData={weatherData} othersData={othersData} />
    </>
  );
}

export default MainWeather;
