import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import Temperature from "./Temperature.js";


import "./Weather.css";
import "./Form.css";
import "./Temperature.css";
import "./Description.css"; 
import "./Footer.css";

export default function Weather(props) {
    let [weatherData, setWeatherData] = useState({ ready: false });
    let [city, setCity] = useState(props.defaultCity);
    


    function showTemperature(response) {
    console.log(response);
     
     setWeatherData({
     ready: true,
     city: response.data.name,
     temperature: response.data.main.temp, 
     description: response.data.weather[0].description,
     iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
     humidity: response.data.main.humidity,
     wind: response.data.wind.speed,
     date: response.data.dt * 1000 });
    
    }
    function search() {
        let apiKey = "ec8e69b1285b9aa207ab4f4d6f6be3e0";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(showTemperature);
    }

    function handleSubmit(event) {
        event.preventDefault();

        search();
    }

    function updateCity(event) {
        event.preventDefault();
        setCity(event.target.value);
    }
    
    if (weatherData.ready) {
    return(
    <div className="container">
    <form className="search" id="city-form" onSubmit={handleSubmit}>
        <input type="text" id="enter-city"
        placeholder="type a city..."
        className="city-input"  onChange={updateCity}/>
        <input type="submit" value="Search" className="submit"  />
    </form>
    <div className="row">
    <div className="col">
        <h1>
        <Temperature celsius={weatherData.temperature} dataIcon={weatherData.iconUrl} description={weatherData.description} />
        </h1>
    </div>
    <div className="col">
        <h2>{weatherData.city}</h2>
        <h3>{weatherData.description}</h3>
        <h4>
            <FormattedDate date={new Date(weatherData.date)} />
        </h4>
        <div className="description">
        <p id="humidity">Humidity: {weatherData.humidity}%</p>
        <p id="wind">Wind: {weatherData.wind}mph</p>
        </div>
    </div>
    </div>
        <footer className="footer">
        <a href="https://github.com/diasambajon/weather-react" target="_parent" rel="noopener">
        Open source code 
        </a>
        by Dianne Sambajon
        </footer>
    </div>
    )
    } else {
        search();
        return(`Loading...`);
    }
    



}