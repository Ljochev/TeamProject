import React from "react";
import "./MyButton.css";

const MyButton = ({ type, onClick, name, className, disabled }) => {
  return (
    <button
      className={`contact-button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default MyButton;
