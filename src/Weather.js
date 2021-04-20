import React from "react";
import Temperature from "./Temperature.js";
import Description from "./Description.js";

import "./Weather.css";
import "./Description.css";
import "./Temperature.css";

export default function Weather() {
  return (
    <div className="row">
      <div className="column">
        <Temperature />
      </div>
      <div className="column">
        <Description />
      </div>
    </div>
  );
}