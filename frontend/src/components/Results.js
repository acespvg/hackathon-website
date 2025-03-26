import React, { useState } from 'react';
import './Results.css';

const Results = () => {
  const [activeSection, setActiveSection] = useState('final-results');

  const judgingCriteria = [
    { 
      criteria: "Clarity and Understanding of Problem Statement", 
      maxScore: 5 
    },
    { 
      criteria: "Impact and Usefulness of the solution", 
      maxScore: 5 
    },
    { 
      criteria: "How realistic is the solution?", 
      maxScore: 5 
    },
    { 
      criteria: "Technical Depth", 
      maxScore: 5 
    },
    { 
      criteria: "Innovation and Creativity in solution", 
      maxScore: 10 
    },
    { 
      criteria: "Scalability and Future Scope", 
      maxScore: 5 
    },
    { 
      criteria: "Presentation and Structure", 
      maxScore: 5 
    },
    { 
      criteria: "How much solution is completed", 
      maxScore: 5 
    },
    { 
      criteria: "Number of domains included and their individual completion rate", 
      maxScore: 5
    }
  ];

  const roundOneResults = [
    { 
      rank: 1, 
      team: "Deepfake Detection System", 
      scores: [4, 5, 4, 5, 9, 4, 5, 4, 45],
      totalScore: 35.0
    },
    { 
      rank: 2, 
      team: "AI News Verifier", 
      scores: [4, 4, 4, 4, 8, 4, 4, 4, 42],
      totalScore: 34.0
    },
    { 
      rank: 3, 
      team: "Innovation Mentorship Platform", 
      scores: [5, 4, 4, 4, 8, 4, 5, 4, 40],
      totalScore: 33.0
    },
    { 
      rank: 4, 
      team: "Smart City Data Platform", 
      scores: [4, 4, 3, 4, 7, 4, 4, 3, 38],
      totalScore: 31.0
    },
    { 
      rank: 5, 
      team: "Resume Intelligence Tool", 
      scores: [3, 4, 4, 3, 7, 3, 4, 3, 36],
      totalScore: 30.0
    },
    { 
      rank: 6, 
      team: "EcoSmart Solutions", 
      scores: [3, 3, 3, 3, 6, 3, 4, 3, 35],
      totalScore: 28.0
    }
  ];

  const judgeTeamAllocations = [
    {
      judge: "Dr. Arjun Mehta",
      teams: [
        "EcoSmart Solutions",
        "HealthTrack Pro",
        "AgriTech Innovators",
        "Urban Mobility Optimizer",
        "EdTech Learning Platform",
        "Financial Inclusion App",
        "Cybersecurity Shield",
        "Smart Waste Management"
      ]
    },
    {
      judge: "Prof. Priya Sharma",
      teams: [
        "AI News Verifier",
        "Rural Connectivity Hub",
        "Mental Wellness Tracker",
        "Skill Bridge Network",
        "Digital Farmer Assistant",
        "Student Mentor Connector",
        "Adaptive Learning System",
        "Remote Work Collaboration Tool"
      ]
    },
    {
      judge: "Rajesh Kumar",
      teams: [
        "Deepfake Detection System",
        "Smart City Data Platform",
        "Personalized Education Planner",
        "Job Market Matchmaker",
        "Legal Rights Simplifier",
        "Digital Payment for Schools",
        "Language Learning AI",
        "Emergency Response Network"
      ]
    },
    {
      judge: "Sneha Patel",
      teams: [
        "Inclusive Travel Companion",
        "Agricultural Market Optimizer",
        "Youth Skill Development Platform",
        "Mental Health Community",
        "Urban Service Aggregator",
        "Digital Identity Verification",
        "Sustainable Living Guide",
        "Community Resource Sharing"
      ]
    },
    {
      judge: "Dr. Vikram Singh",
      teams: [
        "Resume Intelligence Tool",
        "Multilingual Education Platform",
        "Daily Wage Worker Network",
        "Climate Change Awareness App",
        "Community Healthcare Solution",
        "Digital Literacy Initiative",
        "Smart Accommodation Finder",
        "Team Collaboration Optimizer"
      ]
    },
    {
      judge: "Ananya Reddy",
      teams: [
        "Innovation Mentorship Platform",
        "Social Impact Tracker",
        "Skill Exchange Marketplace",
        "Crisis Management System",
        "Personalized Nutrition Advisor",
        "Urban Mobility Solutions",
        "Digital Financial Literacy",
        "Community Empowerment Network"
      ]
    }
  ];

  const shortlistedTeams =[
    {
        "teamName": "Coduku",
        "leader": "Jyoti"
    },
    {
        "teamName": "CodeGenius",
        "leader": "Gaurang Khanderay"
    },
    {
        "teamName": "BichdeHueDost",
        "leader": "Shreyash Chilip"
    },
    {
        "teamName": "Team Kinesis",
        "leader": "Kunal khairnar"
    },
    {
        "teamName": "Compile Time Error .",
        "leader": "Devang Gandhi"
    },
    {
        "teamName": "N.E.R.V.",
        "leader": "Hrishikesh Gavai"
    },
    {
        "teamName": "Beyond Matrix",
        "leader": "Atharva Belavanki"
    },
    {
        "teamName": "Tech Tribe",
        "leader": "Tejal Wahadane"
    },
    {
        "teamName": "Bravo 4",
        "leader": "Peter Bose"
    },
    {
        "teamName": "Procrastinator",
        "leader": "Krupal Akhadkar"
    },
    {
        "teamName": "Cryptic Coders",
        "leader": "Lavesh Akhadkar"
    },
    {
        "teamName": "Neurosync",
        "leader": "Purvesh Mali"
    },
    {
        "teamName": "Dev Dominators",
        "leader": "Mrugesh Patil"
    },
    {
        "teamName": "Unoverse",
        "leader": "Vaishnavi Borkar"
    },
    {
        "teamName": "Glitch Club",
        "leader": "Rugvedi Nimbhore"
    },
    {
        "teamName": "Team = Byte.Babies()",
        "leader": "Aryan Sirsavkar"
    },
    {
        "teamName": "Team laksha",
        "leader": "Ashok Mayekar"
    },
    {
        "teamName": "EnvisionTech",
        "leader": "Shankar Hande"
    },
    {
        "teamName": "Mindfull",
        "leader": "Rajwardhan Mali"
    },
    {
        "teamName": "Attention Seekers",
        "leader": "Prajwal Ganar"
    },
    {
        "teamName": "Techno brats",
        "leader": "Satnaam singh Gandhi"
    },
    {
        "teamName": "Hello World",
        "leader": "Aditya Pawar"
    },
    {
        "teamName": "Dhumraketu",
        "leader": "Aniket Chakke"
    },
    {
        "teamName": "Code crusaders",
        "leader": "Swanand Mukkawar"
    },
    {
        "teamName": "Code Gamblers",
        "leader": "Jagdish Waghmode"
    },
    {
        "teamName": "Syntax Terror",
        "leader": "Rahul Shendre"
    },
    {
        "teamName": "XLR8",
        "leader": "Devavrat Dhaygude"
    },
    {
        "teamName": "Crazy8",
        "leader": "Aditya Nikam"
    },
    {
        "teamName": "Brainstorm Troopers",
        "leader": "Rajvardhan Tekawade"
    },
    {
        "teamName": "Diablo",
        "leader": "Kaustubh Mhatre"
    },
    {
        "teamName": "Namaste Techies",
        "leader": "Ganesh Khetawat"
    },
    {
        "teamName": "AutomateX",
        "leader": "Sohesh Gandhe"
    },
    {
        "teamName": "Coder's Cafe",
        "leader": "Adarsh Hule"
    },
    {
        "teamName": "Veectania",
        "leader": "Om Pawar"
    },
    {
        "teamName": "Team BroCode",
        "leader": "Rudra Swant"
    },
    {
        "teamName": "SheCodes",
        "leader": "Priya Rangapure"
    },
    {
        "teamName": "Techtitans",
        "leader": "Srivalli Korada"
    },
    {
        "teamName": "Team  Pixels",
        "leader": "UTKARSH KOTKAR"
    },
    {
        "teamName": "Terminal Titans",
        "leader": "Yash Gawandare"
    },
    {
        "teamName": "Bugfathers",
        "leader": "Nihal Namdeo"
    },
    {
        "teamName": "TechTitan",
        "leader": "Prathmesh Mohite"
    },
    {
        "teamName": "Alice Crazy",
        "leader": "Soham khairnar"
    },
    {
        "teamName": "Shivaspear",
        "leader": "Rohan Gaikwad"
    },
    {
        "teamName": "Tech titans",
        "leader": "Yash Ambodekar"
    },
    {
        "teamName": "Team Rocket",
        "leader": "SWARAJ PATIL"
    },
    {
        "teamName": "Achievers",
        "leader": "Prasad Kokane"
    },
    {
        "teamName": "Maestromeets",
        "leader": "Sarthak Deshmukh"
    },
    {
        "teamName": "VedaVerse",
        "leader": "Raj Khanke"
    },
    {
        "teamName": "Shakham Inc.",
        "leader": "Prathmesh Ghatmal"
    },
    {
        "teamName": "Techies",
        "leader": "Sankalp Chakre"
    },
    {
        "teamName": "Ignite",
        "leader": "Shreya Patil"
    }
];

//   const roundOneResults = [
//     { rank: 1, team: "Deepfake Detection System", score: 92.5 },
//     { rank: 2, team: "AI News Verifier", score: 89.3 },
//     { rank: 3, team: "Innovation Mentorship Platform", score: 87.6 },
//     { rank: 4, team: "Smart City Data Platform", score: 85.2 },
//     { rank: 5, team: "Resume Intelligence Tool", score: 83.7 },
//     { rank: 6, team: "EcoSmart Solutions", score: 81.5 }
//   ];

  const finalResults = [
    { rank: 1, team: "Bichde hue Dost", prize: "₹31,000" },
    { rank: 2, team: "Bravo 4", prize: "₹21,000" },
    { rank: 3, team: "Crazy8", prize: "₹11,000" }
  ];

//   const judgingCriteria = [
//     "Innovation and Originality (30%)",
//     "Technical Feasibility (25%)",
//     "Potential Social Impact (20%)",
//     "Presentation Quality (15%)",
//     "Market Viability (10%)"
//   ];

    // Judges
    const judges = ["Neha Deshmukh", "Ajit Lokare", "Vivek Kulkarni", "Neeraj Kulkarni", "Chinmay Joglekar", "Rohit Anurag"];

    // Teams evaluated by each judge
    const judgeEvaluations = {
        "Neha Deshmukh": [
            { team: "Team Kinesis", score: 39 },
            { team: "BichdeHueDost", score: 37 },
            { team: "Nexus", score: 32 },
            { team: "Unoverse", score: 32 },
            { team: "Team Veectania", score: 31 },
            { team: "Cryptic Coders", score: 25 },
            { team: "Ignite", score: 23 },
            { team: "NeuroSync", score: 22 }
        ],
        "Ajit Lokare": [
            { team: "VedaVerse", score: 40 },
            { team: "Glitch Club", score: 34 },
            { team: "Code Crusaders", score: 29 },
            { team: "Dev Dominators", score: 28 },
            { team: "XLR8", score: 27 },
            { team: "Terminal Titans", score: 25 },
            { team: "Shakham Inc.", score: 25 },
            { team: "Team BroCode", score: 19 }
        ],
        "Vivek Kulkarni": [
            { team: "Tech Tribe", score: 42 },
            { team: "Syntax Terror", score: 39 },
            { team: "Coder's Cafe", score: 32 },
            { team: "SheCodes", score: 31 },
            { team: "EnvisionTech", score: 27 },
            { team: "Alice Crazy", score: 23 },
            { team: "Procrastinator", score: 22 },
            { team: "Namaste Techies", score: 20 }
        ],
        "Neeraj Kulkarni": [
            { team: "Bravo 4", score: 42 },
            { team: "Dhumraketu", score: 39 },
            { team: "Crazy8", score: 38 },
            { team: "Hello World", score: 32 },
            { team: "Techno Brats", score: 31 },
            { team: "Team Rocket", score: 30 },
            { team: "Maesromeets", score: 26 },
            { team: "Achievers", score: 24 },
            { team: "TechTitans", score: 18 }
        ],
        "Chinmay Joglekar": [
            { team: "Mindfull", score: 41 },
            { team: "AutomateX", score: 39 },
            { team: "Team Laksha", score: 30 },
            { team: "Bugfathers", score: 28 },
            { team: "Team Pixels", score: 27 },
            { team: "CodeGenius", score: 26 },
            { team: "Beyond Matrix", score: 26 },
            { team: "Tech Titans", score: 23 },
            { team: "Brainstorm Troopers", score: 22 }
        ],
        "Rohit Anurag": [
            { team: "Attention Seekers", score: 43 },
            { team: "Techies", score: 40 },
            { team: "Team = Byte.Babies()", score: 32 },
            { team: "TechTitan", score: 31 },
            { team: "N.E.R.V", score: 31 },
            { team: "Code Gamblers", score: 27 },
            { team: "Coduku", score: 25 },
            { team: "ShivaSpear", score: 24 },
            { team: "Compile Time Error", score: 19 }
        ]
    };
    

  return (
    <div className="hackathon-results-container">
      <header className="results-header">
        <h1>Innoverse HackFest 2025 Results</h1>
        <nav className="results-nav">
          {['Shortlisted Teams', 'Judging Criteria', 'Results', 'Final Results'].map((section, index) => (
            <button 
              key={index}
              className={activeSection === section.toLowerCase().replace(' ', '-') ? 'active' : ''}
              onClick={() => {
                if (section === 'Results') {
                  window.open('/First Round Marksheet.pdf', '_blank'); // Open PDF in new tab
                }
                if (section === 'Shortlisted Teams') {
                  window.open('/Innoverse Round 1 Shotlist.pdf', '_blank'); // Open PDF in new tab
                }
                else {
                  setActiveSection(section.toLowerCase().replace(' ', '-'));
                }
              }}
            >
              {section}
            </button>
          ))}
        </nav>

      </header>

      <main className="results-content">
        {activeSection === 'shortlisted-teams' && (
          <section className="shortlisted-teams">
            <h2>Shortlisted Teams</h2>
            {/* <div className="team-grid">
              {shortlistedTeams.map((team, index) => (
                <div key={index} className="team-card">
                  <h3>{team}</h3>
                </div>
              ))}
            </div> */}

            <table className="winners-table">
                    <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Team Name</th>
                        <th>Team Leader</th>
                        {/* <th>Team Members</th> */}
                    </tr>
                    </thead>
                    <tbody>
                    {shortlistedTeams.map((team, index) => (
                        <tr key={index}>
                        <td className="rank-column" data-label="Sr.no">
                            {index + 1}
                        </td>
                        <td className="team-name-column" data-label="Team Name">
                            {team.teamName}
                        </td>
                        <td className="team-leader-column" data-label="Team Leader">
                            {team.leader}
                        </td>
                        {/* <td className="team-members-column" data-label="Team Members">
                            {winner.members.join(", ")}
                        </td> */}
                        </tr>
                    ))}
                    </tbody>
                </table>
          </section>
        )}



        {activeSection === 'judging-criteria' && (
          <section className="judging-criteria">
            <h2>Judging Criteria</h2>
            <div className="criteria-table">
              <div className="criteria-header">
                <div className="criteria-name">Criteria</div>
                <div className="criteria-score">Max Score</div>
              </div>
              {judgingCriteria.map((item, index) => (
                <div key={index} className="criteria-row">
                  <div className="criteria-name">{item.criteria}</div>
                  <div className="criteria-score">{item.maxScore}</div>
                </div>
              ))}
              <div className="criteria-total">
                <div className="criteria-name">Total</div>
                <div className="criteria-score">50</div>
              </div>
            </div>
          </section>
        )}

        {/* {activeSection === 'round-1-results' && (
          <section className="round-one-results">
            <h2>Round 1 Results</h2>
            <div className="results-table-container">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Team</th>
                    {judgingCriteria.map((criteria, index) => (
                      <th key={index} className="criteria-tooltip" title={criteria.criteria}>
                        C{index + 1}
                      </th>
                    ))}
                    <th>Total Score</th>
                  </tr>
                </thead>
                <tbody>
                  {roundOneResults.map((result, index) => (
                    <tr key={index}>
                      <td>{result.rank}</td>
                      <td>{result.team}</td>
                      {result.scores.map((score, scoreIndex) => (
                        <td key={scoreIndex}>{score}</td>
                      ))}
                      <td>{result.totalScore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="criteria-legend">
              {judgingCriteria.map((criteria, index) => (
                <div key={index} className="legend-item">
                  C{index + 1}: {criteria.criteria}
                </div>
              ))}
            </div>
          </section>
        )} */}

        {activeSection === "results" && (
          <section className="judge-rankings">
            <h2>Judge Rankings</h2>
            {judges.map((judge, judgeIndex) => {
              const rankings = (judgeEvaluations[judge] || []).sort((a, b) => b.score - a.score);

              return (
                <div key={judgeIndex} className="judge-section">
                  <h3>{judge}</h3>
                  {rankings.length > 0 ? (
                    <table className="judge-table">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Team</th>
                          <th>Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rankings.map((entry, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.team}</td>
                            <td>{entry.score}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>No teams evaluated by this judge.</p>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {activeSection === 'final-results' && (
          <section className="final-results">
            <h2>Final Results</h2>

            {/* Podium Display */}
            <div className="podium">
              {finalResults.map((result, index) => (
                <div key={index} className={`podium-position position-${result.rank}`}>
                  <h3>Rank {result.rank}</h3>
                  <p>{result.team}</p>
                  <div className="prize-amount1">{result.prize}</div>
                </div>
              ))}
            </div>

            {/* PDF View Button */}
            <div className="pdf-container">
              <a href="/Final Round Evaluation.pdf" target="_blank" rel="noopener noreferrer" className="pdf-button">
                📄 View Final Rankings (PDF)
              </a>
            </div>
          </section>
        )}

      </main>

      <footer className="results-footer">
        <p>© 2025 Innoverse HackFest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Results;