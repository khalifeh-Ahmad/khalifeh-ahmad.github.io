import React from "react";
import styles from "./Skills.module.css";
import { skills } from "../../../data/portfolio";

const Skills: React.FC = () => {
  const frontend = skills.filter((s) => s.category === "frontend");
  const backend = skills.filter((s) => s.category === "backend");
  const database = skills.filter((s) => s.category === "database");
  const tools = skills.filter((s) => s.category === "tools");

  const SkillBadge = ({ name }: { name: string }) => (
    <div className={styles.skillBadge}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      {name}
    </div>
  );

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>

        <div className={styles.skillsGrid}>
          {/* Frontend */}
          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3>Front-End</h3>
            </div>
            <div className={styles.skillsList}>
              {frontend.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Back-End</h3>
            </div>
            <div className={styles.skillsList}>
              {backend.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Database */}
          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <h3>Database</h3>
            </div>
            <div className={styles.skillsList}>
              {database.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3>Tools & Others</h3>
            </div>
            <div className={styles.skillsList}>
              {tools.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} />
              ))}
            </div>
          </div>
        </div>

        {/* Professional Skills */}
        <div className={styles.professionalSkills}>
          <h3 className={styles.professionalTitle}>Professional Skills</h3>
          <div className={styles.professionalGrid}>
            <div className={styles.professionalItem}>
              <div className={styles.professionalIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <h4>Team Collaboration</h4>
                <p>Effective communication and strong teamwork abilities</p>
              </div>
            </div>

            <div className={styles.professionalItem}>
              <div className={styles.professionalIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h4>Task Management</h4>
                <p>Proficient in task management and problem-solving</p>
              </div>
            </div>

            <div className={styles.professionalItem}>
              <div className={styles.professionalIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div>
                <h4>Attention to Detail</h4>
                <p>
                  Detail oriented with strong organization and high accuracy
                </p>
              </div>
            </div>

            <div className={styles.professionalItem}>
              <div className={styles.professionalIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6m5.196-13.196l-4.243 4.243m0 6l-4.243 4.243m13.196-5.196l-6 .001m-6 0l-6-.001m13.196 5.196l-4.243-4.243m0-6l-4.243-4.243"></path>
                </svg>
              </div>
              <div>
                <h4>Agile Methodology</h4>
                <p>Experienced with Scrum and Agile development practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
