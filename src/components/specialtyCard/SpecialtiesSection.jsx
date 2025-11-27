import React from "react";
import SpecialtySlider from "./SpecialtySlider";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";



const SpecialtiesSection = () => {
  return (
    <section className="specialties-section">
      
      

       
          <div className="mx-auto" style={{ maxWidth: "700px" }}>
            <p className="mt-4 mb-4">
              Through our 25+ specialities, we provide in-depth expertise in the
              spectrum of advanced medical and surgical interventions. Our
              specialties are integrated to provide a seamless experience.
            </p>
          </div>
        

      <SpecialtySlider />
    </section>
  );
};

export default SpecialtiesSection;