import React, { useEffect, useState } from 'react';


const Weathercard = ({ weatherInfo }) => {
  
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset
  } = weatherInfo;
  const [weatherState, setWeatherState] = useState('');
  
useEffect(()=>{
  if(weathermood){
    switch (weathermood) {
      case 'Clouds':setWeatherState('fa-solid fa-cloud')
        break;
      case 'Haze':setWeatherState('fa-solid fa-smog')
        break;
      case 'Smoke':setWeatherState('fa-solid fa-smog')
        break;
      case 'Clear':setWeatherState('fa-solid fa-sun')
        break;
      case 'Mist':setWeatherState('fa-solid fa-water')
        break;
      case 'Rain':setWeatherState('fa-solid fa-cloud-showers-heavy')
        break;
    
      default:setWeatherState('fa-solid fa-sun') 
        break;
    }
  }
},[weathermood]);
    
  // converting miliseceonds into hours

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div class="weather-info">
        <div class="weather-icon" id="weather-icon">
          <i className= {weatherState}></i>
        </div>
        <div class="weather_condition" >{temp}&deg;</div>
        <div class="weather_condition" >{weathermood}</div>
        <div class="weather_condition" >{name}, {country}</div>
        <div class="weather_condition" >{new Date().toLocaleString()}  </div>

        <div className="extra flex">
          <div className="extra_info">
            <i className='	fas fa-cloud-sun'></i>
            <p>{timeStr}PM</p>
          </div>
          <div className="extra_info">
            <i className='fa-solid fa-wind'></i>
            <p>{speed}km/h</p>
          </div>
          <div className="extra_info">
            <i className='fa-solid fa-water'></i>
            <p>{humidity}%</p>
          </div>
          <div className="extra_info">
            <i className='fa-solid fa-temperature-arrow-down'></i>
            <p>{pressure}mb</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Weathercard
