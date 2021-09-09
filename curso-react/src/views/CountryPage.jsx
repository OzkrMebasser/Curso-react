import React, { useState } from "react";

//Componentes
import SearchForm from "../components/CountryPage/SearchForm";
import Country from "../components/CountryPage/Country";
import FetchError from "../components/FetchError";

const CountryPage = props => {
  const [countryData, setCountryData] = useState([]);
  const [name, setName] = useState(null);
  const [error, setError] = useState(false);

  //Funciones
  const handleFetchCountryData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
      );
      const result = await response.json();
      console.log(result);
      if (result.status) {
        setError(result.message);
      } else {
        setCountryData(result);
        setError(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <SearchForm
        setName={setName}
        handleFetchCountryData={handleFetchCountryData}
      />
      {error ? (
        <FetchError message={error} />
      ) : (
        <div>
          {countryData.map(infoCountry => (
            <Country
              key={infoCountry.name}
              flag={infoCountry.flag}
              name={infoCountry.name}
              code={infoCountry.alpha2Code}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CountryPage;
