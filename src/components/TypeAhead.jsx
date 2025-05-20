import React, { useEffect, useState } from 'react';
import '../styles/TypeAhead.css';

const TypeAhead = () => {
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [cache, setCache] = useState({});

  useEffect(() => {
    let timeout = setTimeout(getRecipeData, 500);

    return () => clearTimeout(timeout);
  }, [searchText]);

  const getRecipeData = async () => {
    if (cache[searchText]) {
      console.log('returned from cache', searchText);
      setResults(cache[searchText]);
      return;
    }

    console.log('api called', searchText);
    const data = await fetch(
      `https://dummyjson.com/recipes/search?q=${searchText}`
    );
    const res = await data.json();

    setResults(res?.recipes);
    setCache((prev) => ({ ...prev, [searchText]: res?.recipes }));
  };

  return (
    <div className="main-container">
      <h3>TypeAhead (AutoComplete)</h3>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input-box"
        />

        <div className="results-container">
          {results?.map((result) => (
            <div className="result-item" key={result.id}>
              {result?.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypeAhead;
