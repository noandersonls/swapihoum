import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Logo from '../../logo.png';
import Menu from '../../images/menu.svg';

const StyledNav = styled.header`
  padding: 20px;
  width: 100%;
  font-size: 12px;
  font-weight: 300;
  background-color: ${(props) => props.theme.colors.background};
  top: 0px;
  height: 4.5rem;
  padding: 8px 8px;
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
    display: none;
  }

  .navcontainer--items-login {
    color: ${(props) => props.theme.colors.primary};
  }

  ${props => props.theme.breakpoints.md} {
    padding: 8px 70px;
    .navcontainer {
      justify-content: space-between;
      > img {
        display: none;
      }
    }

    .navcontainer--items {
      display: initial;
      > a {
        padding: 8px;
        font-size: 14px;
      }
    }
  }

`;

const StyledMenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  box-shadow: rgb(38 50 56 / 15%) 0px 2px 0px 0px;
  position: fixed;
  left: 0;
  right: 0;
  > a {
    padding: 8px;
    font-size: 14px;
  }
`;
 
const NavBar = props => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false)
  
  const handleShowMenu = () => {
    setShowMenu(!showMenu)
    setIsMobile(true);
  }
  const handleResize = () => {
    if (window.innerWidth < 770) {
        setIsMobile(true)
        setShowMenu(false)
    } else {
        setIsMobile(false)
        setShowMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })


  return (
    <StyledNav>
      <div className='navcontainer'>
        <div>
          <a href='/' className='navcontainer--logo'>
            <span>SWAPI x</span>
            <img src={Logo}/>
          </a>
        </div>
        <img onClick={handleShowMenu} src={Menu}/>
        <div className='navcontainer--items'>
          <a className='navcontainer--items-login' href='/login'><span>Login</span></a>
          <a href='/'><span>FAQs</span></a>
        </div>
      </div>
      {
        (showMenu && isMobile) && 
        <StyledMenuMobile>
          <a href='/login'><span>Login</span></a>
          <hr/>
          <a href='/'><span>FAQs</span></a>
        </StyledMenuMobile>
        }
    </StyledNav>
  )
};

export default NavBar;