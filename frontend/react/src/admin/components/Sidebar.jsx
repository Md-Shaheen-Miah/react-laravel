import React from 'react'
import  { useState } from 'react';
import '../../admin/css/Sidebar.css';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {

    const [isPatientsOpen, setIsPatientsOpen] = useState(false);
    const [isAppointmentsOpen, setIsAppointmentsOpen] = useState(false);
    const [isDoctorsOpen, setIsDoctorsOpen] = useState(false);
    const [isStaffsOpen, setIsStaffsOpen] = useState(false);
  
    const togglePatientsDropdown = () => {
      setIsPatientsOpen(!isPatientsOpen);
    };
  
    const toggleAppointmentsDropdown = () => {
      setIsAppointmentsOpen(!isAppointmentsOpen);
    };
  
    const toggleDoctorsDropdown = () => {
      setIsDoctorsOpen(!isDoctorsOpen);
    };
    const toggleStaffsDropdown = () => {
        setIsStaffsOpen(!isStaffsOpen);
      };

  return (
    <div className="sidebar">
    <h2> Dashboard</h2>
    <ul>
      <li>
        <button onClick={togglePatientsDropdown}>
          Patients
        </button>
        {isPatientsOpen && (
          <ul className="dropdown">
            <li>All Patients</li>
            <li>Add Patient</li>
            <li>Patient History</li>
          </ul>
        )}
      </li>
      <li>
        <button onClick={toggleAppointmentsDropdown}>
          Appointments
        </button>
        {isAppointmentsOpen && (
          <ul className="dropdown">
            <li>Today's Appointments</li>
            <li>New Appointment</li>
            <li>Appointment History</li>
          </ul>
        )}
      </li>
      <li>
        <button onClick={toggleDoctorsDropdown}>
          Doctors
        </button>
        {isDoctorsOpen && (
          <ul className="dropdown">
            <li>All Doctors</li>
            <li>Add Doctor</li>
            <li>Doctor Schedule</li>
          </ul>
        )}
      </li>
      <li>
        <button onClick={toggleStaffsDropdown}>
          Staffs
        </button>
        {isStaffsOpen && (
          <ul className="dropdown">
            <li>All Staffs</li>
            <li>Add Staff</li>
            <li>Staff Schedule</li>
            <li>Add Schedule</li>
          </ul>
        )}
      </li>
      <NavLink style={{color:'#ffffff', marginLeft:'10px', textDecoration:'none'}} to="/">Logout</NavLink>
    </ul>
  </div>
  )
}

export default Sidebar
