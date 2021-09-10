import React, { useState } from "react";

//Components
import Header from "../components/Header";
import SearchHero from "../components/Home/SearchHero";
import ShowError from "../components/ShowError";
import Hero from "../components/Home/Hero";

const Home = () => {
  const [heroName, setHeroName] = useState(null);
  const [heroData, setHeroData] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSearchHero = async e => {
    const accesToken = "10220588968268520";
    const url = `https://www.superheroapi.com/api.php/${accesToken}/search/${heroName}`;
    e.preventDefault();

    try {
      const response = await fetch(url);
      const result = await response.json();

      if (result.response === "error") {
        setError(true);
        setMessage(result.error);
      } else {
        setError(false);
        setHeroData(result.results[0]);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <SearchHero
        setHeroName={setHeroName}
        handleSearchHero={handleSearchHero}
      />

      {//Si la variable error es true
      error ? (
        <ShowError message={message} />
      ) : (
        heroData && (
          <Hero
            name={heroData.name}
            avatar={heroData.image.url}
            id={heroData.id}
          />
        )
      )}
    </>
  );
};

export default Home;
