import { types } from "../types/types";

export const handleError = payload => {
  return {
    type: types.responseError,
    payload
  };
};
