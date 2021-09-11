import React from "react";

import { Navbar, Container } from "react-bootstrap";

const Header = props => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#fff" }}>
          CoinCap API
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
