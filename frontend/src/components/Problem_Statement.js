import React, { useState } from 'react';
import './ProblemStatement.css';

function Problem_Statement() {
  const [expandedPS, setExpandedPS] = useState(null);

  const problemStatements = [
    {
      id: 1,
      title: "Student Mentor Finder & Intelligent Team Builder for Collaboration and Innovation",
      description: "Students often struggle to find the right mentor or form a strong team - especially in a campus or tech community. This leads to missed opportunities for growth, collaboration and innovation. Create a platform that enables users to showcase their skills, find and connect with peers expertised in specific areas to learn and collaborate with them. Implement incentives that encourage mentorship and guidance. Create an engaging system that facilitates these connections. Additionally, students face problems while creating a skillful hackathon or project team, as each project or problem has specific skills required that the user may not possess. The platform should also address this challenge of assembling effective teams."
    },
    {
      id: 2,
      title: "Smart Accommodation Finder: Enhancing Travel Experiences Through Seamless Stay Selection",
      description: "While traveling, people often face challenges in finding suitable accommodations, especially in unfamiliar locations. The lack of local knowledge makes it difficult to identify the best options, compare facilities, and make informed decisions, often leading to a time-consuming and frustrating experience. The process of manually searching for accommodations, checking reviews, comparing amenities, and ensuring affordability can be overwhelming, ultimately affecting the overall travel experience. Devise an innovative solution that eliminates the need for manual searching, streamlines the decision-making process, and enhances the overall quality of stay, ensuring a seamless and satisfactory accommodation experience."
    },
    {
      id: 3,
      title: "Enhancing Self-Study: Overcoming Challenges in Guidance, Planning, and Engagement",
      description: "Students who plan on doing self study usually face problems regarding proper guidance and a proper study path leading to improper management and fear of missing out on a few things. Moreover students fail to update the plans on regular intervals which makes the entire strategy feel monotonic and slowly they lose interest in following the plan. Usually parents also provide some insights on a regular basis but those are left unnoticed in their plans. This lack of engagement and adaptability makes it challenging for students to stay motivated and effectively manage their learning process. Come up with a solution for the given issues."
    },
    {
      id: 4,
      title: "Defending Against Digital Deception: A Comprehensive Deepfake and Social Engineering Attack Detection System",
      description: "The rise of deepfake technology and social engineering attacks pose a serious threat across cybersecurity, finance, media, and law enforcement. Deepfakes enable identity theft, misinformation, fraud, and AI-driven scams, making it difficult to trust digital content. Social engineering attacks use AI-powered deception, voice cloning, and psychological manipulation to steal sensitive data and bypass security measures. Even biometric authentication and legal evidence are vulnerable to forgery, undermining trust in digital interactions. With no real-time detection system in place, businesses, governments, and individuals face increasing threats. A scalable, intelligent solution is needed to detect deepfake content and social engineering tactics, ensuring digital authenticity and security."
    },
    {
      id: 5,
      title: "Fragmented Urban Information Systems and Lack of Data Reliability in Smart Cities",
      description: "Urban residents rely on various digital platforms to access essential city-related information such as traffic conditions, air quality, public services, emergency alerts and many more. However, these systems are often fragmented, requiring users to navigate multiple sources, leading to inefficiency and confusion. Moreover, there is no standardized way to verify the accuracy and reliability of the data provided, making it difficult for both citizens and administrators to make informed decisions. The absence of a centralized, trustworthy source of real-time urban data creates challenges in urban planning, crisis response, and everyday city life."
    },
    {
      id: 6,
      title: "Overcoming Misinformation, Bias, and Privacy Challenges in AI-Driven Personalized News Platform",
      description: "The rapid spread of misinformation and the increasing reliance on AI for content curation present significant challenges in developing a personalized, trustworthy, and explainable news platform. Existing systems often lack contextual understanding, making it difficult to generate news summaries that are both accurate and comprehensible. Fact-checking and source authentication remain critical issues, as misinformation is becoming more sophisticated, and verifying credibility in a decentralized manner is complex. Deepfake detection struggles to keep up with evolving adversarial techniques that manipulate media authenticity, making it harder to differentiate real news from AI-generated fabrications. Additionally, AI-driven recommendation systems frequently reinforce biases, yet there is no effective mechanism for real-time bias detection and algorithmic transparency that allows users to control how information is filtered and presented. Privacy concerns further complicate personalization, as traditional encryption methods limit AI's ability to analyze user preferences while ensuring data security. Furthermore, interactive and immersive news formats, including AI-driven data visualization and virtual reality briefings, remain underdeveloped, leaving users with static and often disengaging content. Another challenge lies in monitoring decentralized social media platforms, where AI-driven counter-narratives against misinformation must be effective without infringing on free speech or creating unintended biases. Developing a platform that balances explainability, credibility, user control, and privacy while maintaining high engagement and journalistic integrity remains an open problem in AI-driven personalized news synthesis and verification."
    },
    {
      id: 7,
      title: "Bridging the Agricultural Divide: A One-Stop Digital Solution to Empower Indian Farmers and Strengthen Rural Economies",
      description: "Indian farmers face multiple challenges due to the lack of a centralized platform for agricultural support. Market price fluctuations, supply chain inefficiencies, and unreliable weather forecasts impact their productivity and income. Many struggle to access government schemes, affordable credit, and verified agricultural inputs, often falling prey to middlemen and counterfeit products. Limited knowledge of modern farming techniques, poor post-harvest storage, and difficulty in renting equipment further hinder progress. Additionally, digital illiteracy and language barriers prevent widespread adoption of existing solutions. Create a solution to address this issue."
    },
    {
      id: 8,
      title: "Eliminating Cash Dependency in Schools: A Secure and Transparent Digital Payment System",
      description: "Schools in India continue to rely on cash-based transactions for canteen purchases, school bus fees, textbooks, and extracurricular activities, leading to multiple inefficiencies and risks. Students carrying cash are vulnerable to loss, theft, or misuse, and parents lack visibility into how their children spend money. Tracking daily expenses, especially for younger students, becomes difficult, leading to unmonitored spending and unhealthy food choices. Schools face administrative burdens in managing cash, reconciling payments, and handling disputes over lost receipts or incorrect charges. The lack of automated record-keeping results in errors and inefficiencies in financial management. Additionally, many students from different economic backgrounds may struggle with cash handling, creating disparities in financial access and security. Develop an innovative solution to tackle these problems."
    },
    {
      id: 9,
      title: "The Indian judiciary faces delays in decision-making, leading to prolonged case resolutions. Additionally, the Indian Constitution is complex for the general public to understand. Develop a solution to resolve these issues.",
      description: "The Indian judiciary faces delays in resolving cases, leading to a growing backlog. Additionally, the complexity of the Indian Constitution makes it difficult for people to understand their legal rights. This challenge requires a solution that speeds up the judicial process while simplifying constitutional laws for better accessibility. This system should improve the judiciary process and simplify Constitution laws to ensure transparency, and empower citizens to navigate the legal framework with ease. Your task is to develop an innovative solution to address this issue."
    },
    {
      id: 10,
      title: "Job seekers often face challenges in keeping their resumes updated, well-structured, and tailored to opportunities. Existing tools require manual effort, offer limited customization, and lack seamless integration. The challenge is to streamline resume creation, making the process more efficient and user-friendly.",
      description: "Job seekers often struggle with keeping their resumes updated, well-structured, and tailored to different job opportunities. Many find it time-consuming to manually edit and format their resumes, leading to outdated or inconsistent information that can affect job prospects. Additionally, existing resume-building tools often require extensive data entry, provide rigid templates with limited customization, or fail to integrate with modern job search platforms. These challenges make it difficult for candidates to present their skills and experience effectively, reducing their chances of standing out in a competitive job market. Your task is to find a solution to this problem."
    },
    {
      id: 11,
      title: "Daily wage workers often struggle to find consistent job opportunities, while job providers face difficulties in connecting with the right workforce. The challenge is to address this gap and create a more efficient way to link workers with employment opportunities.",
      description: "Daily wage workers often struggle to find consistent jobs, relying on word-of-mouth or manual searches, leading to job insecurity and income instability. At the same time, job providers face challenges in quickly finding skilled workers, resulting in delays and inefficiencies. Existing job-matching systems often lack accessibility, transparency, or tailored features for this workforce, making the hiring process unreliable. Your task is to find a solution to this problem."
    }
  ];

  const toggleDescription = (id) => {
    if (expandedPS === id) {
      setExpandedPS(null);
    } else {
      setExpandedPS(id);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Hackathon Problem Statements</h1>
        <p>Click on a problem statement to learn more</p>
      </header>
      <main>
        <div className="problem-statements">
          {problemStatements.map((ps) => (
            <div 
              key={ps.id} 
              className={`ps-card ${expandedPS === ps.id ? 'expanded' : ''}`}
              onClick={() => toggleDescription(ps.id)}
            >
              <div className="ps-header">
                <h2>PS {String(ps.id).padStart(2, '0')}</h2>
                <h3>{ps.title}</h3>
                <div className="expand-icon">{expandedPS === ps.id ? '−' : '+'}</div>
              </div>
              {expandedPS === ps.id && (
                <div className="ps-description">
                  <p>{ps.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      
    </div>
  );
}

export default Problem_Statement;
