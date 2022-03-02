import React from 'react';
import { Navbar } from 'reactstrap';
import styled from 'styled-components';

const CC = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const FooterContainer = styled.div`
  margin-top: 20px;
  bottom: 0;
  width: 100%;
  z-index: 1000;

  
`;

const NavFooter = styled(Navbar)`
background: linear-gradient(to right, #f46b45, #eea849);
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