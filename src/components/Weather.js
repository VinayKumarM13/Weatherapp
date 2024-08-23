import React, { useEffect, useState } from 'react'
import Weathercard from './Weathercard';

// import Weathercard from './Weathercard';

const Weather = () => {



    const [searchValue, setSearchValue] = useState('Bangalore');
    const [weatherInfo, setWeatherInfo] = useState({});



    const getWeatherInfo = () => {
      // const apikey = process.env.API_KEY
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_API_KEY}`

        fetch(url).then((data) => {
            // console.log(data);
            return data.json();
        }).then((actualData) => {
            console.log(actualData);
            const { temp, humidity, pressure } = actualData.main;
            const { main: weathermood } = actualData.weather[0];
            const { name } = actualData;
            const { speed } = actualData.wind;
            const { country, sunset } = actualData.sys;


            const myNewWeather = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset
            };
            setWeatherInfo(myNewWeather);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getWeatherInfo();
    }, []);

    // let url = (api.openweathermap.org/data/2.5/weather?q=pune&appid=b62754d4a53e191e641099808b7e547c);




    return (
        <>
            <div class="weather-app">
                <div class="header">
                    <h1>Weather App</h1>
                </div>
                <div class="location">
                    <input type="text" id="location-input" placeholder="Enter location" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button id="search-button" onClick={getWeatherInfo}>Search</button>
                </div>
                <Weathercard  weatherInfo={weatherInfo}/>
            </div>
        </>
    )
}

export default Weather





/*
{
    "coord": {
      "lon": 10.99,
      "lat": 44.34
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 298.48,
      "feels_like": 298.74,
      "temp_min": 297.56,
      "temp_max": 300.05,
      "pressure": 1015,
      "humidity": 64,
      "sea_level": 1015,
      "grnd_level": 933
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.62,
      "deg": 349,
      "gust": 1.18
    },
    "rain": {
      "1h": 3.16
    },
    "clouds": {
      "all": 100
    },
    "dt": 1661870592,
    "sys": {
      "type": 2,
      "id": 2075663,
      "country": "IT",
      "sunrise": 1661834187,
      "sunset": 1661882248
    },
    "timezone": 7200,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
  }                        
  
      */