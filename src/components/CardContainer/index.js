import React, { useCallback } from 'react'
import styled from 'styled-components'
import HeroCard from '../HeroCard';

// New Router hook for navigation
import { useNavigate } from 'react-router-dom';

const StyledCardContainer = styled.div`
  padding-top: 5rem;

  width: 100%;
  margin: 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${(props) => props.theme.breakpoints.md} {

  }
`;

const CardContainer = props => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/faqs', {replace: true}), [navigate]);

  return (
    <StyledCardContainer>
      <HeroCard onClick={handleOnClick}/>
      <HeroCard/>
      <HeroCard/>
      <HeroCard/>
      <HeroCard/>
      <HeroCard/>
      <HeroCard/>
      <HeroCard/>
      <HeroCard/>
      <HeroCard/>
    </StyledCardContainer>
  )
};

export default CardContainer;