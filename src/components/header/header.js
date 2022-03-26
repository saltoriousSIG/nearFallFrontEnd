import React, { useState } from 'react';
import { 
    Navbar, 
    NavbarToggler, 
    Nav, 
    NavItem,
    NavLink, 
    NavbarBrand,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
} from 'reactstrap';
import logo from '../../assets/img/nf_logo.png';
import styled from 'styled-components';
import { trips } from '../../utils/trips';
import { useNavigate } from 'react-router';
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';


const Logo = styled.img`
    height: 75px;
    width: 100px;

    @media all and (max-width:1024px){
        height: 50px;
        width: 60px;
    }
`;

const NavMenuItems = styled.div`
  display: flex;
  font-size: 22px !important;
 
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

  @media all and (max-width:1024px){
      i {
          display:none;
      }
  }

  @media all and (max-width:400px){
      display:none;
  }
`;

const Link = styled(NavLink)`
  font-size: 22px !important;
  color: black;
  &:hover {
      background-color: rgba(0, 0, 0, 0.25);
      color:black;
  }

  @media all and (max-width:1024px){
      display:none;
  }
`;

const HeaderButton = styled.button`
  border-style: none;
  background: transparent;
  font-weight: bold;

  @media all and (max-width:1024px){
      font-size:0.8rem;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (max-width: 1024px){
      display:none;
  }
`;

const HeadlineText1 = styled.h1`
    color: black;
    letter-spacing:1px;
    border-bottom:2px solid black;
    border-right: 2px solid black;
    font-family: 'Ubuntu', sans-serif;
    &:hover {
      color: black;
    }

    @media all and (max-width:1650px){
        font-size:1.5rem;
    }

    @media all and (max-width:1024px){
        display:none;
    }
`;

const HeadLineText2 =styled.h1`
color: black;
letter-spacing:1px;
border-top:2px solid black;
font-family: 'Ubuntu', sans-serif;


&:hover {
  color: black;
}

@media all and (max-width:1650px){
    font-size:1.5rem;
}

@media all and (max-width:1024px){
    display:none;
}
`
const Brand = styled(NavbarBrand)`
  display: flex;
  align-items: center;
`;

const BrandName = styled(NavbarBrand)`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const NBar = styled(Navbar)`
  background-color:#E6E6E6;
  position:fixed;
  height: fit-content;
  padding: 25px;
  width:100%;
  z-index:1;

  @media all and (max-width: 1024px){
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:row;
  }
  
`;

const NavDropDown = styled.button`
    border:none;
    background-color:transparent;
    color:black;
    font-size:2rem;
    display:none;
    z-index: 1000;

    @media all and (max-width: 1024px){
        display:block;
    }
`
const SideBar = styled(motion.Nav)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height: 100%;
  width:60%;
  background-color: #E6E6E6;
  color:white;
  position:fixed;
  top:0;
  right:0;
  z-index:999;

  @media all and (min-width: 1024px){
    display:none;
 }
 
`

const SideBarItem = styled(NavItem)`
 height:4rem;
 width:10rem;
 background-color: #0B1C31;
 color:white;
 border-radius:5px;
 font-weight:bold;
 letter-spacing:1.5px;
 margin-bottom:10px;
 cursor:pointer;
 z-index:1000;

 display:flex;
 justify-content:center;
 align-items:center;
`

const TripsAndRatesHide = styled.div`

    @media all and (max-width: 1024px){
    display:none;
 }
`

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [sideBar, setSideBar] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const navigate = useNavigate();

    const goToPage = (tripName) => {
        navigate(`/trip/${tripName}`);
    }

    const sideBarVariant = {
        hidden:{
            opacity:0,
            x:1200
        },
        visible:{
            opacity:1,
            x:0
        },
        exit:{transition:{ duration: 1}, x:1200 }
    }

   


    return (
        <div>
            <NBar className='shadow'
                expand="md"
            >
                <Brand href="/">
                    <Logo src={logo} />
                    <BrandName className='d-flex flex-row'>
                    <HeadlineText1 className='ms-2 pe-3'><strong>NEARFALL</strong></HeadlineText1>
                    <HeadLineText2 className='ps-3'>Fishing Charter</HeadLineText2>
                    </BrandName>
                </Brand>
                <NavbarToggler onClick={function noRefCheck() { }} />

                <NavMenuItemsContainer>
                    <NavSocialItems>
                        <HeaderButton><u>Call 732-344-8833</u></HeaderButton>
                        <ButtonContainer>
                            {/* <HeaderButton>Belmar Fishing Charters</HeaderButton> */}
                            <HeaderButton><u>905 NJ-35, S Belmar NJ</u></HeaderButton>
                        </ButtonContainer>
                        <i className="fa-brands fa-instagram fa-2x"></i>
                        <i className="fa-brands fa-facebook fa-2x"></i>
                    </NavSocialItems>
                    <NavMenuItems className='pt-1'>
                        <Nav >
                            <NavItem>
                                <Link href="/">
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/thenearfall">
                                    The Nearfall
                                </Link>
                            </NavItem>
                            
                            <NavItem>
                                <Link href="/calendar">
                                    Calendar
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/thecrew">
                                    The Crew
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/policies">
                                    Policies
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/gallery">
                                    Gallery
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/contact">
                                    Contact Us
                                </Link>
                            </NavItem>
                            <TripsAndRatesHide>
                            <Dropdown
                                nav
                                isOpen={isOpen}
                                toggle={toggle}
                            >
                                <DropdownToggle
                                    caret
                                    nav
                                >
                                   Trips &#38; Rates
                                </DropdownToggle>
                                <DropdownMenu>
                                    {
                                        Object.keys(trips).map((x, i) => {
                                            return ( 
                                                <DropdownItem key={i} onClick={() => goToPage(x)}>
                                                    {x}
                                                </DropdownItem>
                                            )
                                        })
                                    }
                                </DropdownMenu>
                            </Dropdown>
                            </TripsAndRatesHide>
                        </Nav>
                    </NavMenuItems>
                </NavMenuItemsContainer>
                <NavDropDown onClick={()=>{setSideBar(!sideBar)}}>
                        <IoMenu className='mb-2'/>
                </NavDropDown>
                
                <AnimatePresence exitBeforeEnter>
                {sideBar && 
                    <SideBar
                     initial='hidden'
                     animate='visible'
                     exit='exit'
                     variants={sideBarVariant}
                     transition={{ duration:1 }}
                     
                    >
                        <SideBarItem>
                            <Link href="/">
                                Home
                            </Link>
                        </SideBarItem>

                        <SideBarItem>
                            <Link to='/thenearfall'>
                            The NearFall
                            </Link>
                        </SideBarItem>
                        <SideBarItem>
                            <Link to='/calendar'>
                            Calendar
                            </Link>
                        </SideBarItem>
                        <SideBarItem>
                            <Link to='/thecrew'>
                            The Crew
                            </Link>
                        </SideBarItem>
                        <SideBarItem>
                            <Link to='/policies'>
                            Policies
                            </Link>
                        </SideBarItem>
                        <SideBarItem>
                            <Link to='/gallery'>
                            Gallery
                            </Link>
                        </SideBarItem>
                        
                        <SideBarItem>
                            <Link to='/contact'>
                                Contact
                            </Link>
                        </SideBarItem>
                        <Dropdown
                                nav
                                isOpen={isOpen}
                                toggle={toggle}
                            >
                                <DropdownToggle
                                    caret
                                    nav
                                >
                                   Trips &#38; Rates
                                </DropdownToggle>
                                <DropdownMenu>
                                    {
                                        Object.keys(trips).map((x, i) => {
                                            return ( 
                                                <DropdownItem key={i} onClick={() => goToPage(x)}>
                                                    {x}
                                                </DropdownItem>
                                            )
                                        })
                                    }
                                </DropdownMenu>
                            </Dropdown>
                    </SideBar>
                }
                </AnimatePresence>

            </NBar>
        </div>
    )
}

export default Header;