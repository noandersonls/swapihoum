import React from 'react'
import styled from 'styled-components'

import Search from '../../images/search.svg'
import Cancel from '../../images/cancel.svg'

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
    width: 60%;
    height: 2rem;

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

  .searchbar--label {
    display: none;
  }

  ${(props) => props.theme.breakpoints.md} {

  }
`;

const SearchBar = ({ onChange, placeholder, value, onSearch }) => {
  return (
    <StyledSearch>
        <div className='container'>
          <img onClick={onSearch} src={Search}/>
          <label 
            className='searchbar--label'
            id="input-label"
          >
            Swapihoum Search
          </label>
          <input 
            onChange={(e) => onChange(e.target.value)}
            type="text" 
            name="searchbar" 
            id="searchbar" 
            placeholder={placeholder}
            value={value}
          />
          <img src={Cancel} onClick={() => onChange('')}/>
        </div>
    </StyledSearch>
  )
};

export default SearchBar;