import React, { useEffect, useState } from "react";
import { Container, Table, Card } from "react-bootstrap";
import "./Admin.css";
import {
  GetAppointmentAPI,
  GetContactUsAPI,
  GetFeedbackAPI,
} from "../services/allAPI";

function Admin() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch appointments with error handling
    GetAppointmentAPI()
      .then((res) => setAppointments(res.data || []))
      .catch((err) => {
        console.error("Error fetching appointments:", err);
        setAppointments([]); // Set to empty array on error
      });

    // Fetch contacts with error handling
    GetContactUsAPI()
      .then((res) => setContacts(res.data || []))
      .catch((err) => {
        console.error("Error fetching contacts:", err);
        setContacts([]); // Set to empty array on error
      });

    // Fetch feedback with error handling
    GetFeedbackAPI()
      .then((res) => setFeedbacks(res.data || []))
      .catch((err) => {
        console.error("Error fetching feedback:", err);
        setFeedbacks([]); // Set to empty array on error
      });
  }, []);

  return (
    <Container className="admin-container mt-4">
      {/* Appointment Dashboard */}
      <Card className="dashboard-card shadow-sm mb-5">
        <Card.Header className="dashboard-header bg-primary text-white text-center">
          <h3>📋 Appointment Dashboard</h3>
          <p>Manage patient bookings and confirmations</p>
        </Card.Header>
        <Card.Body>
          {appointments.length > 0 ? (
            <Table
              striped
              bordered
              hover
              responsive
              className="align-middle text-center"
            >
              <thead className="table-header">
                <tr>
                  <th>#</th>
                  <th>Patient Name</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt, index) => (
                  <tr key={appt._id}>
                    <td>{index + 1}</td>
                    <td className="fw-semibold">{appt.patientName}</td>
                    <td>{appt.doctorName || appt.doctor}</td>
                    <td>{new Date(appt.date).toLocaleDateString()}</td>
                    <td>{appt.timeSlot}</td>
                    <td>{appt.phoneNumber}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="text-muted text-center">No appointments found</p>
          )}
        </Card.Body>
      </Card>

      {/* Contact Messages Dashboard */}
      <Card className="dashboard-card shadow-sm mb-5">
        <Card.Header className="dashboard-header bg-success text-white text-center">
          <h3>📩 Contact Messages</h3>
          <p>View messages submitted from Contact Us page</p>
        </Card.Header>
        <Card.Body>
          {contacts.length > 0 ? (
            <Table
              striped
              bordered
              hover
              responsive
              className="align-middle text-center"
            >
              <thead className="table-header">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr key={contact._id}>
                    <td>{index + 1}</td>
                    <td className="fw-semibold">{contact.name}</td>
                    <td>{contact.email}</td>
                    <td className="text-start">{contact.message}</td>
                    <td>{new Date(contact.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="text-muted text-center">No contact messages found</p>
          )}
        </Card.Body>
      </Card>

      {/* Feedback Dashboard */}
      <Card className="dashboard-card shadow-sm">
        <Card.Header className="dashboard-header bg-info text-white text-center">
          <h3>💬 Feedback</h3>
          <p>View feedback submitted by users</p>
        </Card.Header>
        <Card.Body>
          {feedbacks.length > 0 ? (
            <Table
              striped
              bordered
              hover
              responsive
              className="align-middle text-center"
            >
              <thead className="table-header">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Feedback</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.map((fb, index) => (
                  <tr key={fb._id}>
                    <td>{index + 1}</td>
                    <td className="fw-semibold">{fb.name}</td>
                    <td>{fb.email}</td>
                    <td className="text-start">{fb.feedback}</td>
                    <td>{new Date(fb.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="text-muted text-center">No feedback found</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Admin;
