
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './portal/Home';
import About from './portal/pages/About'
import Service from './portal/pages/Service'
import Feature from './portal/pages/Feature'
import Doctor from './portal/pages/Doctor'
import Appointment from './portal/pages/Appointment'
import Testimonial from './portal/pages/Testimonial'
import Contact from './portal/pages/Contact'
import Login from './portal/pages/Login'
import Psychology from './portal/pages/Psychology'
import Gynecology from './portal/pages/Gynecology'
import Dashboard from './admin/components/Dashboard'

import Admin from './admin/pages/Admin'
import Messege from './admin/pages/Messege'
import Appoint from './admin/pages/Appoint'


function App() {
 
return (
  <Router>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/About" element={<About />} />
       <Route path="/Service" element={<Service />} />
       <Route path="/Feature" element={<Feature />} />
       <Route path="/Doctor" element={<Doctor />} />
       <Route path="/Appointment" element={<Appointment />} />
       <Route path="/Testimonial" element={<Testimonial />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Psychology" element={<Psychology />} />
       <Route path="/Gynecology" element={<Gynecology />} />
       <Route path="/Dashboard" element={<Dashboard />} />

       <Route path="/Admin" element={<Admin />} />
       <Route path="/Messege" element={<Messege />} />
       <Route path="/Appoint" element={<Appoint />} />


    </Routes>
  </Router>
  )
}

export default App
