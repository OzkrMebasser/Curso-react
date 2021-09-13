import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//Styles
import "./styles/main.scss";

const App = () => {
  return (
    <div className="App">
      <h1>Título</h1>
      <p>Párrafo estilizado con sass</p>
      <div className="container">
        <h4>H4 dentro de otro div</h4>
      </div>
    </div>
  );
};

export default App;
