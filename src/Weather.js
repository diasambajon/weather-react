import React, { useState } from "react";
import axios from "axios";


import "./Weather.css";
import "./Form.css";
import "./Temperature.css";
import "./Description.css"; 

export default function Weather() {
    let [city, setCity] = useState("");
    let [temperature, setTemperature] = useState("");
    let [description, setDescription] = useState("");
    let [humidity, setHumidity] = useState("");
    let [wind, setWind] = useState("");

    function showTemperature(response) {
     setTemperature(response.data.main.temp);
     setDescription(response.data.weather[0].description);
     setHumidity(response.data.main.humidity);
     setWind(response.data.wind.speed);
    
    }

    function showForecast(event) {
        event.preventDefault();

        let apiKey = "ec8e69b1285b9aa207ab4f4d6f6be3e0";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(showTemperature);

    }

    function updateCity(event) {
        event.preventDefault();
        setCity(event.target.value);
    }

    return(
    <div className="container">
    <form className="search" id="city-form" onSubmit={showForecast}>
        <input type="text" id="enter-city"
        placeholder="type a city..."
        className="city-input"  onChange={updateCity}/>
        <input type="submit" value="Search" className="submit"  />
        <button id="current-location"><span role="img" aria-label="pinpoint empji">📍</span>
        </button>
    </form>
    <div className="row">
    <div className="col">
        <h1>
        <span className="current-temperature" id="actual-temperature">
        {Math.round(temperature)}
        </span>
        <span className="temperature-units" id="units">
        <button id="fahrenheit-link">C</button>|
        <button id="celsius-link">F</button>
        </span>
        </h1>
    </div>
    <div className="col">
        <h2>{city}</h2>
        <h3>{description}</h3>
        <h4>Monday 9:00</h4>
        <div className="description">
        <p id="humidity">Humidity: {humidity}%</p>
        <p id="wind">Wind: {wind}mph</p>
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
}