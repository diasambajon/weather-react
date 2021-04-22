import React from "react";

import "./Form.css";

export default function Form() {
    return(
        <form className="search" id="city-form">
        <input type="text" id="enter-city"
        placeholder="type a city..."
        className="city-input" />
        <input type="submit" value="Search" className="submit" />
        <button id="current-location"><span role="img" aria-label="pinpoint empji">📍</span>
        </button>
        </form>
    )
}