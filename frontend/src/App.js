import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PrizePool from "./components/PrizePool";
import Timeline from "./components/Timeline";
import Judges from "./components/Judges";
import Registration from "./components/Registration";
import Sponsors from "./components/Sponsors";
import RegistrationForm from "./components/RegistrationForm"; // Registration page
import Winners from "./components/Winners";
import AOS from "aos";
import "aos/dist/aos.css";

const handleDownload = () => {
  const filePath = "/Round-1-Winners.pdf";
  const link = document.createElement("a");
  link.href = filePath;
  link.download = "Round-1-Winners.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Router>
      {/* Main Popup */}
       {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content announcement-popup">
            <div className="popup-badge">ANNOUNCEMENT</div>
            <div className="completion-badge">ROUND 1 COMPLETED</div>
            <div className="divider"></div>
            <p>Winners of Round 1 have been announced!</p>
            <div className="popup-buttons">
              <button
                className="popup-btn winners-btn"
                onClick={() => setActiveModal("winners")}
              >
               ShortListed Teams
              </button>
              <button
                className="popup-btn rulebook-btn"
                onClick={() => setActiveModal("rulebook")}
              >
                <a href="/rulebook.pdf" target="_blank" className="">Rulebook</a>
              </button>
            </div>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Winners Modal */}
      {activeModal === "winners" && (
  <div className="popup-overlay modal-overlay">
    <div className="popup-content modal-content">
      <div className="modal-header">
        <h2>🏆 Round 1 Winners</h2>
        <div className="modal-actions">
          <button
            className="download-btn"
            onClick={handleDownload} 
          >
            <span className="download-icon">📥</span> Download PDF
          </button>
          <button
            className="close-btn modal-close"
            onClick={() => setActiveModal(null)}
          >
            ✕
          </button>
        </div>
      </div>
      <div className="modal-body">
        <Winners />
      </div>
    </div>
  </div>
)}

      <Routes>
        {/* Homepage Components */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <PrizePool />
              <Timeline />
              {/* <Judges /> */}
              <Registration />
              <Sponsors />
            </>
          }
        />
        
        {/* Registration Page */}
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;


// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import PrizePool from "./components/PrizePool";
// import Timeline from "./components/Timeline";
// import Judges from "./components/Judges";
// import Registration from "./components/Registration";
// import Sponsors from "./components/Sponsors";
// import RegistrationForm from "./components/RegistrationForm";
// import RuleBook from "./components/RuleBook";
// import Winners from "./components/Winners";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function App() {
//   const [showPopup, setShowPopup] = useState(true);
//   const [activeModal, setActiveModal] = useState(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//     });
//   }, []);

//   // Function to handle PDF download
//   const handleDownload = (documentType) => {
//     const filePath =
//       documentType === "rulebook"
//         ? "/RuleBook.pdf"
//         : "/Round-1-Winners.pdf";

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
//     <Router>
//       {/* Main Popup */}
//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-content announcement-popup">
//             <div className="popup-badge">ANNOUNCEMENT</div>
//             <div className="completion-badge">ROUND 1 COMPLETED</div>
//             <div className="divider"></div>
//             <p>Winners of Round 1 have been announced!</p>
//             <div className="popup-buttons">
//               <button
//                 className="popup-btn winners-btn"
//                 onClick={() => setActiveModal("winners")}
//               >
//                 <span className="btn-icon">🏆</span> ShortListed Teams
//               </button>
//               <button
//                 className="popup-btn rulebook-btn"
//                 onClick={() => setActiveModal("rulebook")}
//               >
//                 <span className="btn-icon">📖</span> RuleBook
//               </button>
//             </div>
//             <button className="close-btn" onClick={() => setShowPopup(false)}>
//               ✕
//             </button>
//           </div>
//         </div>
//       )}

//       {/* RuleBook Modal */}
//       {activeModal === "rulebook" && (
//         <div className="popup-overlay modal-overlay">
//           <div className="popup-content modal-content">
//             <div className="modal-header">
//               <h2>Hackathon RuleBook</h2>
//               <div className="modal-actions">
//                 <button
//                   className="download-btn"
//                   onClick={() => handleDownload("rulebook")}
//                 >
//                   <span className="download-icon">📥</span> Download PDF
//                 </button>
//                 <button
//                   className="close-btn modal-close"
//                   onClick={() => setActiveModal(null)}
//                 >
//                   ✕
//                 </button>
//               </div>
//             </div>
//             <div className="modal-body">
//               <RuleBook />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Winners Modal */}
//       {activeModal === "winners" && (
//         <div className="popup-overlay modal-overlay">
//           <div className="popup-content modal-content">
//             <div className="modal-header">
//               <h2>🏆 Round 1 Winners</h2>
//               <div className="modal-actions">
//                 <button
//                   className="download-btn"
//                   onClick={() => handleDownload("winners")}
//                 >
//                   <span className="download-icon">📥</span> Download PDF
//                 </button>
//                 <button
//                   className="close-btn modal-close"
//                   onClick={() => setActiveModal(null)}
//                 >
//                   ✕
//                 </button>
//               </div>
//             </div>
//             <div className="modal-body">
//               <Winners />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Animated Background */}
//       <div className="animated-bg">
//         {[...Array(15)].map((_, index) => {
//           const left = `${Math.random() * 100}%`;
//           const top = `${Math.random() * 100}%`;
//           const width = `${Math.random() * 30 + 10}px`;
//           const height = `${Math.random() * 30 + 10}px`;
//           const animationDuration = `${Math.random() * 5 + 5}s`;
//           const animationDelay = `${Math.random() * 2}s`;

//           return (
//             <span
//               key={index}
//               style={{
//                 left,
//                 top,
//                 width,
//                 height,
//                 animationDuration,
//                 animationDelay,
//               }}
//             ></span>
//           );
//         })}
//       </div>

//       <Routes>
//         {/* Homepage Components */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Header />
//               <Hero />
//               <PrizePool />
//               <Timeline />
//               <Registration />
//               <Sponsors />
//             </>
//           }
//         />

//         {/* Registration Page */}
//         <Route path="/register" element={<RegistrationForm />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
