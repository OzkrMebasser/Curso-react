import React from "react";

//Hooks
import useFetchData from "../hooks/useFetchData";

const PokemonAPI = props => {
  const { data } = useFetchData("https://pokeapi.co/api/v2/pokemon/ditto");
  //   console.log(respuesta.data);
  //   console.log("Desde pokemonAPI");
  console.log(data);
  return (
    <div>
      <h1>Hola desde PokemonAPI</h1>
    </div>
  );
};

export default PokemonAPI;
