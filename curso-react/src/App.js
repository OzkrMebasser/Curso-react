import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//VIEWS
import CountryPage from "./views/CountryPage";
import CountryDetails from "./views/CountryDetails";

const App = () => {
  // return (
  //   <div className="App">
  //     <Header />
  //     <AboutSection />
  //     <ContactSection />
  //   </div>
  // );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <CountryPage />
        </Route>
        <Route path="/details/:country" exact>
          <CountryDetails />
        </Route>
        {/* <Route path="/list" exact>
          <CountryPage />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
