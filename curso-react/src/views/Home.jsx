import React, { useState, useContext } from "react";
import Header from "../components/Header";

//Context
import PokemonListContext from "../context/PokemonListContext";

//Componentes
import SinglePokemon from "../components/SinglePokemon";

const Home = () => {
  const { list } = useContext(PokemonListContext);

  console.log(list);

  const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "70%",
    margin: "auto",
    marginTop: 20
  };

  return (
    <div>
      <Header />
      {/* <div style={styles}>
        {list?.length > 0 &&
          list.map(pokemon => (
            <SinglePokemon
              key={pokemon.id}
              img={pokemon.img}
              name={pokemon.name}
              id={pokemon.id}
            />
          ))}
      </div> */}
    </div>
  );
};

export default Home;
