import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { FaHospital, FaUsers, FaHeartbeat, FaAward } from "react-icons/fa";
import "./Pages.css";

function MeetWellSpring() {
    return (
        <div className="meetwellspring-wrapper">
            {/* Hero Section with Background Image */}
            <div className="meetwellspring-hero">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={10}>
                            <span className="pill-label">About WellSpring Health</span>
                            <h1 className="meetwellspring-title">
                                A network built around{" "}
                                <span>trust, expertise, and compassion.</span>
                            </h1>
                            <p className="meetwellspring-subtitle">
                                WellSpring Hospitals bring together experienced clinicians,
                                advanced technology, and a calm healing environment to serve
                                families across Kozhikode.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* MAIN CONTENT */}
            <Container>
                {/* Mission / Vision */}
                <Row className="g-4 mb-5">
                    <Col md={6}>
                        <Card className="info-card">
                            <Image
                                src="/images/about-mission.jpg"
                                alt="Mission"
                                className="card-side-img"
                                fluid
                            />
                            <Card.Body>
                                <div className="info-icon mission">
                                    <FaHeartbeat />
                                </div>
                                <Card.Title>Our Mission</Card.Title>
                                <Card.Text>
                                    To deliver world-class, evidence-based care that is accessible,
                                    humane, and centered around every patient’s unique journey.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card className="info-card">
                            <Image
                                src="/images/about-vision.jpg"
                                alt="Vision"
                                className="card-side-img"
                                fluid
                            />
                            <Card.Body>
                                <div className="info-icon vision">
                                    <FaHospital />
                                </div>
                                <Card.Title>Our Vision</Card.Title>
                                <Card.Text>
                                    To become Kerala’s most trusted healthcare network, where
                                    innovation and empathy work together to create healthier
                                    communities.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Stats strip */}
                <Row className="mb-5">
                    <Col>
                        <div className="stats-strip">
                            <div className="stat-item-premium">
                                <span className="stat-number-premium">500+</span>
                                <span className="stat-label-premium">Doctors & staff</span>
                            </div>
                            <div className="stat-item-premium">
                                <span className="stat-number-premium">3</span>
                                <span className="stat-label-premium">Hospitals in Kozhikode</span>
                            </div>
                            <div className="stat-item-premium">
                                <span className="stat-number-premium">24/7</span>
                                <span className="stat-label-premium">Emergency care</span>
                            </div>
                            <div className="stat-item-premium">
                                <span className="stat-number-premium">2024</span>
                                <span className="stat-label-premium">Awarded for safety & innovation</span>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Grid with images */}
                <Row className="g-4 mb-5">
                    <Col md={4}>
                        <Card className="info-card small">
                            <Image
                                src="/images/about-team.jpg"
                                alt="Team"
                                className="card-top-img"
                                fluid
                            />
                            <Card.Body>
                                <div className="info-icon team">
                                    <FaUsers />
                                </div>
                                <Card.Title>Dedicated people</Card.Title>
                                <Card.Text>
                                    Multidisciplinary teams of doctors, nurses, and support staff
                                    collaborate to ensure seamless, coordinated care.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="info-card small">
                            <Image
                                src="/images/about-awards.jpg"
                                alt="Awards"
                                className="card-top-img"
                                fluid
                            />
                            <Card.Body>
                                <div className="info-icon awards">
                                    <FaAward />
                                </div>
                                <Card.Title>Recognised excellence</Card.Title>
                                <Card.Text>
                                    Consistently recognised for high standards in patient safety,
                                    clinical outcomes, and innovation in care delivery.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="info-card small">
                            <Image
                                src="/images/about-network.jpg"
                                alt="Network"
                                className="card-top-img"
                                fluid
                            />
                            <Card.Body>
                                <div className="info-icon network">
                                    <FaHospital />
                                </div>
                                <Card.Title>Connected network</Card.Title>
                                <Card.Text>
                                    Locations across East, Central, and South Kozhikode make
                                    quality care easier to access for thousands of families.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Closing */}
                <Row className="justify-content-center mb-5">
                    <Col lg={9}>
                        <Card className="closing-card">
                            <Image
                                src="/images/about-care.jpg"
                                alt="Care"
                                className="card-side-img"
                                fluid
                            />
                            <Card.Body>
                                <h3>Why WellSpring feels different</h3>
                                <p>
                                    For WellSpring, healthcare is not only about diagnosing and
                                    treating illness—it is about listening carefully, guiding
                                    confidently, and standing beside you at every step of your
                                    health journey.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MeetWellSpring;
