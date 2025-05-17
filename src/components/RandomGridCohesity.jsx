/* 
Create a React component that takes an N value to generate an N×N grid and an array of M elements
to fill it. The component should randomly place the elements in the grid, filling the remaining cells 
with null or 0.For example, if N=3 and the array is [1, 2, 3], the grid might look like:
  2 0 0  
  0 1 0  
  3 0 0
*/

import { useState } from 'react';
import '../styles/RandomGridCohesity.css';

const RandomGridCohesity = () => {
  const initialGrid = new Array(3)
    .fill(null)
    .map(() => new Array(3).fill(null));

  const [grid, setGrid] = useState(initialGrid);

  const inputArr = [1, 2, 3];

  const handleRandomClick = () => {
    let newArr = [...initialGrid];
    inputArr.forEach((elem) => {
      const i = Math.floor(Math.random() * grid.length);
      const j = Math.floor(Math.random() * grid.length);
      newArr[i][j] = elem;
    });
    setGrid(newArr);
  };

  return (
    <>
      <div className="grid-container">
        {grid.map((arr) => {
          return (
            <div>
              {arr.map((elem, idx) => (
                <div className="grid" key={idx}>
                  {elem}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <button onClick={() => handleRandomClick()} className="btn">
        Get Random
      </button>
    </>
  );
};

export default RandomGridCohesity;
