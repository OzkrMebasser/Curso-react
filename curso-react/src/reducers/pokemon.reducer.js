import { types } from "../types/types";

const initialState = {
  area: ""
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.pokemonArea:
      return {
        area: action.payload.name
      };

    default:
      return state;
  }
};
