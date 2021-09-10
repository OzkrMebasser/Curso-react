import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SingleHero = () => {
  const { id } = useParams();

  const [singleData, setSingleData] = useState(null);

  const handleSingleFetchAPI = async () => {
    try {
      const access_token = "10220588968268520";
      const url = `https://www.superheroapi.com/api.php/${access_token}/${id}`;
      const response = await fetch(url);
      const result = await response.json();
      setSingleData(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSingleFetchAPI();
  }, []);

  return (
    singleData && (
      <div className="hero-card" style={{ marginBottom: "50px" }}>
        <div className="hero-card__image">
          <img src={singleData.image.url} alt={singleData.image.url} />
        </div>

        <div className="hero-card__information">
          <p>Name: {singleData.name}</p>
          <p>Alignment: {singleData.biography.alignment}</p>
          <p>Relatives: {singleData.connections.relatives}</p>
          <h3>Stats</h3>
          <p>Power: {singleData.powerstats.power} / 100</p>
          <p>Intelligence: {singleData.powerstats.intelligence} / 100</p>
          <p>Speed: {singleData.powerstats.speed} / 100</p>
          <p>Strength: {singleData.powerstats.strength} / 100</p>
        </div>

        <Link to="/">Go back</Link>
      </div>
    )
  );
};

export default SingleHero;
