import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
//Components
import Header from "../components/Header";
import SearchHero from "../components/Home/SearchHero";
import ShowError from "../components/ShowError";
import Hero from "../components/Home/Hero";

const Home = () => {
  const [character, setCharacter] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRandomDataAPI = async () => {
    try {
      const API = "https://www.swapi.tech/api/people/?name=r2";
      const response = await fetch(API);
      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataAPI = async e => {
    e.preventDefault();
    const API = `https://www.swapi.tech/api/people/?name=${character}`;
    setLoading(true);
    try {
      const response = await fetch(API);
      const { result } = await response.json();
      setData(result[0]);
      console.log(result[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleRandomDataAPI();
  }, []);

  return (
    <>
      <Header />
      <SearchHero setCharacter={setCharacter} fetchDataAPI={fetchDataAPI} />
      {data && !loading ? (
        <Hero
          name={data.properties.name}
          description={data.description}
          homeworld={data.properties.homeworld}
        />
      ) : data && loading ? (
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <Spinner animation="grow" />
        </div>
      ) : null}
    </>
  );
};

export default Home;
