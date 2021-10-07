import React from "react";
import { useSelector } from "react-redux";

const Modal = () => {
  const { isVisible } = useSelector(state => state.modal);
  const { name, age } = useSelector(state => state.user);

  console.log(isVisible);
  return (
    <div>
      {isVisible ? (
        <div>
          <p>{name}</p> <p>{age} años</p>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
