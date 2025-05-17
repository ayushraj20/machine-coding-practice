/* 
Create a React component that takes an N value to generate an N×N grid and an array of M elements
to fill it. The component should randomly place the elements in the grid, filling the remaining cells 
with null or 0.For example, if N=3 and the array is [1, 2, 3], the grid might look like:
  2 0 0  
  0 1 0  
  3 0 0
*/

import { useState } from 'react';

const RandomGrid = () => {
  const myarrs = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [grid, setGrid] = useState(myarrs);

  const inputArr = [1, 2, 3];

  const handleRandomClick = () => {
    let newArr = [...myarrs];
    inputArr.forEach((elem) => {
      const i = Math.floor(Math.random() * grid.length);
      const j = Math.floor(Math.random() * grid.length);
      newArr[i][j] = elem;
    });
    setGrid(newArr);
  };

  return (
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

      <button onClick={() => handleRandomClick()}>Get Random</button>
    </div>
  );
};

export default RandomGrid;
