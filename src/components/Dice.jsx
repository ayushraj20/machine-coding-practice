import React, { useState } from 'react';
import '../styles/Dice.css';

const CONFIG = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

const Dice = () => {
  const rows = 3;
  const columns = 3;
  const totalCells = rows * columns;

  const [faceValue, setFaceValue] = useState(1);

  const isVisible = (idx) => {
    const arr = CONFIG[faceValue];
    if (arr.includes(idx)) return true;

    return false;
  };

  const handleRotate = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setFaceValue(randomNumber);
  };

  return (
    <>
      <div
        className="grid-container"
        style={{ gridTemplateColumns: `repeat(${columns}, 100px)` }}
      >
        {Array.from({ length: totalCells }, (_, idx) => (
          <div
            key={idx}
            className="grid-item"
            style={{ opacity: isVisible(idx) ? '100%' : '0%' }}
          >
            {/* {idx + 1}{' '} */}
          </div>
        ))}
      </div>
      <button onClick={handleRotate}>Rotate</button>
    </>
  );
};

export default Dice;
