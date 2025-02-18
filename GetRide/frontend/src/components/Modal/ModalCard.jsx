import React from "react";
import { useTranslation } from "react-i18next";
import MyButton from "../Button/MyButton";
import classes from "./ModalCard.module.css";

const ModalCard = ({ show, message, closeModal }) => {
  const { t } = useTranslation();
  if (!show) return null;

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <p>{message}</p>
        <MyButton
          className={classes.modalButton}
          type="button"
          name={t("close")}
          onClick={closeModal}
        />
      </div>
    </div>
  );
};
export default ModalCard;
