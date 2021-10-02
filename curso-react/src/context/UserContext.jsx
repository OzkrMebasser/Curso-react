import React, { createContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  user: {},
  wishList: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        user: action.payload
      };

    case "ADD_TO_WISH_LIST":
      return {
        ...state,
        wishList: [...state.wishList, action.payload]
      };

    case "REMOVE_TO_WISH_LIST":
      return {
        ...state,
        wishList: state.wishList.filter(user => user.id !== action.payload.id)
      };

    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
