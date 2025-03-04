import React from "react";
import classes from "./Modal.module.css";
const Modal = ({ children, onClose }) => {
  return (
    <div className={classes.backdrop} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={classes.closeButton} onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
