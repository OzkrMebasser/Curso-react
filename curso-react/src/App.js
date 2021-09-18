import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Vistas o páginas
import Home from "./views/Home";
import SinglePlanet from "./views/SinglePlanet";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/homeworld/:id" exact>
          <SinglePlanet />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
