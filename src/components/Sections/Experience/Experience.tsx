import React, { useState } from "react";
import styles from "./Experience.module.css";
import { experiences } from "../../../data/portfolio";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const INITIAL_COUNT = 2;

interface ExperienceItemProps {
  exp: (typeof experiences)[0];
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp, index }) => {
  return (
    <div
      className={styles.timelineItem}
      style={{
        animation: `fadeInLeft 0.6s ease both`,
        animationDelay: `${index * 0.15}s`,
      }}
    >
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
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
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
  );
};

const Experience: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [isLoading, setIsLoading] = useState(false);
  const titleAnimation = useScrollAnimation(0.1);

  const hasMore = visibleCount < experiences.length;
  const visibleExperiences = experiences.slice(0, visibleCount);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 2, experiences.length));
      setIsLoading(false);
    }, 600);
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_COUNT);
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2
          ref={titleAnimation.ref}
          className={` animate-on-scroll fade-in-up ${
            titleAnimation.isVisible ? "visible" : ""
          }`}
        >
          Work Experience
        </h2>

        <p className={styles.counter}>Work & experiences</p>

        <div className={styles.timeline}>
          {visibleExperiences.map((exp, index) => (
            <ExperienceItem key={exp.id} exp={exp} index={index} />
          ))}

          {isLoading && (
            <div className={styles.skeletonItem}>
              <div className={styles.skeletonDot}></div>
              <div className={styles.skeletonContent}>
                <div className={styles.skeletonPeriod}></div>
                <div className={styles.skeletonTitle}></div>
                <div className={styles.skeletonLine}></div>
                <div
                  className={styles.skeletonLine}
                  style={{ width: "60%" }}
                ></div>
                <div
                  className={styles.skeletonLine}
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.actions}>
          {hasMore && !isLoading && (
            <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
              <span>Load More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          )}

          {isLoading && (
            <button
              className={`${styles.loadMoreBtn} ${styles.loading}`}
              disabled
            >
              <div className={styles.spinner}></div>
              <span>Loading...</span>
            </button>
          )}

          {!hasMore && experiences.length > INITIAL_COUNT && (
            <button
              className={`${styles.loadMoreBtn} ${styles.showLessBtn}`}
              onClick={handleShowLess}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              <span>Show Less</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
