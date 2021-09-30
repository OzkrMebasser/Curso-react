import React, { useContext } from "react";
import ShopCartContext from "../../context/ShopCartContext";

//Layout
import TableCart from "../../layouts/TableCart";

//Components
import { Button } from "react-bootstrap";
import Product from "../../components/Home/Product/Product";

//Styles
import "./ShopCart.styles.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(ShopCartContext);

  return (
    <>
      <TableCart>
        {state.cart.map((product, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>
              <img
                src={product.img}
                alt={product.name}
                style={{ maxWidth: "20%" }}
              />
            </td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <Button
                variant="danger"
                onClick={() =>
                  dispatch({
                    type: "REMOVE",
                    payload: {
                      id: product.id,
                      name: product.name,
                      price: product.price
                    }
                  })
                }
              >
                Remove
              </Button>
            </td>
          </tr>
        ))}
      </TableCart>
    </>
  );
};

export default ShopCart;
