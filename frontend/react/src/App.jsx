
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './portal/Home';


function App() {
 
return (
  <Router>
    <Routes>
       <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  )
}

export default App
