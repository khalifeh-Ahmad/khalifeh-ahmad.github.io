import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const About: React.FC = () => {
  const { ref, isVisible, isExiting } = useScrollAnimation();
  const [counts, setCounts] = useState({
    exp: 0,
    tech: 0,
    companies: 0,
    projects: 0,
  });

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const targets = { exp: 5, tech: 20, companies: 4, projects: 50 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        setCounts({
          exp: Math.min(Math.floor((targets.exp * step) / steps), targets.exp),
          tech: Math.min(
            Math.floor((targets.tech * step) / steps),
            targets.tech
          ),
          companies: Math.min(
            Math.floor((targets.companies * step) / steps),
            targets.companies
          ),
          projects: Math.min(
            Math.floor((targets.projects * step) / steps),
            targets.projects
          ),
        });

        if (step >= steps) clearInterval(timer);
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);
  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>

        <div className={styles.magazineLayout}>
          {/* Featured Quote */}
          <div className={styles.featuredQuote}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.quoteText}>
              I view applications as connected systems rather than isolated
              layers
            </p>
            <div className={styles.quoteAuthor}>
              — Systems Thinking Approach
            </div>
          </div>

          {/* Main Article */}
          <article className={styles.article}>
            <div className={styles.articleSection}>
              <h3 className={styles.articleHeading}>
                <span className={styles.headingAccent}>✦</span>
                My Craft
              </h3>
              <p className={styles.articleText}>
                I build web interfaces with{" "}
                <mark className={styles.mark}>React and TypeScript</mark>, with
                attention to how they integrate with APIs, databases, and
                business logic behind the scenes. My development approach
                includes{" "}
                <mark className={styles.mark}>
                  testing considerations from the start
                </mark>
                —because maintainable code is easier to validate.
              </p>
            </div>

            <div className={styles.articleSection}>
              <h3 className={styles.articleHeading}>
                <span className={styles.headingAccent}>✦</span>
                My Journey
              </h3>
              <p className={styles.articleText}>
                My background includes{" "}
                <mark className={styles.mark}>
                  frontend development at Source Code
                </mark>
                , full-cycle software engineering and testing at{" "}
                <mark className={styles.mark}>Syriatel Mobile Telecom</mark>,
                and designing workflow automations with{" "}
                <mark className={styles.mark}>N8N at Maids.cc</mark>.
              </p>
            </div>

            <div className={styles.articleSection}>
              <h3 className={styles.articleHeading}>
                <span className={styles.headingAccent}>✦</span>
                My Education
              </h3>
              <p className={styles.articleText}>
                A <mark className={styles.mark}>Master's in Web Science</mark>{" "}
                taught me to view applications as connected systems rather than
                isolated layers. I'm now complementing that technical foundation
                with an{" "}
                <mark className={styles.mark}>MBA at Geomatika University</mark>{" "}
                to bridge technology implementation with business context.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h4 className={styles.sidebarTitle}>Core Strengths</h4>
              <ul className={styles.strengthsList}>
                <li>Full-stack mindset with frontend focus</li>
                <li>Test-driven development</li>
                <li>Systems thinking</li>
                <li>Business-tech bridge</li>
                <li>API integration expertise</li>
              </ul>
            </div>

            <div className={styles.sidebarCard}>
              <h4 className={styles.sidebarTitle}>By The Numbers</h4>
              <div className={styles.miniStats}>
                <div className={styles.miniStat}>
                  <span className={styles.miniNumber}>{counts.exp}+</span>
                  <span className={styles.miniLabel}>Years</span>
                </div>
                <div className={styles.miniStat}>
                  <span className={styles.miniNumber}>{counts.tech}+</span>
                  <span className={styles.miniLabel}>Tech</span>
                </div>
                <div className={styles.miniStat}>
                  <span className={styles.miniNumber}>{counts.companies}</span>
                  <span className={styles.miniLabel}>Industries</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
