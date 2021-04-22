import React from "react";
import Form from "./Form.js";
import Weather from "./Weather.js";
import Footer from "./Footer.js";

import "./App.css";

function App() {
  return (
    <body>
      <div className="body">
        <Form />
        <Weather />
      </div>
      <Footer />
    </body>
  );
}

export default App;
