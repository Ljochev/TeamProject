import React from "react";
import { useTranslation } from "react-i18next";
import MyButton from "../Button/MyButton";
import "./ModalCard.css";

const ModalCard = ({ show, message, closeModal }) => {
  const { t, i18n } = useTranslation();
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <MyButton
          className="modal-content-button"
          type="button"
          name={t("close")}
          onClick={closeModal}
        />
      </div>
    </div>
  );
};
export default ModalCard;
