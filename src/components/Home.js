import React, { useState } from "react";
import './Home.css';
import GenderField from './genderField';


export default function Home() {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [healthCardNumber, setHealthCardNumber] = useState("");
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, dateOfBirth, healthCardNumber, appointmentTime, age });
  };

  return (
    <div className="mainContainer">
      <div className="formContainer">
        <h2 className="title">Personal and Appointment Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <GenderField />
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Healthcard Number</label>
            <input
              type="text"
              value={healthCardNumber}
              placeholder="Enter your name"
              onChange={(e) => setHealthCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Appointment Timings</label>
            <input
              type="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>How old are your?</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <button type="submit">Thank you for submitting</button>
        </form>
      </div>
    </div>
  );
}