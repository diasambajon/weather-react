import React from "react";

import "./Temperature.css";

export default function Temperature() {
    return(
        <h1>
      <span className="current-temperature" id="actual-temperature">
        88°
      </span>
      <span className="temperature-units" id="units">
        <button id="fahrenheit-link">F</button>|
        <button id="celsius-link">C</button>
      </span>
    </h1>
    )
}