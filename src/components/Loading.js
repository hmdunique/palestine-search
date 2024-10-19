import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Styled Loading Wrapper
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Adjust height as needed */
`;

// Styled Spinner
const Spinner = styled(FontAwesomeIcon)`
  font-size: 24px; /* Adjust size here */
  color: #3498db; /* Blue color */
  animation: spin 1s infinite linear; /* Animation for spinning */

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <Spinner icon={faSpinner} />
    </LoadingWrapper>
  );
};

export default Loading;
