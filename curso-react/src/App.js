import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Vistas o páginas
import Home from "./views/Home";
import SingleHero from "./views/SingleHero";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/hero/:id" exact>
          <SingleHero />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
