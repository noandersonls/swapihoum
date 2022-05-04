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

const CardContainer = ({ data }) => {
  const navigate = useNavigate();
  const handleOnClick = useCallback((id) => navigate(`/details/${id}`, {replace: true}), [navigate]);

  return (
    <StyledCardContainer>
      {data?.map((item) => <HeroCard key={`${item.name}${item.diameter}`} onClick={handleOnClick} item={item}/>)}
    </StyledCardContainer>
  )
};

export default CardContainer;