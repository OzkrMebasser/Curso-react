import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  //   const { titulo, item } = props;
  //   console.log(props);
  return (
    <header id="main-header">
      <nav className="container row justify-between">
        <div className="logo d-flex justify-center align-center col-2">
          {/* <a href="#"></a> */}
          <Link to="/">Daniel Meza</Link>
        </div>

        <ul className="d-flex justify-between align-center col-5">
          <li className="col-2">
            <Link to="/" className="active item">
              Home
            </Link>
          </li>
          <li className="col-2">
            <a href="about.html" className="item">
              About
            </a>
          </li>
          <li className="col-2">
            <a href="#" className="item">
              Services
            </a>
          </li>
          <li className="col-2">
            <a href="#" className="item">
              Portfolio
            </a>
          </li>
          <li className="col-2">
            <a href="#" className="item">
              Blog
            </a>
          </li>
          <li className="col-2">
            <Link to="/contact" className=" item">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
