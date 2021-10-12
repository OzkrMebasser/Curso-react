import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { modalReducer } from "../reducers/modal.Reducer";
import { userReducer } from "../reducers/user.Reducer";
import { pokemonReducer } from "../reducers/pokemon.reducer";
import { errorReducer } from "../reducers/error.reducer";

import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  modal: modalReducer, // {isVisible: false}
  user: userReducer, // {displayName: "",email: "",uid: ""};
  pokemon: pokemonReducer,
  errors: errorReducer
  //modal
  //isVisible: false,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
