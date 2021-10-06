import React from "react";
import Listado from "./Listado";
const Header = ({ titulo, numero, classCss, isModal }) => {
  //props <--- {titulo: "Logo 1", numero: "1", classCss: "header1", otraProp: "texto"}
  //props.propiedad
  //   const { titulo, item } = props;
  //   console.log(props);
  const handleClick = () => {
    alert(" Si funciona");
  };
  return (
    <header className={classCss}>
      <a href="#">{titulo}</a>
      <ul>
        <li>
          <a href="#">Item {numero}</a>
        </li>
        <li>
          <a href="#">Item {numero}</a>
        </li>
        <li>
          <a href="#">Item {numero}</a>
        </li>
        <li>
          <a href="#">Item {numero}</a>
        </li>
      </ul>
      {isModal ? <button onClick={handleClick}>Click</button> : null}
      <Listado />
    </header>
  );
};

export default Header;
