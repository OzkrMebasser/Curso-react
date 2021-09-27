import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Accordion } from "react-bootstrap";

//Images

import ProductImg from "../assets/product.jpg";

const initialStateProducts = {
  products: [
    {
      id: 1,
      name: "producto 1",
      price: 250,
      description: "Descripción de prueba 1"
    },
    {
      id: 2,
      name: "producto 2",
      price: 550,
      description: "Descripción de prueba 2"
    },
    {
      id: 3,
      name: "producto 3",
      price: 2500,
      description: "Descripción de prueba 3"
    },
    {
      id: 4,
      name: "producto 4",
      price: 120,
      description: "Descripción de prueba 4"
    }
  ]
};

const initialState = {
  total: 0,
  cart: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        total: state.total + action.payload.payloadPrice,
        cart: [...state.cart, action.payload]
      };

    case "REMOVE":
      return {
        total: state.total - action.payload.price,
        cart: state.cart.filter(
          productId => productId.payloadId !== action.payload.id
        )
      };

    default:
      return state;
  }
};

const Tienda = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [productsState, setProductsState] = useState(
    initialStateProducts.products
  );

  const handleAddProduct = productInfo => {
    dispatch({ type: "ADD", payload: productInfo });
  };

  const handleRemoveProduct = productInfo => {
    console.log(productInfo);
    dispatch({ type: "REMOVE", payload: productInfo });
  };

  return (
    <>
      <h2>Shirt store</h2>
      <p>Total: {state.total}</p>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Products</Accordion.Header>
          <Accordion.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 200
              }}
            >
              {state.cart.map((productCart, index) => (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={ProductImg} />
                  <Card.Body>
                    <Card.Title>{productCart.payloadName}</Card.Title>
                    <Button
                      variant="danger"
                      onClick={() =>
                        handleRemoveProduct({
                          id: productCart.payloadId,
                          price: productCart.payloadPrice
                        })
                      }
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 200
        }}
      >
        {productsState.map(product => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImg} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button
                variant="primary"
                onClick={() =>
                  handleAddProduct({
                    payloadName: product.name,
                    payloadPrice: product.price,
                    payloadDesc: product.description,
                    payloadId: product.id
                  })
                }
              >
                $ {product.price} +
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Tienda;
