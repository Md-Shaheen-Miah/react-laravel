import React from 'react'
import Navbar from '../../admin/components/Navbar'
import Sidebar from '../../admin/components/Sidebar'
import '../../admin/css/Messege.css';
const Contact = () => {
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
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
                <td>Data 4</td>
                <td></td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
            </tr>
           
           
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
