import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import axios from "axios";
//Components
import MovieForm from "../components/MovieForm";
import MovieRow from "../components/MovieRow";
import MovieCard from "../components/MovieCard";

const Home = props => {
  const [movieData, setMovieData] = useState({ name: "", type: null });
  const [responseData, setResponseData] = useState([]);

  const handleSearch = e => {
    const key = "763cfa63";
    const API = `https://omdbapi.com/?s=${movieData.name}&type=${movieData.type}&apikey=${key}`;
    e.preventDefault();

    axios
      .get(API)
      .then(response => setResponseData(response.data.Search))
      .catch(error => console.log(error));

    console.log(movieData);
  };

  console.log(responseData);

  return (
    <>
      <MovieForm
        setMovieData={setMovieData}
        movieData={movieData}
        handleSearch={handleSearch}
      />
      <MovieRow>
        {responseData.map((movie, index) => (
          <MovieCard
            key={index}
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
          />
        ))}
      </MovieRow>
    </>
  );
};

export default Home;
