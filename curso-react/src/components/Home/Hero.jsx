import React from "react";
import { Link } from "react-router-dom";

//Styles
import "../../styles/Home/Hero.styles.css";

const Hero = ({ name, avatar, id }) => {
  return (
    <div className="hero-card">
      <img src={avatar} alt={name} />
      <div className="hero-card__actions">
        <h2>{name}</h2>
        <button>
          <Link to={`/hero/${id}`}>Ver más</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
