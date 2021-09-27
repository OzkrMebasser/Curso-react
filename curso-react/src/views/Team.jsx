import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
//Components
import Header from "../components/Header";
import SinglePokemon from "../components/SinglePokemon";

//Context
import PokemonListContext from "../context/PokemonListContext";

const Team = () => {
  const [myTeam, setMyTeam] = useState([]);
  const { list } = useContext(PokemonListContext);

  console.log(list);

  const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "70%",
    margin: "auto",
    marginTop: 20
  };

  // useEffect(() => {
  //   let found = [];
  //   user.team.forEach(element => {
  //     found = [...found, list.find(pokemon => pokemon.id === element)];
  //   });
  //   setMyTeam(found);
  // }, [user.team]);

  return (
    <>
      <Header />
      {/* <div style={styles}>
        {myTeam?.length > 0 &&
          myTeam.map(pokemon => (
            <SinglePokemon
              key={pokemon.id}
              img={pokemon.img}
              name={pokemon.name}
              id={pokemon.id}
              team={true}
            />
          ))}
      </div>
      {!myTeam.length > 0 && (
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <h2>Not pokemon found</h2>
          <Button variant="success">
            <Link to="/">Add pokemon</Link>
          </Button>
        </div>
      )} */}
    </>
  );
};

export default Team;
