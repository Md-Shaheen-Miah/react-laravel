import React from 'react'
import Navbar from '../../admin/components/Navbar'
import Sidebar from '../../admin/components/Sidebar'
import '../../admin/css/Admin.css';
 const Admin = () => {
  return (
       <>
       <Navbar/>
       <div style={{width:'100%'}}>
           <div style={{width:'20%', float:'left'}}><Sidebar/></div>
               <div style={{width:'80%', marginLeft:'20%', minHeight:'100vh'}}>
               <div className="admin-details">
            <div className="admin-header">
                <h1 style={{marginTop:'120px'}}>Admin Profile</h1>
            </div>
            <div className="admin-info">
                <div className="admin-card">
                    <img src="img/shaheen.jpg" alt="" className="admin-img" />
                    <h2>Md. Shaheen Miah</h2>
                    <p>Email: mdshaheen60101@gmail.com</p>
                    <p>Phone: +8801641160101</p>
                    <p>Role: Super Admin</p>
                </div>
                <div className="admin-details-section">
                    <h3>Admin Information</h3>
                    <ul>
                        <li><strong>Address:</strong> Sector-5, Uttara, Dhaka</li>
                        <li><strong>Department:</strong> Administration</li>
                        <li><strong>Joined:</strong> January 1, 2024</li>
                    </ul>
                </div>
            </div>
        </div>
               </div>
        </div>
       
       </>
  )
}
export default Admin