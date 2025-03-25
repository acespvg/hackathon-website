// // components/Hero.js
import React, { useEffect } from 'react';
import './Hero.css';
import img1 from'../images/logo_final.png';
const Hero = () => {
  useEffect(() => {
    // Create animated background elements
    const animatedBg = document.querySelector('.animated-bg');
    
    for (let i = 0; i < 20; i++) {
      const span = document.createElement('span');
      span.style.left = `${Math.random() * 100}%`;
      span.style.width = `${Math.random() * 30 + 10}px`;
      span.style.height = span.style.width;
      span.style.animationDuration = `${Math.random() * 5 + 2}s`;
      span.style.animationDelay = `${Math.random() * 2}s`;
      
      animatedBg.appendChild(span);
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="animated-bg"></div>
      <div className="container hero-container">
        <div className="hero-content" data-aos="fade-up">
          {/* <h1>Innoverse-HackFest 2025</h1> */}
          <img src={img1} width={300} height={100}></img>
          <h2>Innovate. Build. Conquer.</h2>
          <p>Join us for an exhilarating 24-hour hackathon experience where innovation meets technology.</p>
          
          <div className="event-details">
            <div className="detail-item" data-aos="fade-up" data-aos-delay="100">
              <i className="fa fa-calendar"></i>
              <div>
                <h3>Date</h3>
                <p>March 22-23, 2025</p>
              </div>
            </div>
            
            <div className="detail-item" data-aos="fade-up" data-aos-delay="200">
              <i className="fa fa-clock-o"></i>
              <div>
                <h3>Time</h3>
                <p>10:00 AM - 10:00 AM</p>
              </div>
            </div>
            
            <div className="detail-item" data-aos="fade-up" data-aos-delay="300">
              <i className="fa fa-map-marker"></i>
              <div>
                <h3>Venue</h3>
                <p>PVG COET GKP(W)IOM</p>
              </div>
            </div>
            
            <div className="detail-item" data-aos="fade-up" data-aos-delay="400">
              <i className="fa fa-money"></i>
              <div>
                <h3>Entry Fee</h3>
                <p>₹ 1,000 per team</p>
              </div>
            </div>
          </div>
          
          {/* <div className="hero-buttons">
            <a href="/shortlisted_teams.pdf" target = "_blank" className="btn register-btn" data-aos="fade-up" data-aos-delay="500">Shortlisted Teams</a>
            <a href="/rulebook.pdf" target="_blank" className="btn register-btn" data-aos="fade-up" data-aos-delay="500">Rulebook</a>
            <a href="/problem_statement" target = "_blank" className="btn register-btn" data-aos="fade-up" data-aos-delay="200">Problem Statements</a>
            <a href="/JudgingCriteria.pdf" target="_blank" className="btn register-btn" data-aos="fade-up" data-aos-delay="500">Judging Criteria</a>

          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;


