import React from "react";

import "../../styles/Home/SearchHero.styles.css";

const SearchHero = ({ setHeroName, handleSearchHero }) => {
  return (
    <form action="" onSubmit={handleSearchHero}>
      <h2>Search a hero by name !</h2>
      <input type="text" onChange={e => setHeroName(e.target.value)} />
      <input type="submit" value="Search !" />
    </form>
  );
};

export default SearchHero;
