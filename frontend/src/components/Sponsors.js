// components/Sponsors.js
import React from 'react';
import './Sponsors.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import img1 from'../images/logo_final.png';
import sponsor1 from '../images/sponsor1.jpg';
import sponsor2 from '../images/sponsor2.jpg';
import sponsor3 from '../images/sponsor3.jpg';
import sponsor4 from '../images/sponsor4.png';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'Budhani',
      tier: 'platinum',
      logo: sponsor1
    },
    {
      name: 'Pictel AI',
      tier: 'platinum',
      logo: sponsor2
    },
    {
      name: 'App World',
      tier: 'platinum',
      logo: sponsor3
    },
    {
      name: 'Star Copiers',
      tier: 'platinum',
      logo: sponsor4
    }
    
  ];
  
  // Group sponsors by tier
  const sponsorsByTier = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});
  
  const tiers = [
    { name: 'platinum', title: 'Previous Sponsors' },
    // { name: 'gold', title: 'Gold Sponsors' },
    // { name: 'silver', title: 'Silver Sponsors' }
  ];
  
  return (
    <section className="sponsors-section">
      <div className="container">
        <h2 className="section-title">Our Sponsors</h2>
        
        <p className="sponsors-intro" data-aos="fade-up">
          We are grateful to our amazing sponsors who make Innoverse-HackFest 2025 possible.
          Their support enables us to create an incredible experience for all participants.
        </p>
        
        {tiers.map((tier, tierIndex) => (
          sponsorsByTier[tier.name] && (
            <div key={tier.name} className={`sponsors-tier ${tier.name}`} data-aos="fade-up" data-aos-delay={tierIndex * 100}>
              <h3 className="tier-title">{tier.title}</h3>
              <div className="sponsors-grid">
                {sponsorsByTier[tier.name].map((sponsor, index) => (
                  <div key={index} className="sponsor-card" data-aos="zoom-in" data-aos-delay={(tierIndex + index) * 50}>
                    <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
        
        <div className="sponsors-cta" data-aos="fade-up">
          <h3>Interested in Sponsoring?</h3>
          <p>Join our growing list of sponsors and connect with top tech talent.</p>
          <a href="mailto:aces@pvgcoet.ac.in" className="btn">Become a Sponsor</a>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              {/* <h2>TechHack 2025</h2> */}
              <img src={img1} width={150} height={60}></img>
              {/* <p>Innovate. Build. Conquer.</p> */}
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#prizes">Prizes</a>
              <a href="#timeline">Timeline</a>
              {/* <a href="#judges">Judges</a> */}
              <a href="#register">Register</a>
            </div>
            <div className="footer-social">
            <a href="https://www.instagram.com/acespvg?igsh=YWUwM29zaWxndjdt"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/school/acespvg/"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 ACES PVGCOET. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Sponsors;