import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AppointmentAPI } from "../../services/allAPI";

const AppointmentForm = ({ doctor, onClose }) => {
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  if (!doctor) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!patientName || !email || !phoneNumber || !date || !timeSlot) {
      toast.error("⚠️ Please fill all fields");
      return;
    }

    // Strict validation matches backend requirements
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast.warning("⚠️ Phone number must be exactly 10 digits");
      return;
    }

    const emailRegex = /.+\@.+\..+/;
    if (!emailRegex.test(email)) {
      toast.warning("⚠️ Please post a valid email address");
      return;
    }

    const appointmentData = {
      doctorName: doctor?.name || "",
      patientName,
      email,
      phoneNumber,
      date,
      timeSlot,
    };

    try {
      const res = await AppointmentAPI(appointmentData);

      if (res.status === 200 || res.status === 201) {
        toast.success("✅ Appointment booked successfully!", {
          autoClose: 2000,
        });
        setPatientName("");
        setEmail("");
        setPhoneNumber("");
        setDate("");
        setTimeSlot("");
        // Close modal after successful booking
        setTimeout(() => {
          if (onClose) {
            onClose();
          } else {
            window.location.href = "/";
          }
        }, 2000);
      } else {
        toast.error(`❌ Error: ${res.data?.message || "Failed to book appointment"}`);
      }
    } catch (error) {
      toast.error("❌ Server error, please try again later.");
    }
  };

  // Available slots
  const allSlots = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"];

  // Filter slots based on current time if "today" is selected
  const getAvailableSlots = () => {
    if (!date) return allSlots;

    const today = new Date().toISOString().split("T")[0];
    if (date !== today) {
      return allSlots;
    }

    const now = new Date();
    return allSlots.filter((slot) => {
      const [time, modifier] = slot.split(" ");
      let [hours, minutes] = time.split(":");

      if (hours === "12") hours = "00";
      if (modifier === "PM") hours = parseInt(hours, 10) + 12;

      const slotTime = new Date();
      slotTime.setHours(hours, minutes, 0, 0);

      return slotTime > now;
    });
  };

  const availableSlots = getAvailableSlots();

  return (
    <div>
      <h2 className="appointment-form-title">Book Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form-element">
        <label className="form-label">
          Doctor:
          <input
            className="form-input"
            type="text"
            value={doctor.name}
            readOnly
            aria-readonly="true"
          />
        </label>
        <label className="form-label">
          Your Name:
          <input
            className="form-input"
            type="text"
            placeholder="Enter your name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </label>
        <label className="form-label">
          Email:
          <input
            className="form-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="form-label">
          Phone Number:
          <input
            className="form-input"
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <label className="form-label">
          Date:
          <input
            className="form-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            min={new Date().toISOString().split("T")[0]}
          />
        </label>
        <label className="form-label">
          Time:
          <select
            className="form-input"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
          >
            <option value="">Select a time</option>
            {availableSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="submit-btn-premium">
          Confirm Appointment
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default AppointmentForm;
