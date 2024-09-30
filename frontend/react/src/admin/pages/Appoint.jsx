
import Navbar from '../../admin/components/Navbar'
import Sidebar from '../../admin/components/Sidebar'
import '../../admin/css/Messege.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const Contact = () => {

  const [data, setData] = useState([]);

  // Fetch data using GET API
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/appointment/show')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  // Delete data using DELETE API
  const handleDelete = (id) => {
    // Show SweetAlert confirmation
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // If confirmed, proceed with deletion
        axios.delete(`http://127.0.0.1:8000/api/appointment/delete/${id}`)
          .then(() => {
            // Filter out the deleted item from the state
            setData(data.filter(item => item.id !== id));
            
            // Show success message
            Swal.fire(
              'Deleted!',
              'Your appointment has been deleted.',
              'success'
            );
          })
          .catch((error) => {
            console.error("There was an error deleting the data!", error);
            
            // Show error message if delete fails
            Swal.fire(
              'Error!',
              'There was an issue deleting the appointment.',
              'error'
            );
          });
      }
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
            <h1>Appointment from Client</h1>
            <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Doctor</th>
              <th>Age</th>
              <th>Date</th>
              <th>Problem</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.doctor}</td>
                <td>{item.date}</td>
                <td>{item.problem}</td>
                <td>
                  <button className='buttone' onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
        </div>
      </div>
    </div>
  </>
  
  
  
  )
}

export default Contact
