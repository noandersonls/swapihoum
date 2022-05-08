import React from 'react';
import styled from 'styled-components';

import { ReactComponent as NotFoundLogo } from '../../images/warning.svg';

const StyledNotFound = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  > svg {
    width: 50%;
    height: 7rem;
  }

  > h1 {
    font-weight: 300;
    text-align: center;
  }

  ${(props) => props.theme.breakpoints.md} {

  }
`;

function SearchBar({ message }) {
  return (
    <StyledNotFound>
      <NotFoundLogo />
      <h1>{message}</h1>
    </StyledNotFound>
  );
}

export default SearchBar;
