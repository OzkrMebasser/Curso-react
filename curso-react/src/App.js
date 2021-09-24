import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Vistas
import Home from "./views/Home";
import Team from "./views/Team";

//Context
import { PokemonListProvider } from "./context/PokemonListContext";
import { TeamProvider } from "./context/TeamContext";

const initialState = {
  total: 0,
  items: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        total: state.total + parseInt(action.payload.price),
        items: [...state.items, action.payload]
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch({ type: "incrementCount", payload: 12 });
  };
  return (
    // <TeamProvider>
    //   <PokemonListProvider>
    //     <Router>
    //       <Switch>
    //         <Route path="/" exact>
    //           <Home />
    //         </Route>
    //         <Route path="/team">
    //           <Team />
    //         </Route>
    //       </Switch>
    //     </Router>
    //   </PokemonListProvider>
    // </TeamProvider>
    <>
      <p>Total :$ {state.total} </p>
      <p>Total de productos: {state.items.length} </p>

      <h2>Shopping cart</h2>
      {state.items.map(item => (
        <div>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}

      <div style={{ marginTop: 200 }}>
        <p>Producto 1</p>
        <p>$250</p>
        <button
          onClick={() =>
            dispatch({
              type: "add",
              payload: { name: "Producto 1", price: "250" }
            })
          }
        >
          Add +
        </button>
      </div>

      <div>
        <p>Producto 2</p>
        <p>$350</p>
        <button
          onClick={() =>
            dispatch({
              type: "add",
              payload: { name: "Producto 2", price: "350" }
            })
          }
        >
          Add +
        </button>
      </div>

      <div>
        <p>Producto 3</p>
        <p>$1250</p>
        <button
          onClick={() =>
            dispatch({
              type: "add",
              payload: { name: "Producto 3", price: "1250" }
            })
          }
        >
          Add +
        </button>
      </div>
    </>
  );
};

export default App;
