import React from "react";
import SpecialtyCard from "../specialtyCard/SpecialtyCard";
import "../specialtyCard/SpecialtySlider.css";
import {
  FaTooth,
  FaBone,
  FaHeart,
  FaEye,
  FaChevronRight,
} from "react-icons/fa";
import { GiBrain, GiScalpel, GiStethoscope } from "react-icons/gi";
import { MdChildCare } from "react-icons/md";
import { Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const specialties = [
  {
    icon: <FaTooth size={40} color="#d6ebedff" />,
    title: "Dentistry",
    description:
      "The Department of Dental and Cranio Maxillofacial Surgery at Aster...",
    
  },
  {
    icon: <GiScalpel size={40} color="#d6ebedff" />,
    title: "Neuro Surgery",
    description:
      "The Department of Neurosurgery at Aster MIMS Kottakkal provides...",
    
  },
  {
    icon: <GiBrain size={40} color="#d6ebedff" />,
    title: "Neurology",
    description: "The Department of Neurology at Aster MIMS Kottakkal provides...",
    
  },
  {
    icon: <FaBone size={40} color="#d6ebedff" />,
    title: "Orthopaedics",
    description: "The Department of Orthopaedics at Aster MIMS Kottakkal is...",
    
  },
  {
    icon: <FaHeart size={40} color="#d6ebedff" />,
    title: "Cardiology",
    description:
      "Comprehensive cardiac care with advanced diagnostics and treatments...",
    
  },
  {
    icon: <FaEye size={40} color="#d6ebedff" />,
    title: "Ophthalmology",
    description:
      "Eye care services including cataract, retina, and vision correction...",
    
  },
  {
    icon: <GiStethoscope size={40} color="#d6ebedff" />,
    title: "General Medicine",
    description: "Holistic medical care for a wide range of health conditions...",
   
  },
  {
    icon: <MdChildCare size={40} color="#d6ebedff" />,
    title: "Paediatrics",
    description:
      "Specialized care for infants, children, and adolescents...",
   
  },
  {
    icon: <FaBone size={40} color="#d6ebedff" />,
    title: "Rheumatology",
    description:
      "Expert care for arthritis, autoimmune, and musculoskeletal disorders...",
    
  },
];

const AllSpecialities = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section className="all-specialties-premium-section">
      <div className="container-fluid">
        {/* Breadcrumb */}
        <nav className="breadcrumb-premium">
          <div className="breadcrumb-link">
            Home
          </div>
          <FaChevronRight className="breadcrumb-separator" />
          <span className="breadcrumb-current">Specialties</span>
        </nav>

        {/* Header intro */}
        <header className="all-specialties-header text-center">
          <h1 className="all-specialties-title">Our Specialties</h1>
          <p className="all-specialties-description">
            Through our 25+ specialties, we provide expert care across all
            major fields of advanced medical and surgical treatment. Experience
            comprehensive, patient-centered healing journeys.
          </p>
        </header>

        {/* Specialty cards - Responsive Grid */}
        <Row className="specialties-grid g-3 g-md-4">
          {specialties.map((specialty, index) => (
            <Col 
              key={index} 
              xs={12} 
              sm={6} 
              md={4} 
              lg={3} 
              xl={3}
              className="specialty-col"
            >
              <button
                onClick={() => handleClick(specialty.path)}
                className="specialty-button w-100"
                aria-label={`More about ${specialty.title} specialty`}
              >
                <SpecialtyCard {...specialty} />
              </button>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default AllSpecialities;
