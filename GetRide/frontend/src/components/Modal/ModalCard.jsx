import React from "react";
import MyButton from "../Button/MyButton";
import "./ModalCard.css";

const ModalCard = ({ show, message, closeModal }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <MyButton
          className="modal-content-button"
          type="button"
          name={"Затвори"}
          onClick={closeModal}
        />
      </div>
    </div>
  );
};
export default ModalCard;
