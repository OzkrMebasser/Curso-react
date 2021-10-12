import { types } from "../types/types";

const initialState = {
  status: false,
  message: ""
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.responseError:
      return {
        status: action.payload.status,
        message: action.payload.message
      };

    default:
      return state;
  }
};
