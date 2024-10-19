import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Loading from './components/Loading';
import FilterSearch from './components/FilterSearch';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

// Styled App Wrapper
const AppWrapper = styled.div`
  padding: 20px;
  background-color: #1a1a1a; /* Dark background */
  color: #ffffff; /* White text */
  font-family: 'Tajawal', sans-serif; /* Tajawal font */
  min-height: 100vh; /* Full height */
  display: flex;
  flex-direction: column; /* Arrange children in a column */
`;

const Title = styled.h1`
  text-align: center; /* Center the title */
`;

const Footer = styled.footer`
  text-align: center; /* Center footer text */
  margin-top: auto; /* Push footer to the bottom */
  padding: 20px 0; /* Add some padding */
  font-size: 14px; /* Smaller font size for footer */
  color: #ffffff; /* White text */
  width: 100%; /* Full width */
`;

const NoResults = styled.p`
  text-align: center;
  color: #ff0000; /* Red color for no results */
  font-size: 18px;
`;

const App = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = async (query) => {
    setLoading(true);
  
    const url = `http://107.173.221.208/search.php?name=${encodeURIComponent(query.name)}&family=${encodeURIComponent(query.family)}`;
  
    try {
      const response = await axios.get(url, { timeout: 15000 });
      
      if (response.status === 200 && response.data.psarchive.length > 0) {
        setResults(response.data.psarchive);
        setFilteredResults(response.data.psarchive); // Set both results and filtered results initially
      } else {
        setResults([]); // Empty results if nothing is found
        setFilteredResults([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setResults([]);
      setFilteredResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter the results based on the search term entered in FilterSearch component
  const handleFilter = (filterText) => {
    const lowerCaseFilterText = filterText.toLowerCase();
    const filtered = results.filter(person =>
      person.name?.toLowerCase().includes(lowerCaseFilterText) ||
      person.family?.toLowerCase().includes(lowerCaseFilterText) ||
      person.father?.toLowerCase().includes(lowerCaseFilterText) ||
      person.gfather?.toLowerCase().includes(lowerCaseFilterText) ||
      person.hae?.toLowerCase().includes(lowerCaseFilterText) || // Location
      person.id?.toString().includes(lowerCaseFilterText) // ID
    );
    setFilteredResults(filtered);
  };

  return (
    <AppWrapper>
      <Title><FontAwesomeIcon icon={faDatabase} /> Palestinians DB</Title>
      <SearchForm onSearch={handleSearch} />
      {results.length > 0 && <FilterSearch onFilter={handleFilter} />}
      {loading ? (
        <Loading />
      ) : filteredResults.length > 0 ? (
        <SearchResults results={filteredResults} />
      ) : (
        <NoResults>No results found.</NoResults>
      )}
      <Footer>
        Created with ❤️ by <a href="https://t.me/Aweing" target="_blank" rel="noopener noreferrer" style={{ color: '#3498db', textDecoration: 'none' }}>Muhammed</a>
      </Footer>
    </AppWrapper>
  );
};

export default App;
