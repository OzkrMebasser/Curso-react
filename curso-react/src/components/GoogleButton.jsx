import React from "react";
import { useDispatch } from "react-redux";

import { loginWithGoogleFirebase } from "../actions/user.actions";

const GoogleButton = () => {
  const dispatch = useDispatch();

  const handleLoginWithGoogle = () => {
    dispatch(loginWithGoogleFirebase());
  };

  return <button onClick={handleLoginWithGoogle}>Login with Google</button>;
};

export default GoogleButton;
