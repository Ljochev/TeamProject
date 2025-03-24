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
      <h2>{t("ridesCompTitle")}</h2>
      {rides.length === 0 ? (
        <p>{t("ridesCompDesc")}</p>
      ) : (
        rides.map((ride) => (
          <div key={ride.id} className={classes.rideCard}>
            <h3>{ride.driver.name}</h3>
            <p>
              {t("ridesCompDescOne")} {ride.driver.rating}
            </p>
            <p>
              {t("ridesCompDescTwo")} {ride.origin} - {ride.destination}
            </p>
            <p>
              {t("ridesCompDescThree")} {ride.departureTime}
            </p>
            <p>
              {t("ridesCompDescFour")}
              {ride.duration} min
            </p>
            <p>
              {t("ridesCompDescFive")} {ride.price} den.
            </p>
            <p>
              {t("ridesCompDescSix")} {ride.petsAllowed ? "Да" : "Не"}
            </p>
            <p>
              {t("ridesCompDescSeven")}{" "}
              {ride.maxBackSeatPassengers ? "Да" : "Не"}
            </p>
            <p>
              {t("ridesCompDescEight")} {ride.smokingAllowed ? "Да" : "Не"}
            </p>
            <MyButton type="submit" name={t("ridesCompButton")} />
          </div>
        ))
      )}
    </div>
  );
};

export default RidesComp;
