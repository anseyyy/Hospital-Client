import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-premium">
      <Container>
        <Row className="gy-4 align-items-start">
          {/* Brand + tagline */}
          <Col md={4}>
            <div className="footer-brand">
              <div className="footer-logo-mark">W</div>
              <div>
                <h5>WellSpring Hospital</h5>
                <p>Caring for every learner, patient, and family with empathy and expertise.</p>
              </div>
            </div>
          </Col>

          {/* Quick links */}
          <Col md={4}>
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/all-specialities">Our Specialties</Link>
              </li>
              <li>
                <Link to="/apointment">Book Appointment</Link>
              </li>
              <li>
                <Link to="/meetWellSpring">Meet WellSpring</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4}>
            <h6 className="footer-heading">Contact</h6>
            <ul className="footer-contact">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+918589957733">+91 85899 57733</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:info@wellspringhospital.com">
                  info@wellspringhospital.com
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Kozhikode, Kerala, India</span>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="pt-3 mt-4 footer-bottom">
          <Col xs={12} md={6}>
            <p className="mb-0">
              © 2025 WellSpring Hospital. All rights reserved.
            </p>
          </Col>
          <Col xs={12} md={6} className="text-md-end footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms">Terms of Use</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
