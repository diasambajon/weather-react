import React from "react";
import Weather from "./Weather.js";


import "./App.css";

function App() {
  return (
    <main>
      <div className="body">
        <Weather defaultCity="New York"/>
      </div>
    </main>
  );
}

export default App;
