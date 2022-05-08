import React, { useCallback } from 'react'
import styled from 'styled-components'
import HeroCard from '../HeroCard';
import NotFound from '../NotFound';
import Button from '../Button';
import Loader from '../Loader';
import Paginator from '../../components/Paginator';

// New Router hook for navigation
import { useNavigate } from 'react-router-dom';

const StyledCardsContainer = styled.div`
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
  overflow: scroll;

  .nofound {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  ${(props) => props.theme.breakpoints.md} {

  }
`;

const CardsContainer = ({ data }) => {
  const { results: planetsList, count, previous, next, setPageToGo, pageToGo, loading} = data;
  const navigate = useNavigate();
  const handleOnClick = useCallback((id) => navigate(`/details/${id}`, {replace: true}), [navigate]);

  return (
    <>
      {
        loading ?
        <Loader/> :
        <StyledCardsContainer>
          {
            planetsList.length ?
              planetsList.map((planet) => <HeroCard key={`${planet.name}${planet.diameter}`} onClick={handleOnClick} item={planet}/>) :
                <div className="nofound">
                  <NotFound message='Sorry, there is no planet named like that'/>
                  <Button title='Back Home' onClick={() => navigate(0)}/>
                  <span>Or make a new search!</span>
                </div>
          }
        </StyledCardsContainer>
      }
      { !!planetsList?.length && <Paginator onSetPage={setPageToGo} pageToGo={pageToGo} count={count} next={next} prev={previous}/> }
    </>
  )
};

export default CardsContainer;