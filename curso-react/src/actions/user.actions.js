import { firebase, googleProvider } from "../firebase/firebase.config";
import { types } from "../types/types";
//Actions externas
import { handleError } from "./error.actions";

//GOOGLE
export const loginWithGoogleFirebase = () => {
  return async dispatch => {
    try {
      const { user } = await firebase.auth().signInWithPopup(googleProvider);
      const { displayName, email, uid } = user;
      dispatch(fillUserInfo({ displayName, email, uid }));
      dispatch(handleError({ status: false, message: "" }));
    } catch (error) {
      dispatch(handleError({ status: true, message: error.message }));
    }
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
    dispatch(handleError({ status: false, message: "" }));
  } catch (error) {
    dispatch(handleError({ status: true, message: error.message }));
  }
};

export const loginWithEmail = ({ email, password }) => async dispatch => {
  dispatch(handleError({ status: false, message: "" }));

  try {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    dispatch(
      fillUserInfo({
        displayName: user.displayName,
        email: user.email,
        uid: user.uid
      })
    );
  } catch (error) {
    dispatch(handleError({ status: true, message: error.message }));
  }
};

export const fillUserInfo = payload => ({
  type: types.userInfo,
  payload
});

export const logout = payload => async dispatch => {
  await firebase.auth().signOut();
  dispatch(
    fillUserInfo({
      type: types.logout
    })
  );
};
