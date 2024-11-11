import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container text-light py-5">
      <div className="container">
        <div className="row justify-content-between">
          {/* Address Column */}
          <div className="col-lg-4 col-md-6 col-sm-12 footer-col mb-4">
            <h5 className="footer-heading"style={{color:"#9A292F"}}>Our Location</h5>
            <p className="footer-address">
              <i className="fa-solid fa-location-dot text-warning me-2" />
              Timbar Market, Rajaram,<br />
              Sambhaji Nagar Rd, opposite Fire Station,<br />
              Pune, Maharashtra 411016
            </p>
          </div>

          {/* Links Column */}
          <div className="col-lg-4 col-md-6 col-sm-12 footer-col mb-4">
            <h5 className="footer-heading"style={{color:"#9A292F"}}>Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Track Order</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-lg-4 col-md-6 col-sm-12 footer-col mb-4">
            <h5 className="footer-heading"style={{color:"#9A292F"}}>Contact Us</h5>
            <ul className="footer-contact list-unstyled">
              <li><a href="#" className="footer-link">Get in Touch</a></li>
              <li className="footer-phone">
                <i className="fa-solid fa-phone text-danger me-2" style={{fontSize:"15px",marginRight:"5px"}} /> +91 000000000
              </li>
              <li className="footer-social">
                Follow Us:
                <i className="fa-brands fa-instagram mx-2 text-danger"style={{fontSize:"15px",marginRight:"5px"}} />
                <i className="fa-brands fa-facebook-f mx-2 text-danger"style={{fontSize:"15px",marginRight:"5px"}} />
                <i className="fa-brands fa-youtube mx-2 text-danger" style={{fontSize:"15px",marginRight:"5px"}}/>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom row">
          <div className="col-12 col-md-4 text-center mb-2">
            <Link to="#" className="footer-link text-black">T&C</Link> |
            <Link to="#" className="footer-link text-black">Privacy Policy</Link> |
            <Link to="#" className="footer-link text-danger">Shipping Policy</Link>
          </div>
          <div className="col-12 col-md-4 text-center mb-2 text-black">
            Designed By <Link to="#" className="text-danger">Mavericks-Infotech</Link>
          </div>
          <div className="col-12 col-md-4 text-center mb-2 text-black">
          Version By 
          {/* 1.0 */}
          <Link to="#" className="text-danger"> 1.0</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
