
import Navbar from '../../admin/components/Navbar'
import Sidebar from '../../admin/components/Sidebar'
import '../../admin/css/Messege.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = () => {

  const [data, setData] = useState([]);

  // Fetch data using GET API
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/contact/show')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  // Delete data using DELETE API
  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/contact/delete/${id}`)
      .then(() => {
        // Filter out the deleted item from the state
        setData(data.filter(item => item.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the data!", error);
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
            <h1>Message from Client</h1>
            <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{item.message}</td>
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
