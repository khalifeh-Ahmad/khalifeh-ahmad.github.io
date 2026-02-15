import {
  Experience,
  Education,
  Certification,
  Skill,
  ProfileData,
} from "../types";

export const profileData: ProfileData = {
  name: "Khalifeh Ahmad",
  title: "Front-End Developer/ Quality Assurance Engineer",
  location: "Kuala Lumpur, Malaysia",
  email: "khalifeh92ahmed@hotmail.com",
  phone: "(+60) 1161686507",
  linkedin: "https://www.linkedin.com/in/khalifeh-ahmad/",
  dateOfBirth: "16 May 1992",
  gender: "Male",
  summary:
    "I build web interfaces with React and TypeScript, with attention to how they integrate with APIs, databases, and business logic behind the scenes. My development approach includes testing considerations from the start—because maintainable code is easier to validate." +
    "My background includes frontend development at Source Code, full-cycle software engineering and testing at Syriatel Mobile Telecom, and currently designing workflow automations with N8N at Maids.cc. A Master's in Web Science taught me to view applications as connected systems rather than isolated layers. I'm now complementing that technical foundation with an MBA at Geomatika University to bridge technology implementation with business context.",
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Maids.cc",
    position: "Chatbot Technical Analyst",
    location: "Dubai, United Arab Emirates",
    startDate: "Apr 2025",
    endDate: "Current",
    responsibilities: [
      "Develop, test, and deploy automation workflows using tools such as N8N",
      "Collaborate with cross-functional teams to understand automation requirements and deliver tailored solutions",
      "Monitor, troubleshoot, and optimize workflows to ensure efficiency and reliability",
    ],
  },
  {
    id: "2",
    company: "Syriatel Mobile Telecom",
    position: "Software Developer",
    location: "Damascus, Syria",
    startDate: "Aug 2021",
    endDate: "Apr 2025",
    responsibilities: [
      "Developed, reviewed, and maintained robust, scalable software applications aligned with business requirements",
      "Performed in-depth system analysis and rigorous testing to ensure high performance, reliability, and functionality prior to deployment",
      "Designed and optimized complex SQL queries, stored procedures, and database scripts to enhance application efficiency and data integrity",
    ],
  },
  {
    id: "3",
    company: "Source Code",
    position: "Front-end Web Developer",
    location: "Damascus, Syria",
    startDate: "Oct 2019",
    endDate: "Aug 2021",
    responsibilities: [
      "Collaborated with analysts, designers, and team members to maintain and scale websites",
      "Ensured seamless integration of new functionalities while optimizing system performance and usability",
    ],
  },
  {
    id: "4",
    company: "Orient Gate Travel Retail (Duty Free)",
    position: "System Administrator",
    location: "Damascus, Syria",
    startDate: "Aug 2017",
    endDate: "Oct 2019",
    responsibilities: [
      "Analyzed system requirements and provided objective recommendations for improvements",
      "Monitored system performance and troubleshot issues to ensure efficiency and reliability",
    ],
  },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Master in Web Science",
    institution: "Syrian Virtual University",
    location: "Damascus, Syria",
    startDate: "Mar 2016",
    endDate: "May 2021",
    link: "https://svuonline.org/en/program/mws",
  },
  {
    id: "2",
    degree: "Information Technology Engineering",
    institution: "Tishreen University",
    location: "Tartus, Syria",
    startDate: "Sep 2010",
    endDate: "Aug 2015",
    link: "http://tartous-univ.edu.sy/faculty-of-information-and-communication/ar/index",
  },
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Build Intelligent Agents Using DeepSeek & N8N",
    issuer: "Coursera",
    date: "Aug 2025",
    link: "https://coursera.org/share/772d2b91df3fb58c84347424536f5c3e",
  },
  {
    id: "2",
    name: "Angular 17 Specialization",
    issuer: "Coursera",
    date: "Mar 2025",
    link: "https://coursera.org/share/6726894905d4e1bdc2d5e29aa5bde6d2",
  },
  {
    id: "3",
    name: "Software Development Processes and Methodologies",
    issuer: "Coursera",
    date: "Jun 2021",
    link: "https://coursera.org/share/c9d84b00040a0a306c13e76ee91fe97b",
  },
  {
    id: "4",
    name: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    issuer: "Coursera",
    date: "Feb 2021",
    link: "https://coursera.org/share/697d2754498cbb3d54c60213c84461ec",
  },
  {
    id: "5",
    name: "Software Testing Fundamentals for ISTQB",
    issuer: "Coursera",
    date: "Jan 2026",
    link: "https://coursera.org/share/09dcd6035fd7f76bff1f9f77a0c91eef",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend" },
  //{ name: "Angular", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "jQuery", category: "frontend" },

  // Backend
  //{ name: "PHP Laravel", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "Node.js", category: "backend" },

  // Database
  { name: "SQL", category: "database" },
  { name: "Oracle", category: "database" },
  { name: "PL/SQL", category: "database" },
  { name: "Elasticsearch", category: "database" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "N8N", category: "tools" },
  { name: "Agile (Scrum)", category: "tools" },
  { name: "jMeter", category: "tools" },
  { name: "Notion", category: "tools" },
  { name: "Software Testing", category: "tools" },
  { name: "Playwright", category: "tools" },
];
