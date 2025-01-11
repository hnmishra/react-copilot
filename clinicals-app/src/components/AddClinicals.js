import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../App.css';

function AddClinicals() {
  const { patientID } = useParams();
  const [patient, setPatient] = useState({});
  const [componentName, setComponentName] = useState('');
  const [componentValue, setComponentValue] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/clinicalsAPI/patient/${patientID}`)
      .then(response => {
        setPatient(response.data);
      })
      .catch(error => {
        console.error('There was an error retrieving the patient data!', error);
      });
  }, [patientID]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const clinicalData = {
      patientID,
      componentName,
      componentValue
    };
    console.log('clinicalData:', clinicalData);
    // axios.post('http://localhost:8000/clinicalsapi/clinical', clinicalData)
  axios.post('http://localhost:8000/clinicalsapi/clinical', {
    "componentName": componentName,
    "componentValue": componentValue,
    "patient": patientID
  })
       .then(response => {
        console.log('Clinical data saved successfully', response.data);
      })
      .catch(error => {
        console.error('There was an error saving the clinical data!', error);
      });
  };

  return (
    <div>
      <h1>Patient Details</h1>
      {patient.firstName ? (
        <div>
          <p>First Name: {patient.firstName} {patient.lastName}</p>
          <p>Age: {patient.age}</p>
        </div>
      ) : (
        <p>There was an error retrieving the patient data!</p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Component Name:</label>
          <input
            type="text"
            value={componentName}
            onChange={(e) => setComponentName(e.target.value)}
          />
        </div>
        <div>
          <label>Component Value:</label>
          <input
            type="text"
            value={componentValue}
            onChange={(e) => setComponentValue(e.target.value)}
          />
        </div>
        <button type="submit">Save Clinical Data</button>
      </form>
      <Link to="/">Go back to the patient list</Link>
    </div>
  );
}
export default AddClinicals;