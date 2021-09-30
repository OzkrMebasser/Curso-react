import React, { useContext } from "react";

//Components
import Header from "../components/custom/Header/Header";

//Context
import ShopCartContext from "../context/ShopCartContext";
import UserContext from "../context/UserContext";

const Main = ({ children }) => {
  const { state: cartState } = useContext(ShopCartContext);
  const { state: userState } = useContext(UserContext);

  return (
    <>
      <Header
        cart={cartState.cart}
        total={cartState.totalPrice}
        name={cartState.user}
        session={userState}
      />
      {children}
    </>
  );
};

export default Main;
