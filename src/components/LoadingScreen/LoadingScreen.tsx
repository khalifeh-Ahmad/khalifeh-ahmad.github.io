import React, { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";
import { profileData } from "../../data/portfolio";

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (isLoaded) return null;

  return (
    <div className={styles.loadingScreen}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <span>
            {profileData.name.split(" ")[0][0]}
            {profileData.name.split(" ")[1][0]}
          </span>
        </div>
        <h2>{profileData.name}</h2>
        <p>{profileData.title}</p>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className={styles.percentage}>{progress}%</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
