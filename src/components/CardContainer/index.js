import React, { useCallback } from 'react'
import styled from 'styled-components'
import HeroCard from '../HeroCard';
import Paginator from '../../views/Paginator';
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

  height: 75vh;
  overflow: scroll;

  position: fixed;
  overflow: scroll

  .notFound {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  ${(props) => props.theme.breakpoints.md} {

  }
`;

const CardContainer = ({ data }) => {
  const { results: planetsList, count, prev, next } = data;
  const navigate = useNavigate();
  const handleOnClick = useCallback((id) => navigate(`/details/${id}`, {replace: true}), [navigate]);

  return (
    <>
      <StyledCardContainer>
        {
          planetsList.length ?
            planetsList.map((planet) => <HeroCard key={`${planet.name}${planet.diameter}`} onClick={handleOnClick} item={planet}/>) :
              <div className='notFound'>
                <NotFound message='Sorry, there is no planet named like that'/>
                <Button title='Back Home' onClick={() => navigate(0)}/>
                <span>Or make a new search!</span>
              </div>
        }
      </StyledCardContainer>
      { !!planetsList.length && <Paginator count={count} onNext={next} onPrev={prev}/> }
    </>
  )
};

export default CardContainer;