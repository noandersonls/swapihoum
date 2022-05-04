import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`



  ${(props) => props.theme.breakpoints.md} {

  }
`;


const HeroCard = props => {
  return (
    <StyledCard>
      <div className='container'>

      </div>
    </StyledCard>
  )
};

export default HeroCard;