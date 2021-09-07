import React, { useState, useEffect } from "react";
//Hooks
import useFetchData from "./hooks/useFetchData";
//Styles
import "./App.css";

//COMPONENTS
import SingleCharacter from "./components/SingleCharacter";
import PokemonAPI from "./components/PokemonAPI";

const App = () => {
  //Traemos el custom hook :D
  const { data } = useFetchData("https://rickandmortyapi.com/api/character");
  console.log("Desde app");
  console.log(data);

  return (
    <div className="App">
      <PokemonAPI />
      <section className="characters-container">
        {/* {characters.map(character => (
          <SingleCharacter
            name={character.name}
            avatar={character.image}
            key={character.id}
          />
        ))} */}
      </section>
    </div>
  );
};

export default App;
