import React, { useContext } from "react";
import { ExampleProvider } from "./context/ExampleContext";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ExampleProvider>
    <App />
  </ExampleProvider>,
  document.getElementById("root")
);
