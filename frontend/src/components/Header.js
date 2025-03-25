import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo">
            <h1>Innoverse-HackFest</h1>
          </div>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            ☰
          </button>
          <nav>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <button className="close-menu" onClick={closeMenu}>
                ✕
              </button>
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#prizes" onClick={closeMenu}>Prizes</a></li>
              <li><a href="#timeline" onClick={closeMenu}>Timeline</a></li>
              <li><a href="/problem_statement" onClick={closeMenu}>Problem Statement</a></li>
              <li><a href="/rulebook.pdf" onClick={closeMenu}>Rulebook</a></li>
              <li><a href="/result" onClick={closeMenu}>Results</a></li>
              <li><a href="#register" onClick={closeMenu}>Register</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="header-spacer"></div>
    </>
  );
};

export default Header;