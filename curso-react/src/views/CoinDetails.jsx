import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = props => {
  const { id } = useParams();

  const fetchCoinData = async () => {
    try {
      const API = `https://api.coincap.io/v2/assets/${id}`;
      const response = await fetch(API);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  return (
    <div>
      <h1>Si funciona</h1>
    </div>
  );
};

export default CoinDetails;
