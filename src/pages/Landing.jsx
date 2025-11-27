import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMd,
  faClock,
  faHospital,
  faPhone,
  faStar,
  faHeartbeat,
  faShieldAlt,
  faStethoscope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SpecialtiesSection from "../components/specialtyCard/SpecialtiesSection";
import "./Pages.css";
import AppointmentForm from "../components/docterCard/AppointmentForm";

function Landing() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  
  // Doctor data for the hero section
  const doc = {
    name: "Dr. Amelia Verghese",
    specialty: "Senior Consultant, Cardiology"
  };

  return (
    <div className="landing-premium">
      {/* Hero */}
      <section className="hero-premium">
        <div className="hero-premium-bg" />
        <div className="hero-premium-inner">
          <div className="hero-premium-left">
            <span className="hero-badge">Rynott Care -  Since 1999</span>
            <h1>
              Compassionate care,
              <br />
              <span>powered by innovation.</span>
            </h1>
            <p>
              Rynott Hospital connects advanced medical technology with a
              warm, human touch, so every patient feels seen, heard, and
              cared for.
            </p>

            <div className="hero-actions">
              <Link to="/appointment" className="btn-primary-solid">
                Book an appointment
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link to="/meetRynott" className="btn-outline-ghost">
                Meet our experts
              </Link>
            </div>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <div className="dot online" />
                <span>Same‑day slots available</span>
              </div>
              <div className="hero-meta-item">
                <FontAwesomeIcon icon={faShieldAlt} />
                <span>Trusted by 10,000+ patients</span>
              </div>
            </div>
          </div>

          <div className="hero-premium-right">
            <div className="hero-card doctor-card">
              <div className="doctor-header">
                <div className="doctor-avatar">
                  <img src="/images/doctor-profile.jpg" alt="Senior Doctor" />
                </div>
                <div>
                  <h3>Dr. Amelia Verghese</h3>
                  <p>Senior Consultant, Cardiology</p>
                </div>
              </div>
              <div className="doctor-stats">
                <div>
                  <span>15+</span>
                  <p>Years experience</p>
                </div>
                <div>
                  <span>4.9</span>
                  <p>Patient rating</p>
                </div>
                <div>
                  <span>24/7</span>
                  <p>Emergency care</p>
                </div>
              </div>
              <button
              className="appointment-button-premium"
              onClick={() => setSelectedDoctor(doc)}
              aria-label={`Book appointment with ${doc.name}`}
            >
              Book An Appointment
            </button>

            </div>

            <div className="hero-card stats-float">
              <div>
                <span>10,000+</span>
                <p>Patients cared for</p>
              </div>
              <div>
                <span>50+</span>
                <p>Specialist doctors</p>
              </div>
              <div>
                <span>25+</span>
                <p>Years of trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section - appears when doctor is selected */}
      {selectedDoctor && (
        <section className="appointment-booking-section">
          <div className="appointment-booking-container">
            <h2 className="appointment-booking-title">Book Your Appointment with {selectedDoctor.name}</h2>
            <p className="appointment-booking-subtitle">Complete the form below to schedule your visit</p>
            <AppointmentForm 
              doctor={selectedDoctor} 
              onClose={() => setSelectedDoctor(null)} 
            />
            <button 
              className="cancel-appointment-btn" 
              onClick={() => setSelectedDoctor(null)}
            >
              Cancel Booking
            </button>
          </div>
        </section>
      )}

      {/* Highlights */}
      <section className="section-premium highlights-section">
        <div className="section-header">
          <h2>Why patients choose Rynott</h2>
          <p>
            Designed around comfort, safety, and outcomes – from your first
            click to your final recovery.
          </p>
        </div>
        <div className="highlight-grid">
          <div className="highlight-card">
            <div className="highlight-icon">
              <FontAwesomeIcon icon={faUserMd} />
            </div>
            <h3>Specialists in every key field</h3>
            <p>
              Get matched with experts in cardiology, neurology, orthopedics,
              pediatrics, and more – all under one roof.
            </p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <h3>Care that never sleeps</h3>
            <p>
              Our emergency and critical care teams stay on standby 24/7 so
              help is always ready when you need it.
            </p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <FontAwesomeIcon icon={faHospital} />
            </div>
            <h3>Technology you can trust</h3>
            <p>
              From digital diagnostics to minimally invasive procedures, we
              invest in proven, cutting‑edge equipment.
            </p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <h3>Seamless patient support</h3>
            <p>
              Reach us through chat, phone, or email, and track your visit
              details with our patient‑first support team.
            </p>
          </div>
        </div>
      </section>

      {/* About / Experience */}
      <section className="section-premium about-premium">
        <div className="about-grid">
          <div className="about-text">
            <h2>More than a hospital, a partner in your health journey.</h2>
            <p>
              At Rynott Hospital, every treatment plan is tailored to the
              individual, combining evidence‑based medicine with genuine
              empathy.
            </p>
            <p>
              Dedicated care teams, digital records, and coordinated follow‑ups
              ensure you spend less time worrying and more time healing.
            </p>

            <div className="about-points">
              <div>
                <FontAwesomeIcon icon={faHeartbeat} />
                <span>Integrated diagnostics & labs</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faStethoscope} />
                <span>Personalized care pathways</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faShieldAlt} />
                <span>International safety standards</span>
              </div>
            </div>

            <Link to="/meetRynott" className="text-link">
              Learn more about Rynott Hospital
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="about-timeline">
            <div className="timeline-card">
              <h3>25+ years of excellence</h3>
              <p>
                Starting as a small nursing home, Rynott has grown into a
                multi‑specialty center serving thousands of families.
              </p>
            </div>
            <div className="timeline-card">
              <h3>Patient‑first digital systems</h3>
              <p>
                Online bookings, digital reports, and coordinated care teams
                keep your entire journey connected and transparent.
              </p>
            </div>
            <div className="timeline-card">
              <h3>Community‑driven wellness</h3>
              <p>
                Regular health camps, education sessions, and screenings
                support healthier communities beyond the hospital walls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties preview */}
      <section className="section-premium specialties-preview">
        <div className="section-header">
          <h2>Explore our specialties</h2>
          <p>
            Discover departments designed to offer complete care from
            diagnosis to recovery.
          </p>
        </div>
        <SpecialtiesSection />
        <div className="specialties-cta">
          <Link to="/all-specialities" className="btn-outline-ghost">
            View all specialties
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-premium testimonials-premium">
        <div className="section-header">
          <h2>Stories from our patients</h2>
          <p>
            Real experiences from people who trusted Rynott with their
            health.
          </p>
        </div>
        <div className="testimonials-grid-premium">
          <div className="testimonial-card-premium">
            <div className="testimonial-header">
              <div className="avatar-circle">JD</div>
              <div>
                <h3>John Daniel</h3>
                <span>Cardiac surgery patient</span>
              </div>
            </div>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
            <p>
              From admission to discharge, every team member made sure I felt
              safe, informed, and genuinely cared for.
            </p>
          </div>

          <div className="testimonial-card-premium">
            <div className="testimonial-header">
              <div className="avatar-circle">JS</div>
              <div>
                <h3>Janet S.</h3>
                <span>Emergency care</span>
              </div>
            </div>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
            <p>
              The emergency team responded in minutes, and the follow‑up
              care was just as impressive as the first response.
            </p>
          </div>

          <div className="testimonial-card-premium">
            <div className="testimonial-header">
              <div className="avatar-circle">MJ</div>
              <div>
                <h3>Mahesh J.</h3>
                <span>Long‑term treatment</span>
              </div>
            </div>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
            <p>
              Ongoing check‑ins, clear communication, and a team that
              remembers my history made all the difference.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-premium final-cta">
        <div className="final-cta-inner">
          <div>
            <h2>Ready to prioritise your health?</h2>
            <p>
              Book a visit in minutes or reach our care team anytime for
              guidance.
            </p>
          </div>
          <div className="final-cta-actions">
            <Link to="/appointment" className="btn-primary-solid">
              Book appointment
            </Link>
            <Link to="/contactus" className="btn-outline-ghost">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;