import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//Styles
import "../../styles/Home/Hero.styles.css";

const Hero = ({ name, description, homeworld }) => {
  const [idPlanet, setIdPlanet] = useState(null);

  useEffect(() => {
    if (homeworld) {
      const planet = homeworld.substr(homeworld.length - 1);
      setIdPlanet(planet);
    }
    return () => {
      setIdPlanet(null);
    };
  }, []);

  return (
    <Card style={{ width: "18rem", margin: "auto", marginTop: 10 }}>
      <Card.Img
        variant="top"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant={homeworld ? "danger" : "warning"}>
          <Link to={homeworld ? `/homeworld/${idPlanet}` : "/"}>
            {homeworld ? "See More" : "Go back"}
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Hero;
