import React, { useContext } from "react";

//Context
import UserContext from "../../context/UserContext";

//Components
import Product from "../../components/Home/Product/Product";

const MyAccount = () => {
  const { state } = useContext(UserContext);
  const { user, wishList } = state;

  return (
    <div>
      <h1>Hola {user.user.username}</h1>

      <p>Mis favoritos</p>
      {wishList.length > 0 ? (
        wishList.map(product => (
          <Product
            key={product.id}
            name={product.name}
            description={product.desc}
            price={product.price}
            id={product.id}
            img={product.img}
            status="wish-list"
          />
        ))
      ) : (
        <h2>No hay favoritos</h2>
      )}
    </div>
  );
};

export default MyAccount;
