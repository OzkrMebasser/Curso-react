import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Styles
import "./App.css";

//Views
import Home from "./views/Home";
import LoginForm from "./views/LoginForm";
import RegisterForm from "./views/RegisterForm";
import Contact from "./views/Contact";

//Layout
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
          {/* Header */}
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/login" exact>
            <LoginForm />
          </Route>

          <Route path="/register" exact>
            <RegisterForm />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>

          {/* Footer */}
        </MainLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
