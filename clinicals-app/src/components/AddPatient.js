import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../App.css';

function AddPatient() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPatient = { firstName, lastName, age };

    axios.post('http://localhost:8000/clinicalsAPI/patient/', newPatient)
      .then(response => {
        toast.success('Patient added successfully!');
        console.log('Patient added successfully:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error adding the patient!', error);
      });
  };

  return (
    <div>
      <h1>Add Patient</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Patient</button>
      </form>
      <Link to="/">Go back to the patient list</Link>
    </div>
  );
}

export default AddPatient;