import React from "react";

import "./Description.css";

export default function Description() {
  return (
    <div>
      <h2>Los Angeles</h2>
      <h3>Clear Sky</h3>
      <h4>Monday 9:00</h4>
      <div className="description">
        <p id="humidity">Humidity: 55%</p>
        <p id="wind">Wind: 5mph</p>
      </div>
    </div>
  );
}