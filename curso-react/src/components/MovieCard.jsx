import React from "react";
import { Card, Button } from "react-bootstrap";
const MovieCard = ({ poster, title, year }) => {
  return (
    <Card
      style={{
        width: "18rem",
        overflow: "hidden",
        marginTop: 20
      }}
    >
      <Card.Img
        variant="top"
        src={poster}
        style={{ height: "350px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <small className="text-muted">{year}</small>
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;
