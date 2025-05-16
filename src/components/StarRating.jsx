import React, { useState } from 'react';
import '../styles/StarRating.css';

const StarRating = () => {
  const [selectedStarCount, setSelectedStarCount] = useState(0);

  const handleStarClick = (idx) => {
    setSelectedStarCount(idx + 1);
  };

  return (
    <div className="main-container">
      <div className="star-rating-container">
        {[...Array(5)].map((item, idx) => (
          <span
            key={idx}
            onClick={() => handleStarClick(idx)}
            style={{
              color: selectedStarCount >= idx + 1 ? 'rgb(232, 232, 30)' : '',
            }}
          >
            ★
          </span>
        ))}
      </div>

      <div>Rating Count: {selectedStarCount}</div>
    </div>
  );
};

export default StarRating;
