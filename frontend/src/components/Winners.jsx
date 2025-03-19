import React, { useEffect } from "react";
import "./Winners.css";

export default function Winners() {
  const winners =[
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
        "leader": "Harshad Jogdande"
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
    }
];

  useEffect(() => {
    const addAnimatedBackground = () => {
      const body = document.body;

      if (document.querySelector(".animated-bg")) return;

      if (!body.style.backgroundColor) {
        body.style.backgroundColor = "#060c22fa";
      }

      const animatedBg = document.createElement("div");
      animatedBg.classList.add("animated-bg");

      for (let i = 0; i < 15; i++) {
        const span = document.createElement("span");
        const size = Math.random() * 80 + 20;
        span.style.width = `${size}px`;
        span.style.height = `${size}px`;
        span.style.left = `${Math.random() * 100}%`;
        span.style.animationDuration = `${Math.random() * 10 + 10}s`;
        span.style.animationDelay = `${Math.random() * 5}s`;
        animatedBg.appendChild(span);
      }

      body.appendChild(animatedBg);
    };

    addAnimatedBackground();

    return () => {
      const animatedBg = document.querySelector(".animated-bg");
      if (animatedBg) animatedBg.remove();
    };
  }, []);

  return (
    <div className="winners-container">
      <h1 className="winners-title">
        <span className="trophy">🏆</span> Round 1 ShortListed Teams{" "}
        <span className="trophy">🏆</span>
      </h1>
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
          {winners.map((winner, index) => (
            <tr key={index}>
              <td className="rank-column" data-label="Sr.no">
                {index + 1}
              </td>
              <td className="team-name-column" data-label="Team Name">
                {winner.teamName}
              </td>
              <td className="team-leader-column" data-label="Team Leader">
                {winner.leader}
              </td>
              {/* <td className="team-members-column" data-label="Team Members">
                {winner.members.join(", ")}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
