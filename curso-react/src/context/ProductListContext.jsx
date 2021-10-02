import React, { createContext, useReducer, useEffect } from "react";

const ProductListContext = createContext();

//State
const initialState = {
  products: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
};

const ProductListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API = "http://localhost:1337/products";
        const response = await fetch(API);
        const payload = await response.json();
        dispatch({ type: "ADD_PRODUCTS", payload });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const data = { state };

  return (
    <ProductListContext.Provider value={data}>
      {children}
    </ProductListContext.Provider>
  );
};

export { ProductListProvider };
export default ProductListContext;
