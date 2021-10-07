import { types } from "../types/types";

// export const loginWithGoogleFirebase = () => {
//   return async dispatch => {
//     const { user } = await firebase.auth().signInWithPopup(googleProvider);
//     const { displayName, email, uid } = user;
//     dispatch(fillUserInfo({ displayName, email, uid }));
//   };
// };

export const getPokemonInfo = () => async dispatch => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const { location_area_encounters } = await response.json();
  dispatch(getLocationArea(location_area_encounters));
};

export const getLocationArea = API => async dispatch => {
  const response = await fetch(API);
  const result = await response.json();
  dispatch(fillPokemonInfo(result[0].location_area));
};

export const fillPokemonInfo = payload => ({
  type: types.pokemonArea,
  payload
});
