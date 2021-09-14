import React, { useRef, useEffect, useState } from "react";

//Styles
import "./App.css";

const App = () => {
  const [background, setBackground] = useState("App");

  const exampleRef = useRef();
  const handleRef = () => {
    console.log(exampleRef.current.offsetTop);
    console.log(window.scrollY);
  };

  const handleScroll = () => {
    if (window.scrollY > exampleRef.current.offsetTop) {
      setBackground("App2");
    } else {
      setBackground("App");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // return () => {
    //   cleanup;
    // };
  }, []);

  return (
    <div className={background}>
      <h1 ref={exampleRef}>Si funciona :D</h1>
      <button onClick={handleRef}>Click</button>
    </div>
  );
};

export default App;
