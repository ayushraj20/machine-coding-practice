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

const RandomGridCohesity = ({
  N = 3,
  inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
}) => {
  // create a N*N matrix and initialize it with null
  const initialGrid = new Array(N)
    .fill(null)
    .map(() => new Array(N).fill(null));

  // To get Random integer btw 0 to N-1
  // const getRandomInteger = () => Math.floor(Math.random() * (N - 1));

  // Create a shuffled list of all possible positions
  const generatePositions = () => {
    const positions = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        positions.push([i, j]);
      }
    }

    // Fisher-Yates shuffle for optimal randomization
    for (let k = positions.length - 1; k > 0; k--) {
      const randIndex = Math.floor(Math.random() * (k + 1));
      [positions[k], positions[randIndex]] = [
        positions[randIndex],
        positions[k],
      ];
    }

    return positions;
  };

  const [grid, setGrid] = useState(initialGrid);

  // My implementation during interview it has bug
  // const handleRandomClick = () => {
  //   let newArr = [...initialGrid];

  //   inputArr.forEach((elem) => {
  //     const i = getRandomInteger();
  //     const j = getRandomInteger();
  //     newArr[i][j] = elem;
  //   });

  //   setGrid(newArr);
  // };

  const handleRandomClick = () => {
    const newArr = [...initialGrid];
    const positions = generatePositions();

    inputArr.forEach((elem, idx) => {
      const [i, j] = positions[idx];
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
