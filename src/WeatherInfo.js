// import react from "react";
import FormattedDate from './FormattedDate';
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo ({weatherData}) {
    console.log('weatherData', weatherData)
    return (
        
        
        <div className="WeatherInfo">
            
            <h1>{weatherData.city}</h1>
            <p className="dateTime"><FormattedDate date={weatherData.date} /></p>
            <div className="tempIconRow">
                <div className='actualTemp'>
                    <span className="temperature">
                            {Math.round(weatherData.temperature)}  
                    </span>
                    <span className="unit">°F</span>
                   
                </div>
                <div className="actualIcon"> 
                    <WeatherIcon code={weatherData.icon}  />
                     <p className="descrip text-capitalize">{weatherData.description}</p>
                </div>
            </div>
                     
                    <ul className='descList'>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                        {/* <li>Percipitation: 15%</li> */}
                        {/* this api does not offer percipitation */}
                    </ul>
             
        </div>
      
    
      
    
    );
}
