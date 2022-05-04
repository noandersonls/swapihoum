import React from 'react'
import styled from 'styled-components'



const StyledButton = styled.button`
  cursor: pointer;
  color: white;
  border: 0px;
  margin: 12px;
  display: flex;
  padding: 10px 16px;
  position: relative;
  max-width: 256px;
  min-height: 46px;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  border-radius: 100px;
  text-transform: none;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};

  ${(props) => props.theme.breakpoints.md} {

  }
`;

const Button = ({title, onClick}) => {  
  return (
    <StyledButton onClick={onClick}>
      <span>{title}</span>
    </StyledButton>
  )
};

export default Button;