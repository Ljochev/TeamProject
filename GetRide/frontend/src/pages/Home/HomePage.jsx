import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./HomePage.module.css";
import Hero from "../../components/Hero/Hero";
import AboutUsCard from "../../components/AboutUs/AboutUsCard";
import Features from "../../components/Features/Features";
import Modal from "../../components/Modal1/Modal";
import PostRideForm from "../../components/PostRide/PostRideForm";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      img: "/destination.png",
      title: "Пронајди дестинација",
      description: "Пронајдете ја дестинацијата каде што сакате да одите",
    },
    {
      img: "/driver.png",
      title: "Пронајди возач",
      description: "Пронајдете некој кој патува кон вашата дестинација",
    },
    {
      img: "/reserved.png",
      title: "Резервирај",
      description: "Резервирај слободно место",
    },
    {
      img: "/calendar.png",
      title: "Пристигни на време",
      description:
        "Пристигнете на време. Времето на вашето пристигнување однапред ќе го знаете",
    },
  ];

  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <section className={classes.steps}>
        {steps.map((card, index) => (
          <AboutUsCard
            key={index}
            img={card.img}
            title={card.title}
            desc={card.description}
            className={"steps-card"}
          />
        ))}
      </section>

      {/* Копче за објавување возење */}
      <div className={classes.postRideContainer}>
        <button
          className={classes.postRideButton}
          onClick={() => setIsModalOpen(true)}
        >
          + Објави Возење
        </button>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <PostRideForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
      <Features />
    </>
  );
};

export default HomePage;
