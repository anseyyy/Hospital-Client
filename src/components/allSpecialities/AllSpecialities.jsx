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
    path: "/dentistry",
  },
  {
    icon: <GiScalpel size={40} color="#d6ebedff" />,
    title: "Neuro Surgery",
    description:
      "The Department of Neurosurgery at Aster MIMS Kottakkal provides...",
    path: "/neuro-surgery",
  },
  {
    icon: <GiBrain size={40} color="#d6ebedff" />,
    title: "Neurology",
    description: "The Department of Neurology at Aster MIMS Kottakkal provides...",
    path: "/neurology",
  },
  {
    icon: <FaBone size={40} color="#d6ebedff" />,
    title: "Orthopaedics",
    description: "The Department of Orthopaedics at Aster MIMS Kottakkal is...",
    path: "/orthopaedics",
  },
  {
    icon: <FaHeart size={40} color="#d6ebedff" />,
    title: "Cardiology",
    description:
      "Comprehensive cardiac care with advanced diagnostics and treatments...",
    path: "/cardiology",
  },
  {
    icon: <FaEye size={40} color="#d6ebedff" />,
    title: "Ophthalmology",
    description:
      "Eye care services including cataract, retina, and vision correction...",
    path: "/ophthalmology",
  },
  {
    icon: <GiStethoscope size={40} color="#d6ebedff" />,
    title: "General Medicine",
    description: "Holistic medical care for a wide range of health conditions...",
    path: "/general-medicine",
  },
  {
    icon: <MdChildCare size={40} color="#d6ebedff" />,
    title: "Paediatrics",
    description:
      "Specialized care for infants, children, and adolescents...",
    path: "/paediatrics",
  },
  {
    icon: <FaBone size={40} color="#d6ebedff" />,
    title: "Rheumatology",
    description:
      "Expert care for arthritis, autoimmune, and musculoskeletal disorders...",
    path: "/rheumatology",
  },
];

const AllSpecialities = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section className="all-specialties-premium-section">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-premium">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
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

        {/* Specialty cards - 3x3 Grid */}
        <Row className="specialties-grid mb-4">
          <Col xs={4} className="specialty-col p-3">
            <button
              onClick={() => handleClick(specialties[0].path)}
              className="specialty-button w-100"
              aria-label={`More about ${specialties[0].title} specialty`}
            >
              <SpecialtyCard {...specialties[0]} />
            </button>
          </Col>
          <Col xs={4} className="specialty-col p-3">
            <button
              onClick={() => handleClick(specialties[1].path)}
              className="specialty-button w-100"
              aria-label={`More about ${specialties[1].title} specialty`}
            >
              <SpecialtyCard {...specialties[1]} />
            </button>
          </Col>
          <Col xs={4} className="specialty-col p-3">
            <button
              onClick={() => handleClick(specialties[2].path)}
              className="specialty-button w-100"
              aria-label={`More about ${specialties[2].title} specialty`}
            >
              <SpecialtyCard {...specialties[2]} />
            </button>
          </Col>
        </Row>

        <Row className="specialties-grid mb-4">
          <Col xs={4} className="specialty-col p-3">
            <button
              onClick={() => handleClick(specialties[3].path)}
              className="specialty-button w-100"
              aria-label={`More about ${specialties[3].title} specialty`}
            >
              <SpecialtyCard {...specialties[3]} />
            </button>
          </Col>
          <Col xs={4} className="specialty-col p-3">
            <button
              onClick={() => handleClick(specialties[4].path)}
              className="specialty-button w-100"
              aria-label={`More about ${specialties[4].title} specialty`}
            >
              <SpecialtyCard {...specialties[4]} />
            </button>
          </Col>
          <Col xs={4} className="specialty-col p-3">
            <button
              onClick={() => handleClick(specialties[5].path)}
              className="specialty-button w-100"
              aria-label={`More about ${specialties[5].title} specialty`}
            >
              <SpecialtyCard {...specialties[5]} />
            </button>
          </Col>
        </Row>

        <Row className="specialties-grid">
          <Col xs={4} className="specialty-col p-3">
            <button
              onClick={() => handleClick(specialties[6].path)}
              className="specialty-button w-100"
              aria-label={`More about ${specialties[6].title} specialty`}
            >
              <SpecialtyCard {...specialties[6]} />
            </button>
          </Col>
          <Col xs={4} className="specialty-col p-3">
            <button
              onClick={() => handleClick(specialties[7].path)}
              className="specialty-button w-100"
              aria-label={`More about ${specialties[7].title} specialty`}
            >
              <SpecialtyCard {...specialties[7]} />
            </button>
          </Col>
          <Col xs={4} className="specialty-col p-3">
            <button
              onClick={() => handleClick(specialties[8].path)}
              className="specialty-button w-100"
              aria-label={`More about ${specialties[8].title} specialty`}
            >
              <SpecialtyCard {...specialties[8]} />
            </button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AllSpecialities;
