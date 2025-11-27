import React from "react";
import './SpecialtySlider.css'

const SpecialtyCard = ({ icon, title, description }) => {
  return (
    <div className="specialty-card">
      <div className="specialty-icon-wrapper">
        {icon}
      </div>
      <h3 className="specialty-title">{title}</h3>
      <p className="specialty-description">{description}</p>
    </div>
  );
};

export default SpecialtyCard;
