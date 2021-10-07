import React, { useState } from "react";
import { useDispatch } from "react-redux";

//Actions
import { fillUserInfo } from "../actions/user.actions";

const Form = () => {
  const [data, setData] = useState({ name: "", age: null });
  const dispatch = useDispatch();

  const handleSendInformation = e => {
    e.preventDefault();
  };

  return (
    <form action="" onSubmit={handleSendInformation}>
      <input
        type="text"
        placeholder="Nombre"
        onChange={e => setData({ ...data, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Edad"
        onChange={e => setData({ ...data, age: e.target.value })}
      />
      <button>Guardar</button>
    </form>
  );
};

export default Form;
