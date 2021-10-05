import React, { createContext, useState, useReducer } from "react";

const ExampleContext = createContext();

const initialState = {
  counter: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        counter: state.counter + 1
      };

    case "REMOVE":
      return {
        counter: state.counter - 1
      };

    case "RESET":
      return {
        counter: 0
      };

    default:
      return state;
  }
};

const ExampleProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const removeCounter = () => {
    setCounter(counter - 1);
  };

  //   const data = { counter, addCounter, resetCounter, removeCounter };
  const data = { state, dispatch };

  return (
    <ExampleContext.Provider value={data}>{children}</ExampleContext.Provider>
  );
};

export { ExampleProvider };
export default ExampleContext;
