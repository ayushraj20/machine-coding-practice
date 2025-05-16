import React, { useRef, useState } from 'react';
import '../styles/Timer.css';

const Timer = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef();

  const startTimer = () => {
    countRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(countRef.current);
  };

  const resetTimer = () => {
    setCount(0);
    clearInterval(countRef.current);
  };

  return (
    <div className="main-container">
      <h2>Count : {count} </h2>

      <div>
        <button onClick={() => startTimer()}>Start</button>
        <button onClick={() => pauseTimer()}>Pause</button>
        <button onClick={() => resetTimer()}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
