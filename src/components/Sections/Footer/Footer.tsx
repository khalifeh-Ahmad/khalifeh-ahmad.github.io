import React from "react";
import styles from "./Footer.module.css";
import { profileData } from "../../../data/portfolio";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.branding}>
            <div className={styles.logoBox}>
              <span className={styles.logoText}>KhA</span>
            </div>
            <div className={styles.brandInfo}>
              <h3 className={styles.brandName}>{profileData.name}</h3>
              <p className={styles.brandTagline}>
                Crafting digital experiences with modern web technologies
              </p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <h4 className={styles.ctaTitle}>Let's work together</h4>
            <p className={styles.ctaText}>
              Have a project in mind? Let's create something amazing together.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={styles.ctaButton}
            >
              <span>Start a Project</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className={styles.middleSection}>
          <div className={styles.linkGroup}>
            <h5 className={styles.linkTitle}>Navigate</h5>
            <div className={styles.linkList}>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Experience
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("education")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Education
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("skills")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Skills
              </button>
            </div>
          </div>

          <div className={styles.linkGroup}>
            <h5 className={styles.linkTitle}>Connect</h5>
            <div className={styles.linkList}>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href={`mailto:${profileData.email}`}>Email</a>
              <a href={`tel:${profileData.phone}`}>Phone</a>
            </div>
          </div>

          <div className={styles.linkGroup}>
            <h5 className={styles.linkTitle}>Location</h5>
            <div className={styles.locationInfo}>
              <div className={styles.locationIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
              </div>
              <div>
                <p className={styles.locationText}>{profileData.location}</p>
                <p className={styles.timezone}>GMT+8 (Malaysia Time)</p>
              </div>
            </div>
          </div>

          <div className={styles.linkGroup}>
            <h5 className={styles.linkTitle}>Follow</h5>
            <div className={styles.socialGrid}>
              <a
                href={`mailto:${profileData.email}`}
                className={styles.socialIcon}
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href={`tel:${profileData.phone}`}
                className={styles.socialIcon}
                aria-label="Phone"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <p>
              © {currentYear} {profileData.name}. All rights reserved.
            </p>
            <p className={styles.builtWith}>Built with React & TypeScript</p>
          </div>

          <button
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
