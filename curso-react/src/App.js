import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//Context
import { ProductListProvider } from "./context/ProductListContext";
import { ShopCartProvider } from "./context/ShopCartContext";
//Components
import LoaderPage from "./components/custom/LoaderPage/LoaderPage";

const Home = lazy(() => import("./views/Home/Home"));
const ShopCart = lazy(() => import("./views/ShopCart/ShopCart"));

const App = () => {
  return (
    <>
      <ProductListProvider>
        <ShopCartProvider>
          <Router>
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

              <Route path="*">
                <h1>404 Not Found</h1>
              </Route>
            </Switch>
          </Router>
        </ShopCartProvider>
      </ProductListProvider>
    </>
  );
};

export default App;
