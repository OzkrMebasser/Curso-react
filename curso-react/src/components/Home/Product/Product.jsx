import React, { useContext, useEffect, useState } from "react";

//Context
import ShopCartContext from "../../../context/ShopCartContext";

//Bootstrap components
import { Card, Button } from "react-bootstrap";

const Product = ({ name, description, price, id, img, status }) => {
  const { state, dispatch } = useContext(ShopCartContext);

  const [payload, setPayload] = useState({});

  useEffect(() => {
    setPayload({
      name,
      description,
      price,
      id,
      img
    });
  }, []);

  const handleDispatch = payload => {
    dispatch({ type: "ADD", payload });
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => handleDispatch({ ...payload })}
        >
          $ {price} +
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
