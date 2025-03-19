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
  const filePath = "/shortlisted_teams.pdf";
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
        <h2>Round 1 Winners</h2>
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


