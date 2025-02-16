import React from "react";
import heroImg from "../../assets/hero.png";
import Button from "../Button/Button";
import "./hero.css";

const Hero = () => {
  return (
    <main id="hero">
      <div className="hero-left-side">
        <div className="hero-title-container">
          <h2>Превоз до вашата дестинација </h2>
          <div className="hero-buttons">
            <Button main={false}>Барај превоз</Button>
            <Button main={false}>Нуди превоз</Button>
          </div>
        </div>
      </div>

      <div className="hero-img-container">
        <img src={heroImg} alt="Hero" className="hero-img" />
      </div>
    </main>
  );
};

export default Hero;
