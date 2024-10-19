import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Styled Form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

// Styled Input
const Input = styled.input`
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

  &::placeholder {
    color: #999; /* Light gray placeholder text */
  }
`;

// Styled Button
const Button = styled.button`
  padding: 10px;
  background-color: #3498db; /* Blue background */
  color: white; /* White text */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Tajawal', sans-serif; /* Tajawal font */
  font-size: 16px;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #2980b9; /* Darker blue on hover */
  }

  svg {
    margin-right: 5px; /* Add space between icon and text */
  }
`;

const SearchForm = ({ onSearch }) => {
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && family) {
      onSearch({ name, family });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter first name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Enter family name"
        value={family}
        onChange={(e) => setFamily(e.target.value)}
        required
      />
      <Button type="submit">
        <FontAwesomeIcon icon={faSearch} /> Search
      </Button>
    </Form>
  );
};

export default SearchForm;
