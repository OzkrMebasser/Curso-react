import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { BrowserRouter } from "react-router-dom";

//COMPONENTS
import Button from "./components/Button";
import Modal from "./components/Modal";
import Form from "./components/Form";
import GoogleButton from "./components/GoogleButton";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
