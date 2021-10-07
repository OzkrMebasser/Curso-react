import { firebase, googleProvider } from "../firebase/firebase.config";
import { types } from "../types/types";

export const loginWithGoogleFirebase = () => {
  return async dispatch => {
    const { user } = await firebase.auth().signInWithPopup(googleProvider);
    const { displayName, email, uid } = user;
    dispatch(fillUserInfo({ displayName, email, uid }));
  };
};

export const fillUserInfo = payload => ({
  type: types.userInfo,
  payload
});
