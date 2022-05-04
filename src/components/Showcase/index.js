import React, { useCallback } from 'react'
import styled from 'styled-components'
import Button from '../Button/Index';
import { useNavigate } from 'react-router-dom';



const StyledShowcase = styled.div`
  padding-top: 5rem;

  ${(props) => props.theme.breakpoints.md} {

  }
`;

const Showcase = props => {
  const navigate = useNavigate();
  const goHome = useCallback(() => navigate('/', {replace: true}), [navigate]);

  return (
    <StyledShowcase>
      <Button size='l' title='Go back' onClick={goHome}/>
      <h2> EDEEETS</h2>
    </StyledShowcase>
  )
};

export default Showcase;