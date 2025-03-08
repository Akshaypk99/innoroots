import React from "react";
import "./ExploreButton2.scss";
import arrowIcon from '../../assets/images/icons/button-arrow.svg'

const ExploreButton2 = ({ text, onClick , page}) => {
  return (
    <div className="explore-btn2-container" onClick={onClick}>
      <button className="exp-btn">
        <span>{text}</span>
      </button>
      <span className="bg-effect"></span>
      <div className={`arrow-icon ${page}`}>
        <img src={arrowIcon} alt="arrow" />
      </div>
    </div>
  );
};

export default ExploreButton2;
