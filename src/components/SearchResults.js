import React from 'react';
import styled from 'styled-components';

// Wrapper for all results
const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

// Individual result card
const ResultCard = styled.div`
  background-color: #2a2a2a; /* Dark card background */
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #3498db; /* Blue border */
  color: #ffffff; /* White text */
`;

// Null field styling, in case data is missing
const NotFound = styled.span`
  color: #e74c3c; /* Red color for "not found" fields */
`;

// The component that renders results
const SearchResults = ({ results, searchPerformed }) => {
  return (
    <ResultsWrapper>
      {searchPerformed && results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        results.map((person, index) => (
          <ResultCard key={index}>
            <h3>{person.name || <NotFound>Not Found</NotFound>}</h3>
            <p>ID: {person.id || <NotFound>Not Found</NotFound>}</p>
            <p>Father: {person.father || <NotFound>Not Found</NotFound>}</p>
            <p>Grandfather: {person.gfather || <NotFound>Not Found</NotFound>}</p>
            <p>Family: {person.family || <NotFound>Not Found</NotFound>}</p>
            <p>Mother: {person.mother || <NotFound>Not Found</NotFound>}</p>
            <p>Location: {person.hae || <NotFound>Not Found</NotFound>}</p>
            <p>Date of Birth: {person.birth || <NotFound>Not Found</NotFound>}</p>
            <p>Age: {person.numage || <NotFound>Not Found</NotFound>}</p>
          </ResultCard>
        ))
      )}
    </ResultsWrapper>
  );
};

export default SearchResults;
