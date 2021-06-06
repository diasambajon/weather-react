import React, { useState } from "react";

import "./Temperature.css";


export default function Temperature(props) {
    let [unit, setUnit] = useState("celsius");

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");

    }


    if (unit === "celsius") {

    return (
        <div>
        <span className="current-temperature" id="actual-temperature">
        <img src={props.dataIcon} alt={props.description} />
        {Math.round(props.celsius)}° 
        </span>
        <span className="temperature-units" id="units">
        <a href="/" id="celsius-link">C</a>|
        <a href="/" id="fahrenheit-link" onClick={convertToFahrenheit}>F</a>
        </span>
        </div>
        )
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32; 
        return (
            <div>
            <span className="current-temperature" id="actual-temperature">
            <img src={props.dataIcon} alt={props.description} />
            {Math.round(fahrenheit)}° 
            </span>
            <span className="temperature-units" id="units">
            <a href id="celsius-link" onClick={convertToCelsius}>C</a>|
            <a href id="fahrenheit-link" >F</a>
            </span>
            </div>
            )
    }
    }