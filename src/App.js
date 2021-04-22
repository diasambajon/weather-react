import React from "react";
import Form from "./Form.js";
import Weather from "./Weather.js";
import Footer from "./Footer.js";

import "./App.css";

function App() {
  return (
    <main>
      <div className="body">
        <Form />
        <Weather />
      </div>
      <Footer />
    </main>
  );
}

export default App;
