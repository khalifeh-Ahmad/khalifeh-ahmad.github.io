import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import { testimonials } from "../../../data/portfolio";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className={styles.testimonials} ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What People Say</h2>
        <p className={styles.subtitle}>
          Feedback from colleagues and clients I've had the pleasure to work
          with
        </p>

        <div
          className={`${styles.testimonialCard} animate-on-scroll scale-in ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className={styles.quoteIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
          </div>

          <div className={styles.testimonialContent}>
            <p className={styles.message}>{currentTestimonial.message}</p>

            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill={i < currentTestimonial.rating ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>

            <div className={styles.author}>
              <div className={styles.avatar}>
                {currentTestimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className={styles.name}>{currentTestimonial.name}</div>
                <div className={styles.position}>
                  {currentTestimonial.position} at {currentTestimonial.company}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.navigation}>
            <button
              onClick={prevTestimonial}
              className={styles.navButton}
              aria-label="Previous"
            >
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
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className={styles.indicators}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${
                    index === activeIndex ? styles.active : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className={styles.navButton}
              aria-label="Next"
            >
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
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
