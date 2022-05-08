// DEMO PAGE
import React from 'react'
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import styled from 'styled-components'

import { ReactComponent as LoginLogo } from '../../images/login.svg';

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
  margin-top: 2rem;

  > svg {
    width: 4rem;
    height: auto;
  }

  > span {
    font-weight: 300;
    text-align: center;
  }

  ${(props) => props.theme.breakpoints.md} {

  }
`;

const Login = ({ message }) => {
  return (
    <>
      <NavBar/>
      <StyledLogin>
        <LoginLogo/>
        <Button title='Login with Houm' onClick={() => console.log('gotcha! :) visit https://houm.com/cl for more')}/>
        <span>Register</span>
      </StyledLogin>
    </>
  )
};

export default Login;