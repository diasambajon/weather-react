import React from "react";
import axios from "axios";

export default function Weather(props) {
    function showTemperature(response) {
        alert(`The temperature in New York is ${response.data.main.temp}`);
    } 
    
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showTemperature);


    return( 
        <div className="Weather">
            <h1>Hello, World!</h1>
        </div>
    )
}