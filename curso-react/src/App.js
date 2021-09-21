import React from "react";

import "./App.css";

//COMPONENTS
import Header from "./components/Header";

//Images
import Section from "./assets/img/section.jpg";
import Position from "./assets/img/position.jpg";

const App = () => {
  return (
    <div className="App h-screen ">
      <header className="px-5  md:px-40 py-5 flex justify-between items-center fixed left-0 w-full flex-col md:flex-row">
        <h4 className="text-3xl text-white w-full md:w-auto text-center md:text-left">
          Daniel Meza
        </h4>

        <ul className="flex justify-between items center w-full md:w-5/12	mt-5 md:mt-0">
          <li>
            <p className="text-gold">Home</p>
          </li>
          <li>
            <p className="text-white">About</p>
          </li>
          <li>
            <p className="text-white">Services</p>
          </li>
          <li>
            <p className="text-white">Portfolio</p>
          </li>
          <li>
            <p className="text-white">Blog</p>
          </li>
          <li>
            <p className="text-white">Contact</p>
          </li>
        </ul>
      </header>

      <section className="h-screen flex justify-center items-center flex-col">
        <h4 className="text-4xl text-white font-light	">Daniel Meza</h4>
        <h1 className=" text-4xl md:text-5xl text-white mt-5 text-center">
          Desarrollador <span className="text-gold "> Web Full Stack</span>
        </h1>
      </section>
    </div>
  );
};

export default App;
