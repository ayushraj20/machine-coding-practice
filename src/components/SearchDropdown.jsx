import React, { useEffect, useState } from 'react';

import { courseData } from '../constants/searchDropdownData';
import '../styles/SearchDropdown.css';

const SearchDropdown = () => {
  const [items, setItems] = useState(courseData);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const filteredData = items.filter((item) => {
      const lowerCaseSearchText = searchText.toLowerCase();

      return (
        item.subjectName.toLowerCase().includes(lowerCaseSearchText) ||
        item.desc.toLowerCase().includes(lowerCaseSearchText) ||
        item.id.toLowerCase().includes(lowerCaseSearchText)
      );
    });

    searchText ? setItems(filteredData) : setItems(courseData);
  }, [searchText]);

  return (
    <div className="main-container">
      <input
        type="input"
        placeholder="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {items.map((item) => (
        <div className="data-container">
          <span>{item.id}</span>
          <span>{item.subjectName}</span>
          <span>{item.desc}</span>
        </div>
      ))}
    </div>
  );
};

export default SearchDropdown;
