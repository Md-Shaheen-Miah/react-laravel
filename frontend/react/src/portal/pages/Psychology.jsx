import React from 'react'
import '../../portal/css/Psychology.css'
const Psychology = () => {
  return (
    <div className="about-container">
      <div className="doctor-info">
        <img src="doctor-photo.jpg" alt="Dr. John Doe" className="doctor-photo" />
        <h1>Dr. John Doe</h1>
        <h3>Specialist in Cardiology</h3>
      </div>
      
      <div className="doctor-description">
        <h2>About Dr. John Doe</h2>
        <p>
          Dr. John Doe is a highly experienced and compassionate medical professional
          with over 20 years of expertise in Cardiology. His approach focuses on 
          providing personalized care, ensuring each patient feels heard and supported.
        </p>
        
        <h3>Education & Training</h3>
        <ul>
          <li>Medical School: XYZ University</li>
          <li>Residency: ABC Hospital</li>
          <li>Fellowship: Heart Institute, Cardiovascular Medicine</li>
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
      </div>
    </div>
  )
}
export  default Psychology