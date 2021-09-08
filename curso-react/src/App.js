import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//VIEWS
import Home from "./components/Home";
import Contact from "./views/Contact";

////Styles
import "./styles/styles.css";
import "./styles/grid.css";
import "./styles/reset.css";

const App = () => {
  // return (
  //   <div className="App">
  //     <Header />
  //     <AboutSection />
  //     <ContactSection />
  //   </div>
  // );

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
