import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['hero', 'about', 'experience', 'education', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo - Left Side */}
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          <div className={styles.logoIcon}>KhA</div>
          <div className={styles.logoTextWrapper}>
            <span className={styles.logoName}>Khalifeh</span>
            <span className={styles.logoTitle}>Developer</span>
          </div>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className={styles.navPill}>
          <button 
            onClick={() => scrollToSection('about')}
            className={`${styles.navItem} ${activeSection === 'about' ? styles.active : ''}`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className={`${styles.navItem} ${activeSection === 'experience' ? styles.active : ''}`}
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className={`${styles.navItem} ${activeSection === 'education' ? styles.active : ''}`}
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className={`${styles.navItem} ${activeSection === 'skills' ? styles.active : ''}`}
          >
            Skills
          </button>
        </nav>

        {/* Contact Button - Right Side */}
        <button 
          onClick={() => scrollToSection('contact')}
          className={styles.contactBtn}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.menuToggle} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.show : ''}`}>
          <nav className={styles.mobileNav}>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('experience')}>Experience</button>
            <button onClick={() => scrollToSection('education')}>Education</button>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
            <button onClick={() => scrollToSection('contact')} className={styles.mobileContactBtn}>
              Get In Touch
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;