import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = props => {
  const { country } = useParams();

  const [details, setDetails] = useState([]);

  const fetchDetailsAPI = async () => {
    try {
      const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true
        `);
      const result = await response.json();
      setDetails(result[0]);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailsAPI();
  }, []);

  return (
    <div>
      <h1>{details.name}</h1>
      <img src={details.flag} alt={details.name} />
      <p>Capital: {details.capital}</p>
      <p>Nombre nativo: {details.nativeName}</p>
      <p>Continente: {details.subregion}</p>
    </div>
  );
};

export default CountryDetails;
