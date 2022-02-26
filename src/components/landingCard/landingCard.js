import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import styled from 'styled-components';
import boat from '../../assets/img/boat.png';
import CalendarProvider from "../../providers/CalendarProvider";
import { IGFeed } from "../instagram-feed/instagram-feed";

const Jumbotron = styled(Card)`
  background-color: rgba(10,10,10, 0.6);
  height: auto;
  margin: 50px auto;
  width: 75%;
  box-shadow: 1px 5px 5px black;
  padding: 15px;
`;
const Title = styled.h1`
  text-align: center;
  color: white;
`;

const Text = styled.p`
  color: white;
  text-align: center; 
  font-family: 'Lato', sans-serif;
`;
const PageCol = styled(Col)`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  border-radius: 10px;
  margin: 10px;
  margin-bottom: 20px;
`;

const LandingCard = () => {
  return (
    <Jumbotron>
      <Title>Nearfall Charters</Title>
      <CardBody>
        <IGFeed />
        <CalendarProvider>
          <Row>
            <PageCol>
              <Image src={boat} alt='The Nearfall' />
              <Text>
                Come set sail and enjoy a day on the Atlantic Ocean with the Nearfall fishing team. Our seasoned captains and crew look forward to getting you and your party hooked for a lifetime.  We aim to fill your coolers, share some laughs, and create a memorable experience for everyone aboard. Whether you’re a seasoned veteran of the sport or testing your sea legs for the first time, Nearfall Fishing Charters is the place for you. Our team specializes in Blackfish, Striped Bass, Fluke, Bottom Fishing, Inshore Tuna and Sharking. We offer a wide range of trips and tailor it to the needs of the people aboard and the fishery in season.  Departing from Shark River Inlet, our vessel is conveniently located at the Belmar Manutti Marina; just minutes away from the Garden State Parkway and Interstate 195. Take a break from your daily hussle and come on down to Nearfall Fishing Charters. We look forward to having you and are sincerely grateful for your patronage.
              </Text>
            </PageCol>
            <Col>
            </Col>
          </Row>
        </CalendarProvider>
      </CardBody>
    </Jumbotron>
  )
}

export default LandingCard;