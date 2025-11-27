import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Pages.css";

import { ContactUsAPI } from "../services/allAPI";

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await ContactUsAPI(formData);
      toast.success(res.data?.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error("Error submitting message. Please try again.");
    }
  };

  return (
    <div className="contact-wrapper">
      <Container>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />

        {/* Intro + info */}
        <Row className="mb-5 align-items-start g-4">
          <Col lg={5}>
            <div className="pill-label">Contact Rynott</div>
            <h1 className="contact-title">
              We are here
              <span> whenever you need us.</span>
            </h1>
            <p className="contact-subtitle">
              Reach out for appointments, questions, or support. Our team will
              get back to you as quickly as possible.
            </p>

            <Card className="contact-info-card">
              <Card.Body>
                <ul className="contact-info-list">
                  <li>
                    <div className="contact-icon">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <span>Call us</span>
                      <a href="tel:+918589957733">+91 85899 57733</a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div>
                      <span>Email</span>
                      <a href="mailto:info@eduspherehospital.com">
                        info@eduspherehospital.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <span>Location</span>
                      <p className="mb-0">Kozhikode, Kerala, India</p>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Form */}
          <Col lg={7}>
            <Card className="contact-form-card">
              <Card.Body>
                <h3>Send us a message</h3>
                <p className="contact-form-desc">
                  Fill in a few details and our care team will respond with the
                  right information or next steps.
                </p>
                <Form className="mt-3" onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="formName">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="contact-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="contact-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mt-3" controlId="formMessage">
                    <Form.Label>Your message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message or query..."
                      className="contact-textarea"
                    />
                  </Form.Group>

                  <div className="contact-actions">
                    <Button type="submit" className="btn-contact-primary">
                      Send message
                    </Button>
                    <span className="contact-note">
                      For emergencies, please call the hospital directly.
                    </span>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
