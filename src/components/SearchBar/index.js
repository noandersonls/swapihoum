import React from 'react';
import styled from 'styled-components';

import Search from '../../images/search.svg';
import Cancel from '../../images/cancel.svg';

const StyledSearch = styled.div`
  padding: 12px 16px;
  border-radius: 2rem;
  padding-right: 24px;
  margin-top: 5rem;
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;


  .container {
    display: flex;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 2rem;
    min-height: fit-content;
    justify-content: space-between;
    height: 2rem;
    padding: 5px;
    width: 80%;
    max-width: 350px;

    > img {
      cursor: pointer;
    }
    
    > input {
      border: none;
      background-color: ${(props) => props.theme.colors.secondary};
      font-weight: 100;
      font-size: 12px;
      flex: 1;
    }
    > input:focus {
      outline: none;
    }
  }

  .searchbar__label {
    display: none;
  }

  ${(props) => props.theme.breakpoints.md} {
    justify-content: flex-start;
    margin-left: 20px;
    .container {
      height: 3rem;
      width: 400px;
      max-width: 50%;
    }
  }
`;

function SearchBar({
  onChange, placeholder, value, onSearch,
}) {
  const handleSearch = () => {
    if (value) {
      onSearch();
    }
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <StyledSearch>
      <div className="container">
        <img alt="Search bar lookup icon" onClick={handleSearch} src={Search} />
        <label
          className="searchbar__label"
          id="input-label"
        >
          Swapihoum Search
        </label>
        <input
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleEnter}
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder={placeholder}
          value={value}
        />
        <img alt="Cross icon for cleaning search text" src={Cancel} onClick={() => onChange('')} />
      </div>
    </StyledSearch>
  );
}

export default SearchBar;
