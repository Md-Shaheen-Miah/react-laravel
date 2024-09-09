
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './portal/Home';
import About from './portal/pages/About'
import Service from './portal/pages/Service'


function App() {
 
return (
  <Router>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/About" element={<About />} />
       <Route path="/Service" element={<Service />} />

    </Routes>
  </Router>
  )
}

export default App
