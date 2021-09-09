import React from "react";

const SearchForm = ({ setName, handleFetchCountryData }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Nombre del país"
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleFetchCountryData}>Buscar</button>
    </div>
  );
};

export default SearchForm;
