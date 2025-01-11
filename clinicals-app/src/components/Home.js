import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/clinicalsAPI/patient/')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the patient data!', error);
      });
  }, []);

  const deletePatient = (id) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      axios.delete(`http://localhost:8000/clinicalsAPI/patient/${id}`)
        .then(response => {
          setPatients(patients.filter(patient => patient._id !== id));
        })
        .catch(error => {
          console.error('There was an error deleting the patient!', error);
        });
    }
  };

  return (
    <div style={{ marginLeft: '25px' }}>
      <h1>Patient Details</h1>
      <table align="center">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient._id}>
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
              <td>{patient.age}</td>
              <td>
                <Link to={`/addClinicals/${patient._id}`}>Add Clinical Data</Link>
                <button 
                  onClick={() => deletePatient(patient._id)} 
                  style={{ marginLeft: '10px' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/addPatient">Add Patient</Link>
    </div>
  );
}

export default Home;