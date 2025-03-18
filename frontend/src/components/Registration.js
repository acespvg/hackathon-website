// components/Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './Registration.css';

const Registration = () => {  
  const navigate = useNavigate()
  return (
    <section id="register" className="registration-section">
      <div className="container">
        <h2 className="section-title">Register Your Team</h2>
        
        <div className="registration-container" data-aos="fade-up">
          <div className="registration-info">
            <h3>Join Innoverse-HackFest 2025</h3>
            <p>
              Ready to showcase your skills and creativity? Register your team now 
              to participate in the most exciting hackathon of the year!
            </p>
            <ul className="registration-features">
              <li>
                <i className="fa fa-check-circle"></i>
                <span>Team size: 2-4 members</span>
              </li>
              <li>
                <i className="fa fa-check-circle"></i>
                <span>24 hours of non-stop innovation</span>
              </li>
              <li>
                <i className="fa fa-check-circle"></i>
                <span>Entry fee: ₹1,000 per team</span>
              </li>
              <li>
                <i className="fa fa-check-circle"></i>
                <span>Food ,refreshments and accomodation provided</span>
              </li>
              <li>
                <i className="fa fa-check-circle"></i>
                <span>Goodies & Certificates await</span> 
              </li>
              <li>
                <i className="fa fa-check-circle"></i>
                <span>Exciting prizes worth ₹63,000</span> 
              </li>
              <li>
                <i className="fa fa-check-circle"></i>
                <span><br/>For Queries Contact :-<br/><br/>⚪Dhanesh Sathe: 8855833583<br/>
                ⚪Rohan Sonawane: 8805285479</span>
              </li>
            </ul>
            <div className="hackathon-problem-statement">
              {/* <i className="fa fa-calendar-check-o"></i> */}
              <span>The main problem statements will be announced 16 hours before the hackathon begins.</span>
            </div>
            <div className="registration-deadline">
              {/* <i className="fa fa-calendar-check-o"></i> */}
              <span>Registration closes on March 18, 2025</span>
            </div>
          </div>
          
          <div className="registration-form-container">
            
              
              {/* <button 
                type="submit" 
                className="btn register-submit-btn" 
                onClick={()=>navigate("/register")}
              >
                Register Now
              </button> */}

              <button
                className="btn register-submit-btn"> Registration Closed </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;