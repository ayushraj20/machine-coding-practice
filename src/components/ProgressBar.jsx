import { useState, useEffect, useRef } from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="bar-container">
      <div className="bar" style={{ width: `${progress}%` }}>
        <span>{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
