// components/Timeline.js
import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineEvents = [
    {
      "date": "March 22, 2025",
      "time": "8:30 AM",
      "title": "Team Reporting",
      "description": "Team check-in and setting up workstations"
    },
    {
      "date": "March 22, 2025",
      "time": "10:00 AM",
      "title": "Hackathon Begins",
      "description": "Inauguration & 24-hour Hackathon starts"
    },
    {
      "date": "March 22, 2025",
      "time": "12:00 PM",
      "title": "Lunch Break",
      "description": "Lunch will be provided"
    },
    {
      "date": "March 22, 2025",
      "time": "2:30 PM",
      "title": "Mentor Talk",
      "description": "Get guidance from industry experts"
    },
    {
      "date": "March 22, 2025",
      "time": "4:00 PM",
      "title": "Tea Break",
      "description": "A short break for relaxation"
    },
    {
      "date": "March 22, 2025",
      "time": "7:00 PM",
      "title": "Dinner Break & Recreational Activities",
      "description": "Have a networking dinner"
    },
    {
      "date": "March 23, 2025",
      "time": "1:00 AM",
      "title": "Tea Break",
      "description": "Another short break for relaxation"
    },
    {
      "date": "March 23, 2025",
      "time": "8:00 AM - 10:00 AM",
      "title": "Final Touches & Breakfast",
      "description": "Last minute adjustments before judging round"
    },
    {
      "date": "March 23, 2025",
      "time": "10:00 AM - 11:30 AM",
      "title": "First Evaluation Round",
      "description": "First Assessment Round of Teams"
    },
    {
      "date": "March 23, 2025",
      "time": "11:45 AM",
      "title": "Result Declaration of round 1",
      "description": "Announcement of round 1 selected teams"
    },
    {
      "date": "March 23, 2025",
      "time": "11:45 - 12:00 PM",
      "title": "Certificate & Goodies Distribution",
      "description": "For eliminated teams, certificates and goodies will be distributed."
    },
    {
      "date": "March 23, 2025",
      "time": "12:00 - 12:30 PM",
      "title": "Lunch",
      "description": "Lunch for teams selected for final round"
    },
    {
      "date": "March 23, 2025",
      "time": "12:30 - 2:00 PM",
      "title": "Final Evaluation Round",
      "description": "Participant presentations and judgment assessments."
    },
    {
      "date": "March 23, 2025",
      "time": "2:15 - 3:30 PM",
      "title": "Prize Distribution",
      "description": "Recognition and awarding of winners."
    }
];

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <h2 className="section-title">Event Timeline</h2>
        
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 100}
            >
              <div className="timeline-badge"></div>
              <div className="timeline-content">
                <div className="event-time">
                  <div className="date">{event.date}</div>
                  <div className="time">{event.time}</div>
                </div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="timeline-buttons" data-aos="fade-up">
          <a href="/rulebook.pdf" target="_blank" className="btn">Download Rulebook</a>
        </div> */}
      </div>
    </section>
  );
};

export default Timeline;