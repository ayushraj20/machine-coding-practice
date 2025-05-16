import React, { useState } from 'react';
import '../styles/Accordion.css';

const Accordion = ({ title = 'Test Title', expanded = false, children }) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion-container">
      <div className="heading-container">
        <span>{title}</span>
        <span onClick={() => handleExpandClick()}>
          {isExpanded ? '🔼' : '🔽'}
        </span>
      </div>

      <div
        className="content-container"
        style={{ display: isExpanded ? 'block' : 'none' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
