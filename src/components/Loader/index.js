import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  .loader {
    position: absolute;
    left: 46%;
    top: 30%;
    transform: translate(-50%,-50%);
    width: 48px;
    height: 48px;
    border: 5px solid;
    border-color: ${(props) => props.theme.colors.primary} transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 

  ${(props) => props.theme.breakpoints.md} {

  }
`;

function Loader() {
  return (
    <StyledDiv>
      <span className="loader" />
    </StyledDiv>
  );
}

export default Loader;
