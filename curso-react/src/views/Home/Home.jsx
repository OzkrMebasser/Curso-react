import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
//Context
import ProductListContext from "../../context/ProductListContext";

//Componentes
import Product from "../../components/Home/Product/Product";
import ShopCartContext from "../../context/ShopCartContext";

//Styles
import "./Home.styles.css";

const Home = () => {
  //Context del listado de productos
  const { state: listState } = useContext(ProductListContext);
  //Context carrito de compras
  const { state: cartState } = useContext(ShopCartContext);
  const [cart, setCart] = useState([{}]);
  return (
    <div>
      <h1 className="title">Home</h1>
      <p className="title">Total: {cartState.totalPrice}</p>
      <p className="title">Products: {cartState.cart.length}</p>
      <Link to="/shop-cart">Shopping cart</Link>
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
              img={product.img}
              status="add"
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
