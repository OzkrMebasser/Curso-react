import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

//COMPONENTS
import Button from "./components/Button";
import Modal from "./components/Modal";
import Form from "./components/Form";
import GoogleButton from "./components/GoogleButton";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App" id="">
        <Form />
        <GoogleButton />
        <Button />
        <Modal />
      </div>
    </Provider>
  );
};

export default App;
