import React, { useState, useContext } from "react";
//Context
import ProductListContext from "../../context/ProductListContext";

//Componentes
import Product from "../../components/Home/Product/Product";

//Styles
import "./Home.styles.css";

const Home = () => {
  //Context del listado de productos
  const { state: listState } = useContext(ProductListContext);

  return (
    <div>
      <h1 className="title">Home</h1>
      {/* <p className="title">Total: {cartState.totalPrice}</p>
      <p className="title">Products: {cartState.cart.length}</p>
      <Link to="/shop-cart">Shopping cart</Link> */}
      <div className="product-list">
        {listState &&
          listState.products &&
          listState.products.map(product => (
            <Product
              key={product.id}
              name={product.name}
              description={product.desc}
              price={product.price}
              id={product.id}
              img={product.img[0]}
              status="add"
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
