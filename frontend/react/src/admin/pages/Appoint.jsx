import Navbar from '../../admin/components/Navbar';
import Sidebar from '../../admin/components/Sidebar';
import '../../admin/css/Messege.css';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Appoint = () => {
  const [appointmentData, setAppointmentData] = useState([]); // State for appointment data
  const [editingAppointment, setEditingAppointment] = useState(null); // State for managing edit
  const [formValue, setFormValue] = useState({
    id: '',
    name: '',
    email: '',
    mobile: '',
    doctorId: '',
    age: '',
    date: '',
    problem: ''
  });

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/appointment/show');
        const data = await response.json();
        setAppointmentData(data); // Set the appointment data to state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle edit button click
  const handleEdit = (appointment) => {
    setEditingAppointment(appointment.id);
    setFormValue(appointment); // Set form values to the selected appointment
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/appointment/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Send the appointment ID to the backend for deletion
      });

      const data = await response.json();
      console.log(data.message); // Show success message

      // Remove the deleted appointment from the current state
      setAppointmentData(appointmentData.filter((appt) => appt.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

 

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <Sidebar style={{ flex: '0 0 20%' }} />
        <div style={{ flex: '1' }}>
          <div style={{ marginTop: '90px', marginLeft: '20%' }}>
            <div className="box">
              <h1>Appointment Table</h1>

              {/* Display the appointment table */}
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Doctor Id</th>
                    <th>Age</th>
                    <th>Date</th>
                    <th>Problem</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {appointmentData.length > 0 ? (
                    appointmentData.map((appointment) => (
                      <tr key={appointment.id}>
                        <td>{appointment.id}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.email}</td>
                        <td>{appointment.mobile}</td>
                        <td>{appointment.doctorId}</td>
                        <td>{appointment.age}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.problem}</td>
                        <td>
                          <NavLink className="butt" to="/">Edit</NavLink>
                          <button
                            className="buttone"
                            onClick={() => handleDelete(appointment.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9">No appointments found</td>
                    </tr>
                  )}
                </tbody>
              </table>

             
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appoint;
