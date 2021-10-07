import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { modalReducer } from "../reducers/modal.Reducer";
import { userReducer } from "../reducers/user.Reducer";
import { pokemonReducer } from "../reducers/pokemon.reducer";

import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  modal: modalReducer,
  user: userReducer,
  pokemon: pokemonReducer
  //modal
  //isVisible: false,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
