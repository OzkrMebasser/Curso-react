import React, { useContext } from "react";

//Bootstrap components
import { Navbar, Container, Nav } from "react-bootstrap";
import PokemonListContext from "../context/PokemonListContext";

//Router
import { Link } from "react-router-dom";

const Header = () => {
  const { list } = useContext(PokemonListContext);

  console.log("Desde el header :v");
  console.log(list);
  return (
    <Navbar expand="lg" variant="danger" bg="danger">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">
            <Link to="/team">My Team</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
