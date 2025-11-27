import React from "react";
import SpecialtyCard from "./SpecialtyCard";
import "./SpecialtySlider.css";
import { FaTooth } from "react-icons/fa";
import { GiBrain, GiScalpel } from "react-icons/gi";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const specialties = [
  {
    icon: <FaTooth size={40} color="#d6ebedff" />,
    title: "Dentistry",
    description: "The Department of Dental and Cranio Maxillofacial Surgery at Aster...",
    path: "/dentistry",
  },
  {
    icon: <GiScalpel size={40} color="#d6ebedff" />,
    title: "Neuro Surgery",
    description: "The Department of Neurosurgery at Aster MIMS Kottakkal provides...",
    path: "/neuro-surgery",
  },
  {
    icon: <GiBrain size={40} color="#d6ebedff" />,
    title: "Neurology",
    description: "The Department of Neurology at Aster MIMS Kottakkal provides...",
    path: "/neurology",
  },
];

const SpecialtySlider = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="specialty-slider-container">
      <Row className="g-4">
        {specialties.map((spec, index) => (
          <Col key={index} xs={12} md={4}>
            <button
              className="specialty-button"
              onClick={() => handleClick(spec.path)}
              aria-label={`Navigate to ${spec.title} specialty`}
            >
              <SpecialtyCard {...spec} />
            </button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SpecialtySlider;
