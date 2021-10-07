import { types } from "../types/types";

export const fillUserInfo = payload => ({
  type: types.userInfo,
  payload
});
