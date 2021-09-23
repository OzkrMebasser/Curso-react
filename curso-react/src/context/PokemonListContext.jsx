import React, { createContext, useState } from "react";
import { pokemonList } from "../helpers/pokemonList";
//Crear el contexto
const PokemonListContext = createContext();
//Provider
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
