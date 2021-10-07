import { types } from "../types/types";

const initialState = {
  isVisible: false
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.showModal:
      return {
        isVisible: !state.isVisible
      };

    case types.hideModal:
      return {};

    default:
      return state;
  }
};
