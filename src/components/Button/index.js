import React from 'react';
import styled from 'styled-components';

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
  min-width: 100px;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  border-radius: 100px;
  text-transform: none;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};


  &:hover:not([disabled]){
    opacity: 1;
    cursor: pointer;
  }

  &:disabled {
    background: rgb(192, 192, 192);
    cursor: default;
  }

  ${(props) => props.theme.breakpoints.md} {

  }
`;

function Button({ title, onClick, disabled }) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      <span>{ title }</span>
    </StyledButton>
  );
}

export default Button;
