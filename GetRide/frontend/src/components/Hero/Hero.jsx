import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./Hero.module.css";
import heroImg from "../../assets/hero.png";
import Search from "../Search/Search";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <main className={classes.hero}>
      <div className={classes.titles}>
        <h1 className={classes.title}>{t("heroTitle")}</h1>
        <Search vertical={true} />
      </div>
      <div className={classes.imageContainer}>
        <img src={heroImg} alt="" />
      </div>
    </main>
  );
};

export default Hero;
