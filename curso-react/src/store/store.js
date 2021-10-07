import { createStore, combineReducers } from "redux";
import { modalReducer } from "../reducers/modal.Reducer";
import { userReducer } from "../reducers/user.Reducer";

const reducers = combineReducers({
  modal: modalReducer,
  user: userReducer
  //modal
  //isVisible: false,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
