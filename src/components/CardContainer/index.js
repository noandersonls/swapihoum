import React, { useCallback } from 'react'
import styled from 'styled-components'
import HeroCard from '../HeroCard';
import NotFound from '../NotFound';
import Button from '../Button';

// New Router hook for navigation
import { useNavigate } from 'react-router-dom';

const StyledCardContainer = styled.div`
  padding-top: 0.5rem;
  width: 100%;
  margin: 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .notFound {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  ${(props) => props.theme.breakpoints.md} {

  }
`;

const CardContainer = ({ data }) => {
  const navigate = useNavigate();
  const handleOnClick = useCallback((id) => navigate(`/details/${id}`, {replace: true}), [navigate]);

  return (
    <StyledCardContainer>
      {
        data.length ?
        data.map((item) => <HeroCard key={`${item.name}${item.diameter}`} onClick={handleOnClick} item={item}/>) :
        <div className='notFound'>
          <NotFound message='Sorry, there is no planet named like that'/>
          <Button title='Back Home' onClick={() => navigate(0)}/>
          <span>Or make a new search!</span>
        </div>
      }
    </StyledCardContainer>
  )
};

export default CardContainer;