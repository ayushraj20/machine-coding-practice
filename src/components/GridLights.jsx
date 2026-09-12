import React, { useEffect, useState } from 'react';
import '../styles/GridLights.css';

const GridLights = () => {
  const [activeCells, setActiveCells] = useState([]);
  const [isClearing, setIsClearing] = useState(false);

  useEffect(() => {
    if (!isClearing) {
      return;
    }
    if (activeCells.length === 0) {
      setIsClearing(false);
      return;
    }

    const timer = setTimeout(() => {
      setActiveCells((prev) => prev.slice(0, -1));
    }, 300);

    return () => clearTimeout(timer);
  }, [isClearing, activeCells]);

  const handleCellClick = (idx) => {
    setActiveCells((prev) => {
      if (prev.includes(idx)) return prev;

      const next = [...prev, idx];

      if (next.length === 8) {
        setIsClearing(true);
      }

      return next;
    });
  };

  console.log('activeCells', activeCells);

  return (
    <div className="grid-light-container">
      {Array.from({ length: 9 }, (_, idx) => (
        <div
          key={idx}
          className="grid-light-item"
          onClick={() => handleCellClick(idx)}
          style={{
            backgroundColor: activeCells.includes(idx) ? 'green' : '',
            opacity: idx === 4 ? '0' : '1',
          }}
        ></div>
      ))}
    </div>
  );
};

export default GridLights;
