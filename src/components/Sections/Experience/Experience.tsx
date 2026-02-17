import React from "react";
import styles from "./Experience.module.css";
import { experiences } from "../../../data/portfolio";

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Work Experience</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.period}>
                  {exp.startDate} - {exp.endDate}
                </div>
                <h3 className={styles.position}>{exp.position}</h3>
                <div className={styles.company}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  {exp.company}
                </div>
                <div className={styles.location}>
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {exp.location}
                </div>
                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
