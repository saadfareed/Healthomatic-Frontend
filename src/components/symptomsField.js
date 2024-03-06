import React, { useState } from 'react';
import './css/symptomsField.css';

const SymptomTracker = () => {
  const [customSymptom, setCustomSymptom] = useState('');
  const [symptoms, setSymptoms] = useState(['Fever', 'Cough', 'Fatigue']);
  const [showMore, setShowMore] = useState(false);

  const addCustomSymptom = () => {
    if (customSymptom.trim() !== '') {
      setSymptoms(prevSymptoms => [...prevSymptoms, customSymptom]);
      setCustomSymptom('');
    }
  };

  return (
    <div className='symptom-container'>
      <label className="symptom-tracker">Describe in your own words, or start typing and select symptoms from the list:</label>
      
    </div>
  );
};

export default SymptomTracker;
