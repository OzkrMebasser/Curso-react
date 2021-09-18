import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

//Components
import Hero from "../components/Home/Hero";

const SinglePlanet = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState(null);

  const handleHomeWorldFetchAPI = async () => {
    try {
      const url = `https://www.swapi.tech/api/planets/${id}`;
      const response = await fetch(url);
      const result = await response.json();
      setSingleData(result.result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleHomeWorldFetchAPI();
  }, []);

  return (
    singleData && (
      <Hero
        name={singleData.properties.name}
        description={singleData.description}
        // homeworld={null}
      />
    )
  );
};

export default SinglePlanet;
