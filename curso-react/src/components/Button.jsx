import React from "react";
import { useDispatch } from "react-redux";
//Actions
import { showModal } from "../actions/modal.actions";

const Button = () => {
  const dispatch = useDispatch();

  const handleShowTitle = () => {
    dispatch(showModal());
  };
  return <button onClick={handleShowTitle}>Toggle title</button>;
};

export default Button;
