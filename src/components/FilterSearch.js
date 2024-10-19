import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Input for filtering results
const FilterInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #3498db; /* Blue border */
  border-radius: 5px;
  background-color: #333; /* Dark input background */
  color: #ffffff; /* White text */
  font-family: 'Tajawal', sans-serif; /* Tajawal font */
  font-size: 16px;
  text-align: center;

  &:focus {
    border-color: #2980b9; /* Darker blue on focus */
    outline: none; /* Remove default outline */
  }
`;

const FilterSearch = ({ onFilter }) => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterText(value);
    onFilter(value); // Pass the filter text back to the parent component
  };

  return (
    <FilterInput
      type="text"
      placeholder="Filter results..."
      value={filterText}
      onChange={handleFilterChange}
    />
  );
};

export default FilterSearch;
