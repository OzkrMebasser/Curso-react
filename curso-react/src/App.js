import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Vistas
import Home from "./views/Home";
import Team from "./views/Team";

//Context
import { PokemonListProvider } from "./context/PokemonListContext";
import { TeamProvider } from "./context/TeamContext";

const App = () => {
  return (
    <TeamProvider>
      <PokemonListProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
          </Switch>
        </Router>
      </PokemonListProvider>
    </TeamProvider>
  );
};

export default App;
