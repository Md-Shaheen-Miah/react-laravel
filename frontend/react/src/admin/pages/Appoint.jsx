
import Navbar from '../../admin/components/Navbar'
import Sidebar from '../../admin/components/Sidebar'
import '../../admin/css/Messege.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Appoint = () => {

  const [appointments, setAppointments] = useState([]); // Ensure the initial state is an empty array

  // Fetch data from API
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/appointment/show') // Replace with your actual GET API endpoint
      .then(response => {
        if (Array.isArray(response.data)) { // Ensure the response is an array
          setAppointments(response.data);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

  // Delete an appointment
  const handleDelete = (id) => {
    axios.delete(`/api/appointments/${id}`) // Replace with your actual DELETE API endpoint
      .then(() => {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
      })
      .catch(error => {
        console.error('Error deleting data', error);
      });
  };
 
  return (
    <>
    <Navbar />
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <Sidebar style={{ flex: '0 0 20%' }} />
      <div style={{ flex: '1' }}>
        <div style={{marginTop:'90px',marginLeft:'20%'}}>
          <div className='box'>
            <h1>Appointment Table</h1>
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
      {appointments.length > 0 ? (
          appointments.map(appointment => (
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
                <button className='button' onClick={() => handleEdit(appointment.id)}>Edit</button>
                <button className='button' onClick={() => handleDelete(appointment.id)}>Delete</button>
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
  )
}
export default Appoint