import axios from 'axios';
import WeatherContent from './WeatherContent';
import React, { useEffect, useState } from 'react';

function MainWeather() {
    
    const[city,setCity] = useState('');
    const[weatherData,setWeatherData] = useState([{}]);
    const[timersData,setTimersData] = useState([]);
    
    const API_key   = 'c79eb72da5f603d2d6098ca24fb7ce63'
    // fetching data
    const fetchData =  async(search="pune") =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}`;
       axios.get(url).then((res)=>{
           console.log('response',res)
           setWeatherData(res.data)
       }).catch((err)=>{
           console.log('err',err);
       });
       setCity(" ");
    }


    // useEffect(()=>{
    //     fetchData(city);
    // },[city])

    // searching city
    const inputHandle = (e) =>{
        clearTimeout(timersData);    // debouncing
        let inputData = e.target.value;
        let timer =  setTimeout(() =>fetchData(inputData) , 1000);
        setTimersData(timer);
        setCity(e.target.value);
        // console.log(inputData);
    }


  return (
   <>
        <div className='container'>
      <input type="text" 
      placeholder='Search...'
      onChange={inputHandle}
      value={city}
    
       />
    </div>
   
    <WeatherContent
    windGust={weatherData.wind.gust}
    windSpeed={weatherData.wind.speed}
    visibility={weatherData.visibility}
    climat ={weatherData.weather[0].main}
    description={weatherData.weather[0].description}
    max_temp={((weatherData.main.temp_min)-273.15).toFixed(0)}
    name={weatherData.name}
     temp={((weatherData.main.temp)-273.15).toFixed(0)}

      />
   </>
  )
}

export default MainWeather