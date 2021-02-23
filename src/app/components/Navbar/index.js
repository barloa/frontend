import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper, ItemsWrapper, LogoAndText, Menus, NavItem, NavTitle } from './style'

const Navbar = styled.nav`
  padding: 0.5rem 10%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: #f7f7f7;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%), 0 6px 20px 2px rgb(0 0 0 / 3%);
  @media screen and (max-width: 768px) {
    padding: 0.5rem 5px;
  }
`
const LogoImg = styled.img`
  width: 35px;

  @media screen and (max-width: 768px) {
    width: 38px;
  }
`

export const NavBar = () => (
  <Wrapper>
    <Navbar>
      <ItemsWrapper>
        <Link to="/">
          <LogoAndText>
            <LogoImg src="/logo.png" alt="Our Logo"/>
            <NavTitle>Open Source Place</NavTitle>
          </LogoAndText>
        </Link>
        <Menus id="mobileMenu">
          <NavItem>
            <Link to="/addproject" style={{ color: '#1FB79B' }}>
              Add Project
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/projects" style={{ color: '#1FB79B' }}>
              Projects
            </Link>
          </NavItem>
          <NavItem>
            <a href="https://docs.opensource.place/" target="_blank" style={{ color: '#1FB79B' }}>
              Documents
            </a>
          </NavItem>
          <NavItem>
            <Link to="/contact" style={{ color: '#1FB79B' }}>
              Contact
            </Link>
          </NavItem>
        </Menus>
      </ItemsWrapper>
    </Navbar>
  </Wrapper>
)

export default NavBar
