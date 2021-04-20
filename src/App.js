import './App.css';
import Form from "./Form.js";
import Weather from "./Weather.js";
import Footer from "./Footer.js"; 

import "./App.css";
import "./Form.css";
import "./Footer.css";
import "./Weather.css";
import "./Description.css";
import "./Temperature.css";

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
