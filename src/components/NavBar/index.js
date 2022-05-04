import React from 'react'
import styled from 'styled-components'

import Logo from '../../logo.png';


const StyledNav = styled.header`
  padding: 20px;
  width: 100%;
  font-size: 12px;
  font-weight: 300;
  background-color: ${(props) => props.theme.colors.background};
  top: 0px;
  height: 4.5rem;
  padding: 8px 70px;
  position: fixed;
  z-index: 1100;
  box-shadow: rgb(38 50 56 / 15%) 0px 4px 15px;

  .navcontainer {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navcontainer--logo {
    font-size: 18px;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;

    > img {
      width: 70px;
    }
  }

  .navcontainer--items {
    > a {
      padding: 8px;
      font-size: 14px;
    }
  }

  .navcontainer--items-login {
    color: ${(props) => props.theme.colors.primary};
  }


  ${(props) => props.theme.breakpoints.md} {

  }
`;


const NavBar = props => {
  return (
    <StyledNav>
      <div className='navcontainer'>
        <div>
          <a href='/' className='navcontainer--logo'>
            <span>SWAPI x</span>
            <img src={Logo}/>
          </a>
        </div>
        <div className='navcontainer--items'>
          <a className='navcontainer--items-login' href='/login'><span>Login</span></a>
          <a href='faqs'><span>FAQs</span></a>
        </div>
      </div>
    </StyledNav>
  )
};

export default NavBar;