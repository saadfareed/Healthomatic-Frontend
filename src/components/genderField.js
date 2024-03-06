import React, { useState } from 'react';
import './css/genderField.css'; // Import the CSS file

function GenderField() {
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="gender-field">
      <label className="gender-label">Gender</label>
      <select 
        value={gender}
        onChange={handleGenderChange} 
        className="gender-select"
        required
      >
        <option value="" className="select-gender-option">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

export default GenderField;
