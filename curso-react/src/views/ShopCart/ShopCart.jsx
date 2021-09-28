import React, { useContext } from "react";
import ShopCartContext from "../../context/ShopCartContext";
import { Link } from "react-router-dom";
//Components
import Product from "../../components/Home/Product/Product";

//Styles
import "./ShopCart.styles.css";

const ShopCart = () => {
  const { state } = useContext(ShopCartContext);

  return (
    <>
      <Link to="/">Go back !</Link>
      <div className="product-list">
        {state.cart.map(product => (
          <Product
            key={product.id}
            name={product.name}
            description={product.desc}
            price={product.price}
            id={product.id}
            img={product.img}
            status="delete"
          />
        ))}
      </div>
    </>
  );
};

export default ShopCart;
