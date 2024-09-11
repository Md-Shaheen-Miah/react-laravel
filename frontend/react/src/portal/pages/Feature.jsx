import React from 'react'
import Navbar from '../../portal/components/Navbar'
import Footer from '../../portal/components/Footer'
import { NavLink } from 'react-router-dom'
const Feature = () => {
  return (
   <div>
    <Navbar/>
  <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">Feature</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb text-uppercase mb-0">
          <li className="breadcrumb-item"><NavLink className="text-white" to="/">Home</NavLink></li>
          <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
          <li className="breadcrumb-item text-primary active" aria-current="page">Feature</li>
        </ol>
      </nav>
    </div>
  </div>
 
  <div className="container-fluid bg-primary overflow-hidden px-lg-0" style={{margin: '6rem 0'}}>
    <div className="container feature px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="p-lg-5 ps-lg-0">
            <p className="d-inline-block border rounded-pill text-light py-1 px-4">Features</p>
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
  <Footer/>
</div>

    

    
  )
}

export default Feature
