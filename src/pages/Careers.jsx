import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaUserMd,
  FaLaptopMedical,
  FaHandsHelping,
  FaBriefcase,
} from "react-icons/fa";
import "./Pages.css";

function Careers() {
  return (
    <div className="careers-premium-wrapper">
      <Container>
        {/* Hero / Intro */}
        <Row className="text-center mb-5">
          <Col lg={8} className="mx-auto">
            <span className="pill-label">Careers at WellSpring</span>
            <h1 className="careers-premium-title">
              Build a career
              <span> where every day changes lives.</span>
            </h1>
            <p className="careers-premium-subtitle">
              Join multidisciplinary teams of doctors, nurses, and specialists
              delivering safe, compassionate, and innovative care across
              Kozhikode.
            </p>
          </Col>
        </Row>

        {/* Highlights */}
        <Row className="g-4 mb-5">
          <Col md={4}>
            <Card className="career-premium-card">
              <Card.Body>
                <div className="career-icon doctors">
                  <FaUserMd />
                </div>
                <Card.Title>Medical excellence</Card.Title>
                <Card.Text>
                  Collaborate with experienced clinicians across key
                  specialties, supported by integrated care teams.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="career-premium-card">
              <Card.Body>
                <div className="career-icon innovation">
                  <FaLaptopMedical />
                </div>
                <Card.Title>Innovation & learning</Card.Title>
                <Card.Text>
                  Work with advanced diagnostics, digital tools, and continuous
                  training to grow your skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="career-premium-card">
              <Card.Body>
                <div className="career-icon community">
                  <FaHandsHelping />
                </div>
                <Card.Title>Community impact</Card.Title>
                <Card.Text>
                  Support outreach clinics, health camps, and programs that
                  make quality care more accessible.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Current openings */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="career-openings-premium-card">
              <Card.Body>
                <div className="career-openings-header-premium">
                  <div className="career-icon openings">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h3>Current openings</h3>
                    <p>
                      We are seeking passionate professionals to join our
                      growing healthcare network.
                    </p>
                  </div>
                </div>
                <ul className="career-openings-list-premium">
                  <li>Senior Cardiologist</li>
                  <li>Pediatric Nurse</li>
                  <li>IT Systems Administrator</li>
                  <li>Healthcare Data Analyst</li>
                  <li>Patient Care Coordinator</li>
                </ul>
                <div className="career-apply-premium">
                  <p>
                    Send your updated resume with the role in the subject line
                    to:
                  </p>
                  <a
                    href="mailto:wellspringhospital@gmail.com"
                    className="career-email-premium"
                  >
                    wellspringhospital@gmail.com
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>
    </div>
  );
}

export default Careers;
