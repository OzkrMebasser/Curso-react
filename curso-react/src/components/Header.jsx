import React from "react";

const Header = ({ titulo, numero, classCss }) => {
  //   const { titulo, item } = props;
  //   console.log(props);
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
    </header>
  );
};

export default Header;
