import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Switch, Route } from "react-router-dom";

//Firebase
import { firebase } from "../firebase/firebase.config";

//Components
import Login from "../Views/Login/Login";
import Register from "../Views/Register/Register";
import Home from "../Views/Home/Home";

//ACTIONS
import { fillUserInfo } from "../actions/user.actions";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [isOnSession, setIsOnSession] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user?.uid) {
        dispatch(
          fillUserInfo({
            displayName: user.displayName,
            email: user.email,
            uid: user.uid
          })
        );
        setIsOnSession(true);
      } else {
        setIsOnSession(false);
      }
    });
  }, []);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (isOnSession ? <Home /> : <Redirect to="/login" />)}
      />
      <Route
        exact
        path="/login"
        render={() => (!isOnSession ? <Login /> : <Redirect to="/" />)}
      />
      <Route
        exact
        path="/register"
        render={() => (!isOnSession ? <Register /> : <Redirect to="/" />)}
      />
    </Switch>
  );
};

export default AppRouter;
