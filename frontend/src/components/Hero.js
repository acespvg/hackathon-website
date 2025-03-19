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
                <p>PVG COET</p>
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
          
          <div className="hero-buttons">
            <a href="#register" className="btn register-btn" data-aos="fade-up" data-aos-delay="500">Register Now</a>
            <a href="/rulebook.pdf" target="_blank" className="btn outline-btn" data-aos="fade-up" data-aos-delay="600">Rulebook</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// components/Hero.js
// import React, { useEffect, useState } from "react";
// import "./Hero.css";
// import RuleBook from "./RuleBook";
// import Winners from "./Winners";
// import img1 from "../images/logo_final.png";

// const Hero = () => {
//   const [activeModal, setActiveModal] = useState(null);

//   useEffect(() => {
//     const animatedBg = document.querySelector(".animated-bg");

//     for (let i = 0; i < 20; i++) {
//       const span = document.createElement("span");
//       span.style.left = `${Math.random() * 100}%`;
//       const width = `${Math.random() * 30 + 10}px`;
//       span.style.width = width;
//       span.style.height = width;
//       span.style.animationDuration = `${Math.random() * 5 + 2}s`;
//       span.style.animationDelay = `${Math.random() * 2}s`;

//       animatedBg.appendChild(span);
//     }
//   }, []);

//   const handleDownload = (documentType) => {
//     const filePath =
//       documentType === "rulebook" ? "/RuleBook.pdf" : "/Round-1-Winners.pdf";

//     const link = document.createElement("a");
//     link.href = filePath;
//     link.download =
//       documentType === "rulebook"
//         ? "Hackathon-RuleBook.pdf"
//         : "Round-1-Winners.pdf";

//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section id="home" className="hero">
//       <div className="animated-bg"></div>
//       <div className="container hero-container">
//         <div className="hero-content" data-aos="fade-up">
//           <img src={img1} width={300} height={100} alt="demo-Image" />
//           <h2>Innovate. Build. Conquer.</h2>
//           <p>
//             Join us for an exhilarating 24-hour hackathon experience where
//             innovation meets technology.
//           </p>

//           <div className="event-details">
//             <div className="detail-item" data-aos="fade-up" data-aos-delay="100">
//               <i className="fa fa-calendar"></i>
//               <div>
//                 <h3>Date</h3>
//                 <p>March 22-23, 2025</p>
//               </div>
//             </div>

//             <div className="detail-item" data-aos="fade-up" data-aos-delay="200">
//               <i className="fa fa-clock-o"></i>
//               <div>
//                 <h3>Time</h3>
//                 <p>10:00 AM - 10:00 AM</p>
//               </div>
//             </div>

//             <div className="detail-item" data-aos="fade-up" data-aos-delay="300">
//               <i className="fa fa-map-marker"></i>
//               <div>
//                 <h3>Venue</h3>
//                 <p>PVG COET</p>
//               </div>
//             </div>

//             <div className="detail-item" data-aos="fade-up" data-aos-delay="400">
//               <i className="fa fa-money"></i>
//               <div>
//                 <h3>Entry Fee</h3>
//                 <p>₹ 1,000 per team</p>
//               </div>
//             </div>
//           </div>

//           <div className="popup-buttons">
//             <button
//               className="popup-btn winners-btn"
//               onClick={() => setActiveModal("winners")}
//             >
//               <span className="btn-icon">🏆</span> Round 1 ShortListed Teams
//             </button>
//             <button
//               className="popup-btn rulebook-btn"
//               onClick={() => setActiveModal("rulebook")}
//             >
//               <span className="btn-icon">📖</span> RuleBook
//             </button>
//           </div>
//         </div>

//         {/* RuleBook Modal */}
//         {activeModal === "rulebook" && (
//           <div className="popup-overlay modal-overlay">
//             <div className="popup-content modal-content">
//               <div className="modal-header">
//                 <h2>Hackathon RuleBook</h2>
//                 <div className="modal-actions">
//                   <button
//                     className="download-btn"
//                     onClick={() => handleDownload("rulebook")}
//                   >
//                     <span className="download-icon">📥</span> Download PDF
//                   </button>
//                   <button
//                     className="close-btn modal-close"
//                     onClick={() => setActiveModal(null)}
//                   >
//                     ✕
//                   </button>
//                 </div>
//               </div>
//               <div className="modal-body">
//                 <RuleBook />
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Winners Modal */}
//         {activeModal === "winners" && (
//           <div className="popup-overlay modal-overlay">
//             <div className="popup-content modal-content">
//               <div className="modal-header">
//                 <h2>🏆 Round 1 Shortlisted Teams</h2>
//                 <div className="modal-actions">
//                   <button
//                     className="download-btn"
//                     onClick={() => handleDownload("winners")}
//                   >
//                     <span className="download-icon">📥</span> Download PDF
//                   </button>
//                   <button
//                     className="close-btn modal-close"
//                     onClick={() => setActiveModal(null)}
//                   >
//                     ✕
//                   </button>
//                 </div>
//               </div>
//               <div className="modal-body">
//                 <Winners />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Hero;
