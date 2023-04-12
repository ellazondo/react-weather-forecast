import {useState} from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from 'axios';
import WeatherForecast from './WeatherForecast';

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("New York");

  function handleResponse (response) {
    
    setWeatherData({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date (response.data.dt * 1000),
      icon: response.data.weather[0].icon
    })
    setReady(true);
    
  }

  function search() {
    const apiKey = "7e51999498b98449960c3d517772a9e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    axios.get(apiUrl).then(handleResponse);
  }
  

  function handleSubmit(e) {
    e.preventDefault();
    search();
    
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  if (ready) {
  return (
    <div className="Home-wrapper">
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="searchBar form-control"
              onChange={handleCityChange}
            />
          </div>
          <div className="searchButton col-3">
            <input type="submit" value="Go" className="searchButton btn btn-primary" />
          </div>
        </div>
      </form>
      <WeatherInfo weatherData={weatherData} coordinates={weatherData.coordinates} />
      </div>
      <WeatherForecast data={weatherData} coordinates={weatherData.coordinates}  />
      </div>

  );
    } else { 
    search();
    return "loading";
  }
}
