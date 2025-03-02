// components/PrizePool.js
import React, { useState, useEffect, useRef } from 'react';
import './PrizePool.css';

const PrizePool = () => {
  const [count, setCount] = useState(0);
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 3000; // 3 seconds
    const increment = 63000 / (duration / 30); // Update every 30ms
    let currentCount = 0;
    
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= 63000) {
        setCount(63000);
        clearInterval(timer);
      } else {
        setCount(Math.round(currentCount));
      }
    }, 30);
    
    return () => clearInterval(timer);
  }, [isVisible]);
  
  return (
    <section id="prizes" className="prize-pool" ref={targetRef}>
      <div className="container">
        <h2 className="section-title">Prize Pool</h2>
        
        <div className="prize-counter" data-aos="zoom-in">
          <div className="prize-amount">
            <span className="rupee-symbol">₹</span>
            <span className="count">{count.toLocaleString()}</span>
          </div>
          <p>in exciting prizes up for grabs</p>
        </div>
        
        <div className="prize-distribution">
          <div className="prize-card" data-aos="fade-up" data-aos-delay="100">
            <div className="prize-position">1st</div>
            <div className="prize-value">₹ 31,000</div>
          </div>
          
          <div className="prize-card" data-aos="fade-up" data-aos-delay="200">
            <div className="prize-position">2nd</div>
            <div className="prize-value">₹ 21,000</div>
          </div>
          
          <div className="prize-card" data-aos="fade-up" data-aos-delay="300">
            <div className="prize-position">3rd</div>
            <div className="prize-value">₹ 11,000</div>
          </div>
          
          {/* <div className="prize-card" data-aos="fade-up" data-aos-delay="400">
            <div className="prize-position">Special</div>
            <div className="prize-value">₹ 3,000</div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PrizePool;