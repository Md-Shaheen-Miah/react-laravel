import React from 'react'
import Navbar from '../../portal/components/Navbar'
import Footer from '../../portal/components/Footer'
import { NavLink } from 'react-router-dom'
import '../../portal/css/Psychology.css'
const Psychology = () => {
  return (

    <div>
      <Navbar/>
    <div className="about-container">
      <div className="doctor-info">
        <img src="img/Photoroom-20240914_180122_1.png" alt="" className="doctor-photo" />
        <h1>Dr. Rakibul Islam</h1>
        <h3>Specialist in Psychology</h3>
      </div>
      
      <div className="doctor-description">
        <h2>About Dr. Rakibul Islam</h2>
        <p>
          Dr. Rakibul is a highly experienced and compassionate medical professional
          with over 20 years of expertise in Psychology. His approach focuses on 
          providing personalized care, ensuring each patient feels heard and supported.
        </p>
        
        <h3>Education & Training</h3>
        <ul>
          <li>Medical School: Dhaka Medical College</li>
          <li>Residency: PG Hospital</li>
          <li>Fellowship: Brain Institute, Psycho Medicine</li>
        </ul>
        
        <h3>Specialties</h3>
        <ul>
          <li>Cardiac Surgery</li>
          <li>Heart Failure Treatment</li>
          <li>Interventional Cardiology</li>
        </ul>
        
        <h3>Contact Information</h3>
        <p>Email: johndoe@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <div className="button">
        <NavLink to="/Appointment" style={{backgroundColor:'#4fb497',padding:'10px',color:'#ffffff',borderRadius:'10px',textDecoration:'none'}}>Appointment Now</NavLink>
      </div>
      </div>
      
    </div>
    <Footer/>
    </div>
  )
}
export  default Psychology