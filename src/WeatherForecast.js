// import WeatherIconForecast from "./WeatherIconForecast";
import WeatherIcon from "./WeatherIcon";
import {useState, useEffect} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast (props) {
    console.log('propsinforecast', props.data.coordinates.lon)
      //forecast
  const [forecast, setForecast] = useState({});
  const [loaded, setLoaded] = useState(false);
    let apiKey = "1a2b7258ebd456c01aef9175dfe8b709";
        let lon = props.data.coordinates.lon;
        let lat = props.data.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

        
useEffect(() => {
  axios.get(apiUrl).then((response) => {
    setForecast(response.data.list);
    setLoaded(true);
  });
}, [apiUrl])

console.log('andrew', forecast)

// console.log('weathericon2', forecast[1].weather[1].icon)

  
if (loaded) {
    return (
        <div  className="">
            <div  className="Forecast">
{/* first */}
                <div  className="">
                    <div className="firstDay">
                        <WeatherForecastDay dateString={forecast[0].dt_txt} /> 

                        <span  className="temp-range">
                        <span  className="">{Math.round(forecast[0].main.temp_min)} </span>
                        <span  className="">
                            | {Math.round(forecast[0].main.temp_max)}°C </span>
                        </span>

                    </div>
                    <div   className="forecastIcon">
                        <WeatherIcon code={forecast[0].weather[0].icon} />
                    </div>

                </div>
{/* second */}
      <div  className="">
        <div className="">
       <span  className=" "><WeatherForecastDay dateString={forecast[8].dt_txt} /></span>
         <span  className="">{Math.round(forecast[5].main.temp_min)} </span>
        <span  className="">
        | {Math.round(forecast[8].main.temp_max)}°C </span>
        </div>
      <div   className="forecastIcon">
      <WeatherIcon code={forecast[8].weather[0].icon} />
      
      </div>
        
      </div>
{/* third */}
      <div  className="">
        <div className="">
        <span  className=" "><WeatherForecastDay dateString={forecast[16].dt_txt} /></span>
        <span  className="">{Math.round(forecast[13].main.temp_min)} </span>
        <span  className="">
        | {Math.round(forecast[16].main.temp_max)}°C </span>
        </div>
        <div className="forecastIcon">
            <WeatherIcon code={forecast[16].weather[0].icon} />
        </div>
      </div>

{/* fourth */}
    <div  className="">
        <div className="">
        <span  className=" "><WeatherForecastDay dateString={forecast[24].dt_txt} /></span>
               <span  className="">{Math.round(forecast[21].main.temp_min)} </span>
        <span  className="">
        | {Math.round(forecast[24].main.temp_max)}°C </span>
        <div className="forecastIcon">
            <WeatherIcon code={forecast[24].weather[0].icon} />
        </div>
 
        </div>
      </div>

 {/* fifth */}

    <div  className="">
        <div className="">
        <span  className=" "><WeatherForecastDay dateString={forecast[32].dt_txt} /></span>
        <span  className="">{Math.round(forecast[29].main.temp_min)} </span>
        <span  className="">
        | {Math.round(forecast[32].main.temp_max)}°C </span>
        </div>
        <div className="forecastIcon">
            <WeatherIcon code={forecast[32].weather[0].icon} />
        </div>
        
        
        
      </div>

    </div>

  </div>

    );
} else { <h1>loading...</h1>}
}