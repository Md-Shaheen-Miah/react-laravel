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
            <li><NavLink style={{ textDecoration:'none'}} to="#">All Patients</NavLink></li>
            <li><NavLink style={{ textDecoration:'none'}} to="#">Add Patient</NavLink></li>
            <li><NavLink  style={{ textDecoration:'none'}} to="#">Patient History</NavLink></li>
          </ul>
        )}
      </li>
      <li>
        <button onClick={toggleAppointmentsDropdown}>
          Appointments
        </button>
        {isAppointmentsOpen && (
          <ul className="dropdown">
            <li><NavLink  style={{ textDecoration:'none'}} to="#">Today's Appointments</NavLink></li>
            <li><NavLink style={{ textDecoration:'none'}} to="#">New Appointment</NavLink></li>
            <li><NavLink style={{ textDecoration:'none'}} to="#">Contact with us</NavLink></li>
           
          </ul>
        )}
      </li>
      <li>
        <button onClick={toggleDoctorsDropdown}>
          Doctors
        </button>
        {isDoctorsOpen && (
          <ul className="dropdown">
            <li><NavLink style={{ textDecoration:'none'}} to="#">All Doctors</NavLink></li>
            <li><NavLink style={{ textDecoration:'none'}} to="#">Add Doctor</NavLink></li>
            <li><NavLink style={{ textDecoration:'none'}} to="#">Doctor Schedule</NavLink></li>
            <li><NavLink style={{ textDecoration:'none'}} to="#">Creat Schedule</NavLink></li>
          </ul>
        )}
      </li>
      <li>
        <button onClick={toggleStaffsDropdown}>
          Staffs
        </button>
        {isStaffsOpen && (
          <ul className="dropdown">
            <li><NavLink style={{ textDecoration:'none'}} to="#">All Staffs</NavLink></li>
            <li><NavLink  style={{ textDecoration:'none'}} to="#">Add Staff</NavLink></li>
            <li>Staff Schedule</li>
            <li>Creat Schedule</li>
          </ul>
        )}
      </li>
      <NavLink style={{color:'#ffffff', marginLeft:'10px', textDecoration:'none'}} to="/">Logout</NavLink>
    </ul>
  </div>
  )
}

export default Sidebar
