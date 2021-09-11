import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Home from "./views/Home";
import CoinDetails from "./views/CoinDetails";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/details/:id" exact>
          <CoinDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
