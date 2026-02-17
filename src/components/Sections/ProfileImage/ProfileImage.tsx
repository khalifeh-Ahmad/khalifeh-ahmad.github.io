import React, { useRef, MouseEvent, TouchEvent, useState } from "react";
import styles from "./ProfileImage.module.css";

interface ProfileImageProps {
  professionalSrc: string;
  casualSrc: string;
  alt: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  professionalSrc,
  casualSrc,
  alt,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 968 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isMobile || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
      if (containerRef.current) {
        containerRef.current.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      }
    }
  };

  // Handle tap/touch for mobile
  const handleTap = () => {
    if (isMobile) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div className={styles.profileImageContainer}>
      {/* Animated Gradient Border */}
      <div className={styles.gradientBorder}>
        <div className={styles.gradientBorderInner}></div>
      </div>

      {/* Glass Morphism Frame */}
      <div
        ref={containerRef}
        className={styles.glassFrame}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleTap}
        onTouchStart={handleTap}
      >
        {/* Profile Images */}
        <div className={styles.imageWrapper}>
          {/* Professional Image */}
          <img
            src={professionalSrc}
            alt={`${alt} - Professional`}
            className={`${styles.profileImage} ${styles.professionalImage} ${
              isHovered ? styles.hidden : ""
            }`}
          />

          {/* Casual Image */}
          <img
            src={casualSrc}
            alt={`${alt} - Casual`}
            className={`${styles.profileImage} ${styles.casualImage} ${
              isHovered ? styles.visible : ""
            }`}
          />
        </div>

        {/* Glass Overlay */}
        <div className={styles.glassOverlay}></div>

        {/* Shine Effect */}
        <div className={styles.shineEffect}></div>

        {/* Hover/Tap Indicator Text */}
        <div
          className={`${styles.hoverIndicator} ${
            isHovered ? styles.fadeOut : ""
          }`}
        >
          {isMobile ? "Tap to see casual me" : "Hover to see casual me"}
        </div>
      </div>

      {/* Floating Particles/Dots */}
      <div className={styles.particle} style={{ top: "10%", left: "5%" }}></div>
      <div
        className={styles.particle}
        style={{ top: "20%", right: "8%" }}
      ></div>
      <div
        className={styles.particle}
        style={{ bottom: "15%", left: "10%" }}
      ></div>
      <div
        className={styles.particle}
        style={{ bottom: "25%", right: "5%" }}
      ></div>
    </div>
  );
};

export default ProfileImage;
