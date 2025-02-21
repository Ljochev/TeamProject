import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import classes from "./RidesComp.module.css";
import MyButton from "../../components/Button/MyButton";

const RidesComp = ({ rides }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={classes.ridesList}>
      <h2>Достапен превоз</h2>
      {rides.length === 0 ? (
        <p>Нема превоз за избраниот термин.</p>
      ) : (
        rides.map((ride) => (
          <div key={ride.id} className={classes.rideCard}>
            <h3>{ride.driver.name}</h3>
            <p>Оцени: {ride.driver.rating}</p>
            <p>
              Дестинација: {ride.origin} - {ride.destination}
            </p>
            <p>Поаѓање: {ride.departureTime}</p>
            <p>Времетраење: {ride.duration} минути</p>
            <p>Цена: {ride.price} ден.</p>
            <p>Дозволени домашни миленици: {ride.petsAllowed ? "Да" : "Не"}</p>
            <p>
              Најмногу два патници на заднo седиште:{" "}
              {ride.maxBackSeatPassengers ? "Да" : "Не"}
            </p>
            <p>Дозволено е пушење: {ride.smokingAllowed ? "Да" : "Не"}</p>
            <MyButton type="submit" name={"Резервирај"} />
          </div>
        ))
      )}
    </div>
  );
};

export default RidesComp;
