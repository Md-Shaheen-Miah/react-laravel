import React from 'react'
import { NavLink } from 'react-router-dom';

 const Footer = () => {
  return (
 
<div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
        <h5 className="text-light mb-4">Address</h5>
        <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />Uttara, Dhaka, Bangladesh</p>
        <p className="mb-2"><i className="fa fa-phone-alt me-3" />+8801641160101</p>
        <p className="mb-2"><i className="fa fa-envelope me-3" />mdshaheen60101@gmail.com</p>
        <div className="d-flex pt-2">
          <a className="btn btn-outline-light btn-social rounded-circle" href><i className="fab fa-twitter" /></a>
          <a className="btn btn-outline-light btn-social rounded-circle" href><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-outline-light btn-social rounded-circle" href><i className="fab fa-youtube" /></a>
          <a className="btn btn-outline-light btn-social rounded-circle" href><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <NavLink className="text-light mb-4" to="#">Services</NavLink>
        <NavLink className="btn btn-link" to="#">Cardiology</NavLink>
        <NavLink className="btn btn-link" to="#">Pulmonary</NavLink>
        <NavLink className="btn btn-link" to="#">Neurology</NavLink>
        <NavLink className="btn btn-link" to="#">Orthopedics</NavLink>
        <NavLink className="btn btn-link" to="#">Laboratory</NavLink>
      </div>
      <div className="col-lg-3 col-md-6">
        <NavLink className="text-light mb-4" to="#">Quick Links</NavLink>
        <NavLink className="btn btn-link" to="/About">About Us</NavLink>
        <NavLink className="btn btn-link"  to="/Contact">Contact Us</NavLink>
        <NavLink className="btn btn-link" to="/Service">Our Services</NavLink>
        <NavLink className="btn btn-link" to="/Doctor">Terms &amp; Condition</NavLink>
        <NavLink className="btn btn-link" to="#">Support</NavLink>
      </div>
      <div className="col-lg-3 col-md-6">
        <h5 className="text-light mb-4">Newsletter</h5>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <div className="position-relative mx-auto" style={{maxWidth: 400}}>
          <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
          <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
       
          Designed By <a className="border-bottom" >Shaheen</a>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}
export default Footer;