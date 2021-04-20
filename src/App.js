import './App.css';
import Form from "./Form.js";
import Weather from "./Weather.js";
import Footer from "./Footer.js"; 

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
