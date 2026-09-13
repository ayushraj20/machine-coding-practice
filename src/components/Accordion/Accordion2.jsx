import { useState } from 'react';
import '../../styles/Accordion.css';

const Accordion2 = ({
  expanded = false,
  title = 'Test title',
  children = 'sample content ',
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <div className="accordion-container">
      <div
        className="heading-container"
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        {title}
        <span aria-hidden="true">{isExpanded ? '🔽' : '▶️'}</span>
      </div>

      <div
        className="content-container"
        style={{
          display: isExpanded ? 'block' : 'none',
        }}
      >
        {children}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
      </div>
    </div>
  );
};

export default Accordion2;
