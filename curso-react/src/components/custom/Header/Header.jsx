import React from "react";
import { Link } from "react-router-dom";
//Bootstrap components
import { Navbar, Container, Nav } from "react-bootstrap";

//Styles
import "./Header.styles.css";

const Header = ({ cart, total, session }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="header-link">
            Store
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/" className="header-link">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/" className="header-link">
              Checkout
            </Link>
          </Nav.Link>
          <Navbar.Text>
            <Link to="/shop-cart" className="header-link">
              Cart: {cart.length}
            </Link>
          </Navbar.Text>

          <Navbar.Text>
            <span className="header-link">
              Total: {total > 0 ? "$" + total : "$0"}
            </span>
          </Navbar.Text>

          {session.user.jwt ? (
            <Nav.Link>
              <Link to="/account" className="header-link">
                Welcome {session.user.user.username}
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link>
              <Link to="/login" className="header-link">
                Log in
              </Link>
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
