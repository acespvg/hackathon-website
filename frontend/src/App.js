import React, { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Router>
      
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
              <Judges />
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
