import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { PokemonListProvider } from "./context/PokemonListContext";

//Components
import Home from "./views/Home";
import Team from "./views/Team";

const App = () => {
  return (
    <>
      <PokemonListProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/team" exact>
              <Team />
            </Route>
            <Route path="*">
              <h1>404 Not Found</h1>
            </Route>
          </Switch>
        </Router>
      </PokemonListProvider>
    </>
  );
};

export default App;
