import React, { useContext, useEffect, useState } from "react";

//Context
import ShopCartContext from "../../../context/ShopCartContext";
import UserContext from "../../../context/UserContext";

//Bootstrap components
import { Card, Button } from "react-bootstrap";

const Product = ({ name, description, price, id, img, status }) => {
  const { state: cartState, dispatch: cartDispatch } = useContext(
    ShopCartContext
  );
  const { state: userState, dispatch: userDisptach } = useContext(UserContext);

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
    cartDispatch({ type: "ADD", payload });
  };

  const handleDispatchList = payload => {
    if (status !== "wish-list") {
      userDisptach({ type: "ADD_TO_WISH_LIST", payload });
      console.log("ADD");
    } else {
      userDisptach({ type: "REMOVE_TO_WISH_LIST", payload });
      console.log("REMOVE");
    }
  };
  return (
    <Card style={{ width: "18rem", marginRight: 10 }}>
      <Card.Img variant="top" src={`http://localhost:1337${img.url}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => handleDispatch({ ...payload })}
        >
          $ {price} +
        </Button>

        <Button
          variant={status === "wish-list" ? "danger" : "warning"}
          onClick={() => handleDispatchList({ ...payload })}
        >
          {status === "wish-list" ? "Remove" : "Add to my list"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
