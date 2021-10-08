import { firebase, googleProvider } from "../firebase/firebase.config";
import { types } from "../types/types";

//GOOGLE

export const loginWithGoogleFirebase = () => {
  return async dispatch => {
    const { user } = await firebase.auth().signInWithPopup(googleProvider);
    const { displayName, email, uid } = user;
    dispatch(fillUserInfo({ displayName, email, uid }));
  };
};

//EMAIL & PASSWORD

export const registerWithEmail = ({
  displayName,
  email,
  password
}) => async dispatch => {
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await user.updateProfile({ displayName: displayName });

    dispatch(
      fillUserInfo({
        displayName: user.displayName,
        email: user.email,
        uid: user.uid
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const fillUserInfo = payload => ({
  type: types.userInfo,
  payload
});
