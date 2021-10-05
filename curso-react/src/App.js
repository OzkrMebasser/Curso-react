import React, { useContext } from "react";
import ExampleContext from "./context/ExampleContext";

//COMPONENTS

import Home from "./components/Home";

const App = () => {
  // const { counter, addCounter, removeCounter, resetCounter } = useContext(
  //   ExampleContext
  // );

  const { state, dispatch } = useContext(ExampleContext);
  return (
    <div className="App">
      <h1>Count: {state.counter}</h1>

      <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
      <button onClick={() => dispatch({ type: "REMOVE" })}>Remove</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default App;
