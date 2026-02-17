import React, { useState } from "react";
import styles from "./ThemeSwitcher.module.css";
import { useTheme } from "../../../contexts/ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      id: "modern" as const,
      name: "Modern",
      icon: "✨",
      description: "Glassmorphism & gradients",
      preview: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: "classic" as const,
      name: "Classic",
      icon: "📘",
      description: "Professional & traditional",
      preview: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
    },
    {
      id: "minimal" as const,
      name: "Minimal",
      icon: "⚡",
      description: "Clean & simple",
      preview: "linear-gradient(135deg, #374151 0%, var(--text-dark) 100%)",
    },
  ];

  return (
    <div className={styles.themeSwitcher}>
      {/* Floating Button */}
      <button
        className={`${styles.floatingBtn} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
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
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 1v6m0 6v6m5.196-13.196l-4.243 4.243m0 6l-4.243 4.243m13.196-5.196l-6 .001m-6 0l-6-.001m13.196 5.196l-4.243-4.243m0-6l-4.243-4.243"></path>
        </svg>
      </button>

      {/* Theme Panel */}
      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}>
        <div className={styles.panelHeader}>
          <h3>Choose Your Style</h3>
          <button
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
            aria-label="Close"
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className={styles.themeGrid}>
          {themes.map((t) => (
            <button
              key={t.id}
              className={`${styles.themeCard} ${
                theme === t.id ? styles.active : ""
              }`}
              onClick={() => {
                setTheme(t.id);
                setIsOpen(false);
              }}
            >
              <div
                className={styles.themePreview}
                style={{ background: t.preview }}
              >
                <span className={styles.themeIcon}>{t.icon}</span>
              </div>
              <div className={styles.themeInfo}>
                <div className={styles.themeName}>{t.name}</div>
                <div className={styles.themeDescription}>{t.description}</div>
              </div>
              {theme === t.id && (
                <div className={styles.activeIndicator}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default ThemeSwitcher;
