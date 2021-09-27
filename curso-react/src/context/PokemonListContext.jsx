import React, { createContext, useState } from "react";
import { pokemonList } from "../helpers/pokemonList";

//Paso 1
const PokemonListContext = createContext();

// Paso 2

const PokemonListProvider = ({ children }) => {
  const [list, setList] = useState(pokemonList);

  const data = { list };

  return (
    <PokemonListContext.Provider value={data}>
      {children}
    </PokemonListContext.Provider>
  );
};
export { PokemonListProvider };
export default PokemonListContext;
