// components/Judges.js
import React from 'react';
import './Judges.css';

const Judges = () => {
  const judges = [
    {
      name: 'Dr. Priya Sharma',
      position: 'CTO at Tech Innovations',
      experience: '15+ years in AI & Machine Learning',
      imgUrl: '/api/placeholder/300/300',
      linkedin: '#'
    },
    {
      name: 'Raj Mehta',
      position: 'Senior Director at CloudScale',
      experience: '12+ years in Cloud Infrastructure',
      imgUrl: '/api/placeholder/300/300',
      linkedin: '#'
    },
    {
      name: 'Ananya Verma',
      position: 'Founder & CEO at DevConnect',
      experience: '10+ years in Software Development',
      imgUrl: '/api/placeholder/300/300',
      linkedin: '#'
    },
    {
      name: 'Vikram Malhotra',
      position: 'VP Engineering at StartupHub',
      experience: '8+ years in Blockchain Technology',
      imgUrl: '/api/placeholder/300/300',
      linkedin: '#'
    }
  ];
  
  return (
    <section id="judges" className="judges-section">
      <div className="container">
        <h2 className="section-title">Meet Our Judges</h2>
        
        <div className="judges-grid">
          {judges.map((judge, index) => (
            <div 
              className="judge-card" 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="judge-img-container">
                <img src={judge.imgUrl} alt={judge.name} className="judge-img" />
                <div className="judge-social">
                  <a href={judge.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="judge-info">
                <h3 className="judge-name">{judge.name}</h3>
                <div className="judge-position">{judge.position}</div>
                <p className="judge-experience">{judge.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Judges;