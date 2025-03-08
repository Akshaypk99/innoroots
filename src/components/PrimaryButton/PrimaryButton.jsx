import React from "react";
import "./PrimaryButton.scss";
import arrowIcon from '../../assets/images/icons/primary-btn-arrow.svg'

const PrimaryButton = ({ text, onClick }) => {
  return (
    <div className="primary-btn-container">
      <button className="primary-btn" onClick={onClick}>
        <span>{text}</span>
      </button>
      <span className="bg-effect"></span>
      <div className="arrow-icon">
        <img src={arrowIcon} alt="arrow" />
      </div>
    </div>
  );
};

export default PrimaryButton;
