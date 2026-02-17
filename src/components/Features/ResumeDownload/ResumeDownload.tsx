import React from 'react';
import styles from './ResumeDownload.module.css';

interface ResumeDownloadProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  showIcon?: boolean;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ 
  variant = 'primary',
  size = 'medium',
  showIcon = true 
}) => {
  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/Khalifeh_Ahmad_Resume.pdf';
    link.download = 'Khalifeh_Ahmad_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownload}
      className={`${styles.downloadBtn} ${styles[variant]} ${styles[size]}`}
      aria-label="Download Resume"
    >
      {showIcon && (
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
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      )}
      <span>Download Resume</span>
    </button>
  );
};

export default ResumeDownload;