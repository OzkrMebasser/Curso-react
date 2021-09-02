import React, { useState } from "react";

//Estilos
import "../styles/Header.css";

//Componente
const Header = ({ titulo, numero, classCss, setText }) => {
  //Estado del componente
  const [darkMode, setDarkMode] = useState(false);

  //Funciones
  // function handleDarkMode() {
  //   if (darkMode === true) {
  //     setDarkMode(false);
  //   } else {
  //     setDarkMode(true);
  //   }
  // }
  const handleDarkMode = () => {
    // if (darkMode === true) {
    //   setDarkMode(false);
    // } else {
    //   setDarkMode(true);
    // }
    // setDarkMode(darkMode ? false : true);
    setDarkMode(!darkMode);
    setText(darkMode ? "Sin DarkMode" : "Con DarkMode");
  };

  return (
    <>
      <header className={!darkMode ? "normal-header" : "dark-header"}>
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

          <li>
            <button onClick={handleDarkMode}>Dark Mode</button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
