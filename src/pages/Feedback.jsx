import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaCommentDots, FaSmile, FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Pages.css";
import { FeedbackAPI } from "../services/allAPI";

function Feedback() {
  const [FeedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFeedbackData({ ...FeedbackData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await FeedbackAPI(FeedbackData);
      toast.success(res.data?.message || "Feedback submitted successfully!");
      setFeedbackData({ name: "", email: "", feedback: "" });
    } catch {
      toast.error("Error submitting feedback. Please try again.");
    }
  };

  return (
    <div className="feedback-wrapper">
      <Container>
        <ToastContainer position="top-center" autoClose={3000} />

        {/* Intro */}
        <Row className="mb-4 text-center">
          <Col lg={8} className="mx-auto">
            <div className="pill-label">
              <FaCommentDots /> Patient Feedback
            </div>
            <h1 className="feedback-title">
              Your experience
              <span> helps us care better.</span>
            </h1>
            <p className="feedback-subtitle">
              Share what went well and where we can improve. Every insight
              guides us towards safer, kinder, and more efficient care.
            </p>
          </Col>
        </Row>

        {/* Main card */}
        <Row className="mb-5 justify-content-center">
          <Col lg={8}>
            <Card className="feedback-card">
              <Card.Body>
                <div className="feedback-card-header">
                  <div className="feedback-icon-badge">
                    <FaSmile />
                  </div>
                  <div>
                    <h3>Tell us about your visit</h3>
                    <p>
                      Your feedback is confidential and helps us enhance the
                      experience for every patient and family.
                    </p>
                  </div>
                  <div className="feedback-stars-hint">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>

                <Form className="mt-3" onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="formName">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={FeedbackData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="feedback-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={FeedbackData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="feedback-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mt-3" controlId="formFeedback">
                    <Form.Label>Your feedback</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="feedback"
                      value={FeedbackData.feedback}
                      onChange={handleChange}
                      placeholder="Share your thoughts about our doctors, staff, facilities, or overall experience..."
                      className="feedback-textarea"
                    />
                  </Form.Group>

                  <div className="feedback-actions">
                    <Button type="submit" className="btn-feedback-primary">
                      Submit feedback
                    </Button>
                    <span className="feedback-note">
                      Thank you for taking a moment to help us improve.
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

export default Feedback;
