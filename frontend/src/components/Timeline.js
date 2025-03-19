// components/Timeline.js
import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineEvents = [
    {
      date: 'March 18, 2025',
      time: '9:00 PM',
      title: 'Registration Deadline',
      description: 'Last date to register your team for Innoverse-HackFest 2025'
    },
    {
      date: 'March 22, 2025',
      time: '8:30 AM',
      title: 'Team Reporting',
      description: 'Team check-in and setting up workstations'
    },
    {
      date: 'March 22, 2025',
      time: '10:00 AM',
      title: 'Hackathon Begins',
      description: 'Opening ceremony and theme announcement'
    },
    {
      date: 'March 22, 2025',
      time: '12:00 PM',
      title: 'Lunch Break',
      description: 'Lunch break will be for 2 hours (12:00-2:00)'
    },
    {
      date: 'March 22, 2025',
      time: '2:30 PM',
      title: 'Mentor Talk',
      description: 'Get guidance from industry experts'
    },
    {
      date: 'March 22, 2025',
      time: '4:00 PM',
      title: 'Coffee Break',
      description: ''
    },
    {
      date: 'March 23, 2025',
      time: '10:00 AM',
      title: 'Hackathon Ends',
      description: 'Submission deadline'
    },
    {
      date: 'March 23, 2025',
      time: '11:00 AM',
      title: 'Presentations',
      description: 'Teams present their projects to judges'
    },
    {
      date: 'March 23, 2025',
      time: '1:00 PM',
      title: 'Awards Ceremony',
      description: 'Winners announcement and prize distribution'
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