import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import ShopCartContext from "../context/ShopCartContext";

//Bootstrap components
import { Table } from "react-bootstrap";

const TableCart = ({ children }) => {
  const { state } = useContext(ShopCartContext);

  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
        marginTop: 30,
        textAlign: "center"
      }}
    >
      {state.cart.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Description</th>
              <th>$</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {children}
            <tr>
              <td>Total: ${state.totalPrice}</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <Link to="/">Empty shopping cart</Link>
      )}
    </div>
  );
};

export default TableCart;
