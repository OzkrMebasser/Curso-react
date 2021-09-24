import React, { useContext } from "react";

//Context
import TeamContext from "../context/TeamContext";

//Bootstrap components
import { Card, Button } from "react-bootstrap";

const SinglePokemon = ({ img, name, id, team }) => {
  const { handleAddTeam, user, handleRemoveTeam } = useContext(TeamContext);

  return (
    <Card style={{ width: "18rem", marginTop: 20 }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        {!team ? (
          <Button
            variant={
              user.team.some(idList => idList === id) ? "danger" : `success`
            }
            onClick={() => handleAddTeam(id)}
            disabled={user.team.some(idList => idList === id)}
          >
            {user.team.some(idList => idList === id)
              ? "Already in my team"
              : "Add to my team"}
          </Button>
        ) : (
          <Button variant="danger" onClick={() => handleRemoveTeam(id)}>
            Delete
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default SinglePokemon;
