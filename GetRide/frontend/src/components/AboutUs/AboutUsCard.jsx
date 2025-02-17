import React from "react";
import "./AboutUsCard.css";

const AboutUsCard = ({ title, desc, img, className }) => {
  return (
    <div className={`about-us-card ${className}`}>
      <img src={img} className="about-us-card-img" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default AboutUsCard;
