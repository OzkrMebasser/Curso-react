import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Login from "../Views/Login/Login";
import Register from "../Views/Register/Register";
import Home from "../Views/Home/Home";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default AppRouter;
