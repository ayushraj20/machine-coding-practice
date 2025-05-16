import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = ({ progress = 43 }) => {
  return (
    <div className="bar-container">
      <div className="bar" style={{ width: `${progress}%` }}>
        <span>{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
