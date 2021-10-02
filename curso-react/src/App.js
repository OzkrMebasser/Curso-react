import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//Context
import { ProductListProvider } from "./context/ProductListContext";
import { ShopCartProvider } from "./context/ShopCartContext";
import { UserProvider } from "./context/UserContext";

//Components
import LoaderPage from "./components/custom/LoaderPage/LoaderPage";
import Main from "./layouts/Main";

const Home = lazy(() => import("./views/Home/Home"));
const ShopCart = lazy(() => import("./views/ShopCart/ShopCart"));
const LoginForm = lazy(() => import("./views/Login/LoginForm"));
const MyAccount = lazy(() => import("./views/MyAcount/MyAccount"));

const App = () => {
  return (
    <>
      <UserProvider>
        <ProductListProvider>
          <ShopCartProvider>
            <Router>
              <Main>
                <Switch>
                  <Route path="/" exact>
                    <Suspense fallback={<LoaderPage />}>
                      <Home />
                    </Suspense>
                  </Route>

                  <Route path="/shop-cart">
                    <Suspense fallback={<LoaderPage />}>
                      <ShopCart />
                    </Suspense>
                  </Route>

                  <Route path="/login">
                    <Suspense fallback={<LoaderPage />}>
                      <LoginForm />
                    </Suspense>
                  </Route>

                  <Route path="/account">
                    <Suspense fallback={<LoaderPage />}>
                      <MyAccount />
                    </Suspense>
                  </Route>

                  <Route path="*">
                    <h1>404 Not Found</h1>
                  </Route>
                </Switch>
              </Main>
            </Router>
          </ShopCartProvider>
        </ProductListProvider>
      </UserProvider>
    </>
  );
};

export default App;
