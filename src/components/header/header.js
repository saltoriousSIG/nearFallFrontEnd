import React from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import logo from '../../assets/img/nf_logo.png';
import styled from 'styled-components';

const Logo = styled.img`
    height: 75px;
    width: 100px;
`;

const NavMenuItems = styled.div`
  display: flex;
`;

const NavMenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavSocialItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 18px;
  > * {
    padding-left: 12px;
  }
`;

const Link = styled(NavLink)`
  font-size: 18px !important;
  color: black;
  &:hover {
      color: blue;
  }
`;

const HeaderButton = styled.button`
  border-style: none;
  background: transparent;
  font-weight: bold;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeadlineText = styled.h1`
    color: black;
    &:hover {
      color: blue;
    }
`;
const Brand = styled(NavbarBrand)`
  display: flex;
  align-items: center;
`;

const NBar = styled(Navbar)`
  background: linear-gradient(to bottom, #f2994a, #f2c94c);
`;


const Header = () => {
    return (
        <div>
            <NBar
                expand="md"
            >
                <Brand href="/">
                    <Logo src={logo} />
                    <HeadlineText>Nearfall Fishing Charters</HeadlineText>
                </Brand>
                <NavbarToggler onClick={function noRefCheck() { }} />

                <NavMenuItemsContainer>
                    <NavSocialItems>
                        <HeaderButton>Call 732-344-8833</HeaderButton>
                        <ButtonContainer>
                            <HeaderButton>Belmar Fishing Charters</HeaderButton>
                            <HeaderButton>905 NJ-35, S Belmar NJ</HeaderButton>
                        </ButtonContainer>
                        <i class="fa-brands fa-instagram fa-2x"></i>
                        <i class="fa-brands fa-facebook fa-2x"></i>
                    </NavSocialItems>
                    <NavMenuItems>
                        <Nav >
                            <NavItem>
                                <Link href="/">
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="thenearfall">
                                    The Nearfall
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="rates">
                                    Trips & Rates
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="calendar">
                                    Calendar
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="#">
                                    The Crew
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="#">
                                    Policies
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="#">
                                    Gallery
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="#">
                                    Contact Us
                                </Link>
                            </NavItem>
                        </Nav>
                    </NavMenuItems>
                </NavMenuItemsContainer>
            </NBar>
        </div>
    )
}

export default Header;