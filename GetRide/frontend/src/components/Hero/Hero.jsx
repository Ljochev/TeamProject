import React from "react";
import classes from "./Hero.module.css";
import heroImg from "../../assets/hero.png";
import Search from "../Search/Search";

const Hero = () => {
  return (
    <main className={classes.hero}>
      <div className={classes.titles}>
        <h1 className={classes.title}>Превоз до вашата дестинација </h1>
        <Search vertical={true} />
      </div>
      <div className={classes.imageContainer}>
        <img src={heroImg} alt="" />
      </div>
    </main>
  );
};

export default Hero;
