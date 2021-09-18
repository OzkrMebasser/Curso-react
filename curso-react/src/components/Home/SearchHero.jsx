import React from "react";

import "../../styles/Home/SearchHero.styles.css";

const SearchHero = ({ setCharacter, fetchDataAPI }) => {
  const handleNameCharacter = e => {
    setCharacter(e.target.value);
  };

  return (
    <form action="" onSubmit={fetchDataAPI}>
      <h2>Search a hero by name !</h2>
      <input type="text" onChange={handleNameCharacter} />
      <input type="submit" value="Search !" />
    </form>
  );
};

export default SearchHero;
