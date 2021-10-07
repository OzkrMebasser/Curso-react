import React from "react";
import { useDispatch } from "react-redux";
//Actions
import { showModal } from "../actions/modal.actions";
import { getPokemonInfo } from "../actions/pokemon.actions";

const Button = () => {
  const dispatch = useDispatch();

  const handleShowPokemon = () => {
    // dispatch(showModal());
    dispatch(getPokemonInfo());
  };
  return <button onClick={handleShowPokemon}>Pokemon info</button>;
};

export default Button;
