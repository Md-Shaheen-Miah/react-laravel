
import Navbar from '../../portal/components/Navbar'
import Footer from '../../portal/components/Footer'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import React, { useState } from 'react';
const Appointment = () => {


  const [userField, setUserField] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    age: "",
    date: "",
    problem: ""
});

const changeUserFieldHandler = (e) => {
    setUserField({
        ...userField,
        [e.target.name]: e.target.value
    });
    // console.log(userField);

}
const [loading,setLoading]=useState()

const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
        const responce= await axios.post("http://127.0.0.1:8000/api/appointment/store", userField);
        console.log(responce)
        setLoading(true);
    } catch (err) {
        console.log("Something Wrong");
    }
}
if(loading){
    return <Home/>
}

  return (

   <div>
    <Navbar/>
  <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">Appointment</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb text-uppercase mb-0">
          <li className="breadcrumb-item"><NavLink className="text-white" to="/">Home</NavLink></li>
          <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
          <li className="breadcrumb-item text-primary active" aria-current="page">Appointment</li>
        </ol>
      </nav>
    </div>
  </div>
 
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <p className="d-inline-block border rounded-pill py-1 px-4">Appointment</p>
          <h1 className="mb-4">Make An Appointment To Visit Our Doctor</h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width: 55, height: 55}}>
              <i className="fa fa-phone-alt text-primary" />
            </div>
            <div className="ms-4">
              <p className="mb-2">Call Us Now</p>
              <h5 className="mb-0">+8801641160101</h5>
            </div>
          </div>
          <div className="bg-light rounded d-flex align-items-center p-5">
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width: 55, height: 55}}>
              <i className="fa fa-envelope-open text-primary" />
            </div>
            <div className="ms-4">
              <p className="mb-2">Mail Us Now</p>
              <h5 className="mb-0">mdshaheen60101@gmail.com</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="bg-light rounded h-100 d-flex align-items-center p-5">


          <form>
  <div className="row g-3">
    {/* Name Input */}
    <div className="col-12 col-sm-6">
      <input
        type="text"
        className="form-control border-0"
        placeholder="Your Name"
        style={{ height: 55 }}
        name="name"
        onChange={e => changeUserFieldHandler(e)}
        required
      />
    </div>

    {/* Email Input */}
    <div className="col-12 col-sm-6">
      <input
        type="email"
        className="form-control border-0"
        placeholder="Your Email"
        style={{ height: 55 }}
        name="email"
        onChange={e => changeUserFieldHandler(e)}
        required
      />
    </div>

    {/* Mobile Input */}
    <div className="col-12 col-sm-6">
      <input
        type="text"
        className="form-control border-0"
        placeholder="Your Mobile"
        style={{ height: 55 }}
        name="phone"
        onChange={e => changeUserFieldHandler(e)}
        required
      />
    </div>

    {/* Doctor Selection */}
    <div className="col-12 col-sm-6">
      <select
        className="form-select border-0"
        style={{ height: 55 }}
        name="doctor"
        onChange={e => changeUserFieldHandler(e)}
        required
      >
        <option value="" disabled selected>Choose Doctor ID</option>
        <option value={101}>101</option>
        <option value={102}>102</option>
        <option value={103}>103</option>
        <option value={104}>104</option>
        <option value={105}>105</option>
        <option value={106}>106</option>
      </select>
    </div>

    {/* Age Input */}
    <div className="col-12 col-sm-6">
      <input
        type="number"
        className="form-control border-0"
        placeholder="Patient Age"
        style={{ height: 55 }}
        name="age"
        onChange={e => changeUserFieldHandler(e)}
        required
      />
    </div>

    {/* Date Input */}
    <div className="col-12 col-sm-6">
      <input
        type="date"
        className="form-control border-0"
        style={{ height: 55 }}
        name="date"
        onChange={e => changeUserFieldHandler(e)}
        required
      />
    </div>

    {/* Problem Description */}
    <div className="col-12">
      <textarea
        className="form-control border-0"
        rows={5}
        placeholder="Describe your problem"
        name="problem"
        onChange={e => changeUserFieldHandler(e)}
        required
      />
    </div>

    {/* Submit Button */}
    <div className="col-12">
      <button
        className="btn btn-primary w-100 py-3"
        type="submit"
        onClick={e => onSubmitChange(e)}
      >
        Book Appointment
      </button>
    </div>
  </div>
</form>


            
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>

  )
}

export default Appointment
