import React from "react";
import { CardBody, Col, Row, Container } from "reactstrap";
import boat from '../../assets/img/boat.png';
import { IGFeed } from "../instagram-feed/instagram-feed";
import GlobalStyle from '../common/globalstyle/global.style';
import styled from "styled-components";

const HeroContainer = styled.div`
  margin-top:50px;
  height:75vh;
  width:100%;
  display:flex;
`
const Image = styled.img`
  height:20rem;
  width:30rem;
  border-radius:7px;

  @media all and (max-width:900px){
    height:10rem;
    width:17rem;
  }
`
const BackDrop = styled.div`

height: auto;

padding: 15px;
border-radius:8px;

`

const CallToActionButton = styled.button`
  height: 5rem;
  width: 15rem;
  border-radius:7px;
  background-color:#E6E6E6;
  color: black;
  border:none;

  &:hover{
    border: 2px solid white;
    color:white;
    background-color:transparent;
  }
`


const LandingCard = () => {
  return (
    <HeroContainer>
      
      {/* <CardBody className=''>
        <IGFeed />
        <Row className='ms-5 me-5 bg-danger '>
          <GlobalStyle.PageCol className='bg-warning'>
          <GlobalStyle.Title>Nearfall Charters</GlobalStyle.Title>
            <Image src={boat} alt='The Nearfall' className=''/>
            <Container className='bg-primary'>
            <GlobalStyle.Text className='float-right'>
              Come set sail and enjoy a day on the Atlantic Ocean with the Nearfall fishing team. Our seasoned captains and crew look forward to getting you and your party hooked for a lifetime.  We aim to fill your coolers, share some laughs, and create a memorable experience for everyone aboard. Whether you’re a seasoned veteran of the sport or testing your sea legs for the first time, Nearfall Fishing Charters is the place for you. Our team specializes in Blackfish, Striped Bass, Fluke, Bottom Fishing, Inshore Tuna and Sharking. We offer a wide range of trips and tailor it to the needs of the people aboard and the fishery in season.  Departing from Shark River Inlet, our vessel is conveniently located at the Belmar Manutti Marina; just minutes away from the Garden State Parkway and Interstate 195. Take a break from your daily hussle and come on down to Nearfall Fishing Charters. We look forward to having you and are sincerely grateful for your patronage.
            </GlobalStyle.Text>
            </Container>
          </GlobalStyle.PageCol>
          <Col>
          </Col>
        </Row>
      </CardBody> */}
      <CardBody className=''>
        <Row className='ms-5 me-5 '>
          <GlobalStyle.PageCol className=''>
            <BackDrop className=''>
            <GlobalStyle.Title className='display-3 pb-4'>NearFall Charters</GlobalStyle.Title>
            <GlobalStyle.Text className=''>
              <Image src={boat} alt='The Nearfall' className='float-start pb-1 me-3'/>
              Come set sail and enjoy a day on the Atlantic Ocean with the Nearfall fishing team. Our seasoned captains and crew look forward to getting you and your party hooked for a lifetime.  We aim to fill your coolers, share some laughs, and create a memorable experience for everyone aboard. Whether you’re a seasoned veteran of the sport or testing your sea legs for the first time, Nearfall Fishing Charters is the place for you. Our team specializes in Blackfish, Striped Bass, Fluke, Bottom Fishing, Inshore Tuna and Sharking. We offer a wide range of trips and tailor it to the needs of the people aboard and the fishery in season.  Departing from Shark River Inlet, our vessel is conveniently located at the Belmar Manutti Marina; just minutes away from the Garden State Parkway and Interstate 195. Take a break from your daily hussle and come on down to Nearfall Fishing Charters. We look forward to having you and are sincerely grateful for your patronage.
            </GlobalStyle.Text>
            <Container className='d-flex align-items-center justify-content-center'>
              <Row className='d-flex'>
                <CallToActionButton  className='mt-4 me-5 align-items-center justify-content-center'>
                  <strong>Book A Charter Today</strong>
                </CallToActionButton>
                <CallToActionButton  className='mt-4 ms-5 align-items-center justify-content-center'>
                  <strong>About Our Vessel</strong>
              </CallToActionButton>
            </Row>
            </Container>
            </BackDrop>
          </GlobalStyle.PageCol>
          <Col className='bg-primary'>
          </Col>
        </Row>
      </CardBody>
    </HeroContainer>
  )
}

export default LandingCard;