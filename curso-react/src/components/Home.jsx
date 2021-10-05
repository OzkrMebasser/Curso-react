import React, { useContext } from "react";
import ExampleContext from "../context/ExampleContext";

const Home = () => {
  const data = useContext(ExampleContext);

  console.log(data);
  return (
    <div className="App">
      <h1>Count: {}</h1>

      {/* <button onClick={addCounter}>Add</button>
        <button onClick={removeCounter}>Remove</button>
        <button onClick={resetCounter}>Reset</button> */}
    </div>
  );
};

export default Home;
