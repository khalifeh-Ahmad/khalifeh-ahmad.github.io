import React from "react";
import styles from "./About.module.css";
import { profileData } from "../../data/portfolio";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>{profileData.aboutme}</p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <div className={styles.icon}>
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3>6+ Years Experience</h3>
                  <p>Building modern web applications</p>
                </div>
              </div>

              <div className={styles.highlight}>
                <div className={styles.icon}>
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
                </div>
                <div>
                  <h3>Multiple Industries</h3>
                  <p>Telecom, Retail, Automation</p>
                </div>
              </div>

              <div className={styles.highlight}>
                <div className={styles.icon}>
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
                  <h3>Team Collaboration</h3>
                  <p>Agile workflows & cross-functional teams</p>
                </div>
              </div>

              <div className={styles.highlight}>
                <div className={styles.icon}>
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
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div>
                  <h3>Clean Code</h3>
                  <p>Maintainable & scalable solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>Years of Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>13+</div>
              <div className={styles.statLabel}>Technologies Mastered</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5</div>
              <div className={styles.statLabel}>Companies Worked With</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>11+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
