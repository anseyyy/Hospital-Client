import React, { useState } from "react";
import "./DoctorAppointmentPage.css";
import AppointmentForm from "../docterCard/AppointmentForm";
import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Arjun Nair",
    title: "Chief Consultant – Cardiology",
    qualifications: "MBBS, MD (Cardiology), FACC",
    description:
      "Dr. Arjun Nair is a leading cardiologist with 15+ years of expertise in advanced cardiac care and interventions .",
    image: "/images/dr-arjun.jpg",
    hospital: "WellSpring Heart Center, Kozhikode",
  },
  {
    name: "Dr. Meera Pillai",
    title: "Senior Consultant – Neurology",
    qualifications: "MBBS, MD (Neurology)",
    description:
      "  Dr. Meera Pillai is a specialist in neurology, focusing on stroke, epilepsy, and neurodegenerative disease management.  ",
    image: "/images/dr-meera.jpg",
    hospital: "WellSpring Multi-specialty Hospital, Kozhikode",
  },
  {
    name: "Dr. Vivek Menon",
    title: "Consultant – Orthopaedics",
    qualifications: "MBBS, MS (Orthopaedics)",
    description:
      "Dr. Vivek Menon provides expert orthopedic care, including joint replacements, trauma treatment, and sports injury solutions.  ",
    image: "/images/dr-vivek.jpg",
    hospital: "WellSpring Orthopaedic Center, Kozhikode",
  },
  {
    name: "Dr. Anjali Kumar",
    title: "Senior Consultant – Paediatrics",
    qualifications: "MBBS, MD (Paediatrics)",
    description:
      "Dr. Anjali Kumar delivers comprehensive pediatric services, emphasizing preventive health and chronic condition management.  ",
    image: "/images/dr-anjali-kumar.jpg",
    hospital: "WellSpring Children’s Hospital, Kozhikode",
  },
  {
    name: "Dr. Rajesh S",
    title: "Consultant – Gastroenterology",
    qualifications: "MBBS, MD (General Medicine), DM (Gastroenterology)",
    description:
      "Dr. Rajesh S is a gastroenterology expert with extensive experience in gastrointestinal diseases and advanced endoscopic care.  ",
    image: "/images/dr-rajesh.jpg",
    hospital: "WellSpring Digestive Health Center, Kozhikode",
  },
];

const DoctorAppointmentPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <section className="doctor-appointment-premium-section container">
      {/* Breadcrumb */}
      <nav className="breadcrumb-premium mb-4">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Appointment</span>
      </nav>

      <h2 className="page-title-premium text-center mb-5">Meet Our Specialists</h2>

      <div className="doctor-grid-premium">
        {doctors.map((doc, index) => (
          <article className="doctor-card-premium" key={index}>
            <img src={doc.image} alt={doc.name} className="doctor-image-premium" />
            <h3 className="doctor-name-premium">{doc.name}</h3>
            <p className="doctor-title-premium">{doc.title}</p>
            <p className="doctor-qualifications-premium">{doc.qualifications}</p>
            <p className="doctor-description-premium">{doc.description}</p>
            <p className="doctor-hospital-premium">{doc.hospital}</p>
            <button
              className="appointment-button-premium"
              onClick={() => setSelectedDoctor(doc)}
              aria-label={`Book appointment with ${doc.name}`}
            >
              Book An Appointment
            </button>
          </article>
        ))}
      </div>

      {/* Appointment Form Modal */}
      {selectedDoctor && (
        <div className="appointment-modal-premium">
          <div className="appointment-form-premium">
            <button
              className="close-btn-premium"
              onClick={() => setSelectedDoctor(null)}
              aria-label="Close appointment form"
            >
              ×
            </button>
            <AppointmentForm doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default DoctorAppointmentPage;
