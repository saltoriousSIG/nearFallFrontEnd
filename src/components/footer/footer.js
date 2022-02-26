import React from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand, Collapse, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, NavbarText } from 'reactstrap';
import styled from 'styled-components';

const CC = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const FooterContainer = styled.div`
`;

const NavFooter = styled(Navbar)`
background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
`;


const Footer = () => {
    return (
        <FooterContainer>
            <NavFooter
                expand="md"
            >
                <CC>
                    <p>©2022 Nearfall Fishing Charters</p>
                </CC>
            </NavFooter>
        </FooterContainer>
    )
}

export default Footer