import React from 'react';
import {NavLink} from 'react-router-dom';


const Home = () => {
  return (
   <div>
 
 
 
  <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
    <div className="row gx-0 d-none d-lg-flex">
      <div className="col-lg-7 px-5 text-start">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="fa fa-map-marker-alt text-primary me-2" />
          <small>Uttara, Dhaka, Bangladesh</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center py-3">
          <small className="far fa-clock text-primary me-2" />
          <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
        </div>
      </div>
      <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="fa fa-phone-alt text-primary me-2" />
          <small>+8801641160101</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center">
          <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href><i className="fab fa-twitter" /></a>
          <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href><i className="fab fa-linkedin-in" /></a>
          <a className="btn btn-sm-square rounded-circle bg-white text-primary me-0" href><i className="fab fa-instagram" /></a>
        </div>
      </div>
    </div>
  </div>
 
  <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
    <NavLink to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
      <h1 className="m-0 text-primary"><i className="far fa-hospital me-3" />SHEBA</h1>
    </NavLink>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
    
        <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
        <NavLink className="nav-item nav-link" to="/about">About</NavLink>
        <NavLink className="nav-item nav-link" to="/Service">Service</NavLink>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu rounded-0 rounded-bottom m-0">
            <NavLink className="dropdown-item">Feature</NavLink>
            <NavLink className="dropdown-item">Our Doctor</NavLink>
            <NavLink className="dropdown-item">Appointment</NavLink>
            <NavLink className="dropdown-item">Testimonial</NavLink>
            <NavLink className="dropdown-item">404 Page</NavLink>
          </div>
        </div>
        <NavLink className="nav-item nav-link" to="/Contact">Contact</NavLink>
        <NavLink className="nav-item nav-link" to="/Login">Login</NavLink>
      </div>
      <NavLink className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" to="/Appointment">Appointment<i className="fa fa-arrow-right ms-3" /></NavLink>
    </div>
  </nav>
 
  <div className="container-fluid header bg-primary p-0 mb-5">
    <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
      <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
        <h1 className="display-4 text-white mb-5">Good Health Is The Root Of All Heppiness</h1>
        <div className="row g-4">
          <div className="col-sm-4">
            <div className="border-start border-light ps-4">
              <h2 className="text-white mb-1" data-toggle="counter-up">15</h2>
              <p className="text-light mb-0">Expert Doctors</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="border-start border-light ps-4">
              <h2 className="text-white mb-1" data-toggle="counter-up">30</h2>
              <p className="text-light mb-0">Medical Stuff</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="border-start border-light ps-4">
              <h2 className="text-white mb-1" data-toggle="counter-up">150</h2>
              <p className="text-light mb-0">Total Patients</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
        <div className="owl-carousel header-carousel">
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="img/carousel-1.jpg" alt />
            <div className="owl-carousel-text">
              <h1 className="display-1 text-white mb-0">Cardiology</h1>
            </div>
          </div>
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="img/carousel-2.jpg" alt />
            <div className="owl-carousel-text">
              <h1 className="display-1 text-white mb-0">Neurology</h1>
            </div>
          </div>
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="img/carousel-3.jpg" alt />
            <div className="owl-carousel-text">
              <h1 className="display-1 text-white mb-0">Pulmonary</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="d-flex flex-column">
            <img className="img-fluid rounded w-75 align-self-end" src="img/about-1.jpg" alt />
            <img className="img-fluid rounded w-50 bg-white pt-3 pe-3" src="img/about-2.jpg" alt style={{marginTop: '-25%'}} />
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <NavLink className="d-inline-block border rounded-pill py-1 px-4" to="/About">About Us</NavLink>
          <h1 className="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
          <p><i className="far fa-check-circle text-primary me-3" />Quality health care</p>
          <p><i className="far fa-check-circle text-primary me-3" />Only Qualified Doctors</p>
          <p><i className="far fa-check-circle text-primary me-3" />Medical Research Professionals</p>
          <NavLink className="btn btn-primary rounded-pill py-3 px-5 mt-3" to="#" >Read More</NavLink>
        </div>
      </div>
    </div>
  </div>
  
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <NavLink className="d-inline-block border rounded-pill py-1 px-4" to="/Service">Services</NavLink>
        <h1>Health Care Solutions</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item bg-light rounded h-100 p-5">
            <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: 65, height: 65}}>
              <i className="fa fa-heartbeat text-primary fs-4" />
            </div>
            <h4 className="mb-3">Cardiology</h4>
            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <NavLink className="btn" to="#"><i className="fa fa-plus text-primary me-3" />Read More</NavLink>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item bg-light rounded h-100 p-5">
            <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: 65, height: 65}}>
              <i className="fa fa-x-ray text-primary fs-4" />
            </div>
            <h4 className="mb-3">Pulmonary</h4>
            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a className="btn" href><i className="fa fa-plus text-primary me-3" />Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item bg-light rounded h-100 p-5">
            <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: 65, height: 65}}>
              <i className="fa fa-brain text-primary fs-4" />
            </div>
            <h4 className="mb-3">Neurology</h4>
            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a className="btn" href><i className="fa fa-plus text-primary me-3" />Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item bg-light rounded h-100 p-5">
            <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: 65, height: 65}}>
              <i className="fa fa-wheelchair text-primary fs-4" />
            </div>
            <h4 className="mb-3">Orthopedics</h4>
            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a className="btn" href><i className="fa fa-plus text-primary me-3" />Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item bg-light rounded h-100 p-5">
            <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: 65, height: 65}}>
              <i className="fa fa-tooth text-primary fs-4" />
            </div>
            <h4 className="mb-3">Dental Surgery</h4>
            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a className="btn" href><i className="fa fa-plus text-primary me-3" />Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item bg-light rounded h-100 p-5">
            <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: 65, height: 65}}>
              <i className="fa fa-vials text-primary fs-4" />
            </div>
            <h4 className="mb-3">Laboratory</h4>
            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a className="btn" href><i className="fa fa-plus text-primary me-3" />Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
    <div className="container feature px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="p-lg-5 ps-lg-0">
            <NavLink className="d-inline-block border rounded-pill text-light py-1 px-4" to="/Feature">Features</NavLink>
            <h1 className="text-white mb-4">Why Choose Us</h1>
            <p className="text-white mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
            <div className="row g-4">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width: 55, height: 55}}>
                    <i className="fa fa-user-md text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="text-white mb-2">Experience</p>
                    <h5 className="text-white mb-0">Doctors</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width: 55, height: 55}}>
                    <i className="fa fa-check text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="text-white mb-2">Quality</p>
                    <h5 className="text-white mb-0">Services</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width: 55, height: 55}}>
                    <i className="fa fa-comment-medical text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="text-white mb-2">Positive</p>
                    <h5 className="text-white mb-0">Consultation</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width: 55, height: 55}}>
                    <i className="fa fa-headphones text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="text-white mb-2">24 Hours</p>
                    <h5 className="text-white mb-0">Support</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: 400}}>
          <div className="position-relative h-100">
            <img className="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style={{objectFit: 'cover'}} alt />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <p className="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
        <h1>Our Experience Doctors</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item position-relative rounded overflow-hidden">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-1.jpg" alt />
            </div>
            <div className="team-text bg-light text-center p-4">
              <h5>Doctor Name</h5>
              <p className="text-primary">Department</p>
              <div className="team-social text-center">
                <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item position-relative rounded overflow-hidden">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-2.jpg" alt />
            </div>
            <div className="team-text bg-light text-center p-4">
              <h5>Doctor Name</h5>
              <p className="text-primary">Department</p>
              <div className="team-social text-center">
                <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item position-relative rounded overflow-hidden">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-3.jpg" alt />
            </div>
            <div className="team-text bg-light text-center p-4">
              <h5>Doctor Name</h5>
              <p className="text-primary">Department</p>
              <div className="team-social text-center">
                <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item position-relative rounded overflow-hidden">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-4.jpg" alt />
            </div>
            <div className="team-text bg-light text-center p-4">
              <h5>Doctor Name</h5>
              <p className="text-primary">Department</p>
              <div className="team-social text-center">
                <a className="btn btn-square" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <NavLink className="d-inline-block border rounded-pill py-1 px-4" to="/Appointment">Appointment</NavLink>
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
                <div className="col-12 col-sm-6">
                  <input type="text" className="form-control border-0" placeholder="Your Name" style={{height: 55}} />
                </div>
                <div className="col-12 col-sm-6">
                  <input type="email" className="form-control border-0" placeholder="Your Email" style={{height: 55}} />
                </div>
                <div className="col-12 col-sm-6">
                  <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{height: 55}} />
                </div>
                <div className="col-12 col-sm-6">
                  <select className="form-select border-0" style={{height: 55}}>
                    <option selected>Choose Doctor</option>
                    <option value={1}>Doctor 1</option>
                    <option value={2}>Doctor 2</option>
                    <option value={3}>Doctor 3</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="date" id="date" data-target-input="nearest">
                    <input type="text" className="form-control border-0 datetimepicker-input" placeholder="Choose Date" data-target="#date" data-toggle="datetimepicker" style={{height: 55}} />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="time" id="time" data-target-input="nearest">
                    <input type="text" className="form-control border-0 datetimepicker-input" placeholder="Choose Date" data-target="#time" data-toggle="datetimepicker" style={{height: 55}} />
                  </div>
                </div>
                <div className="col-12">
                  <textarea className="form-control border-0" rows={5} placeholder="Describe your problem" defaultValue={""} />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">Book Appointment</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <p className="d-inline-block border rounded-pill py-1 px-4">Testimonial</p>
        <h1>What Say Our Patients!</h1>
      </div>
      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
        <div className="testimonial-item text-center">
          <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-1.jpg" style={{width: 100, height: 100}} />
          <div className="testimonial-text rounded text-center p-4">
            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
            <h5 className="mb-1">Patient Name</h5>
            <span className="fst-italic">Profession</span>
          </div>
        </div>
        <div className="testimonial-item text-center">
          <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-2.jpg" style={{width: 100, height: 100}} />
          <div className="testimonial-text rounded text-center p-4">
            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
            <h5 className="mb-1">Patient Name</h5>
            <span className="fst-italic">Profession</span>
          </div>
        </div>
        <div className="testimonial-item text-center">
          <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-3.jpg" style={{width: 100, height: 100}} />
          <div className="testimonial-text rounded text-center p-4">
            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
            <h5 className="mb-1">Patient Name</h5>
            <span className="fst-italic">Profession</span>
          </div>
        </div>
      </div>
    </div>
  </div>
 
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
          <h5 className="text-light mb-4">Services</h5>
          <a className="btn btn-link" href>Cardiology</a>
          <a className="btn btn-link" href>Pulmonary</a>
          <a className="btn btn-link" href>Neurology</a>
          <a className="btn btn-link" href>Orthopedics</a>
          <a className="btn btn-link" href>Laboratory</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Quick Links</h5>
          <NavLink className="btn btn-link" to="/About">About Us</NavLink>
          <NavLink className="btn btn-link" to="/Contact">Contact Us</NavLink>
          <NavLink className="btn btn-link" to="/Service">Our Services</NavLink>
          <NavLink className="btn btn-link" to="/Doctor">Terms &amp; Condition</NavLink>
          <NavLink className="btn btn-link" href>Support</NavLink>
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
          
            Designed By <a className="border-bottom" href="#">Shaheen</a>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
</div>


  );
};

export default Home;
