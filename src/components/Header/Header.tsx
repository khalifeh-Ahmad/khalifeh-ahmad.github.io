import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { profileData } from "../../data/portfolio";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection("hero")}>
          {profileData.name}
        </div>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`${styles.nav} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>
          <button onClick={() => scrollToSection("education")}>
            Education
          </button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
