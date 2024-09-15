import React from 'react'
import Navbar from '../../portal/components/Navbar'
import Footer from '../../portal/components/Footer'
import { NavLink } from 'react-router-dom'
const Doctor = () => {
  return (
  <div>
    <Navbar/>
  <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">Doctors</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb text-uppercase mb-0">
          <li className="breadcrumb-item"><NavLink className="text-white" to="/">Home</NavLink></li>
          <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
          <li className="breadcrumb-item text-primary active" aria-current="page">Doctors</li>
        </ol>
      </nav>
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
              <img className="img-fluid" src="img/Photoroom-20240914_180122_1.png" alt />
            </div>
            <div className="team-text bg-light text-center p-4">
              <h5>Dr.Rakibul Islam  <span style={{color:'red'}}>Id:101</span></h5>
              <p className="text-primary">Psychology</p>
              <div className="team-social text-center">
             
                <NavLink style={{textDecoration:'none',backgroundColor:'	#11a01d',color:'#ffffff',padding:'10px',borderRadius:'10px'}} to="/Psychology">Details</NavLink>
                
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
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
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
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
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
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
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
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
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
      </div>
    </div>
  </div>
 <Footer/>
</div>

        
  )
}

export default Doctor
