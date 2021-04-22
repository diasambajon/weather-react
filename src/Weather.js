import React from "react";
import Temperature from "./Temperature.js";
import Description from "./Description.js";

import "./Weather.css";

export default function Weather() {
    return(
        <div class="container">
        <div className="row">
        <div className="col">
        <Temperature />
        </div>
        <div className="col">
        <Description />
        </div>
        </div>
        </div>
    )
}