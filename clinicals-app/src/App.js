// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddClinicals from './components/AddClinicals';
import AddPatient from './components/AddPatient';
import Home from './components/Home';
import { toast, ToastContainer } from 'react-toastify';


function app() {
    return (
      <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addPatient" element={<AddPatient />} />  
        <Route path="/addClinicals/:patientID"  element={<AddClinicals />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={2000} position="bottom-center" />
      </div>
    );
  }
  
  export default app;
  