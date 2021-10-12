import { types } from "../types/types";

const initialState = {
  displayName: "",
  email: "",
  uid: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userInfo:
      return {
        displayName: action.payload.displayName,
        email: action.payload.email,
        uid: action.payload.uid
      };

    default:
      return state;
  }
};
