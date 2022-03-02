import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import boat from '../../assets/img/boat.png';
import { IGFeed } from "../instagram-feed/instagram-feed";
import GlobalStyle from '../common/globalstyle/global.style';



const LandingCard = () => {
  return (
    <GlobalStyle.Jumbotron>
      <GlobalStyle.Title>Nearfall Charters</GlobalStyle.Title>
      <CardBody>
        <IGFeed />
        <Row>
          <GlobalStyle.PageCol>
            <GlobalStyle.Image src={boat} alt='The Nearfall' />
            <GlobalStyle.Text>
              Come set sail and enjoy a day on the Atlantic Ocean with the Nearfall fishing team. Our seasoned captains and crew look forward to getting you and your party hooked for a lifetime.  We aim to fill your coolers, share some laughs, and create a memorable experience for everyone aboard. Whether you’re a seasoned veteran of the sport or testing your sea legs for the first time, Nearfall Fishing Charters is the place for you. Our team specializes in Blackfish, Striped Bass, Fluke, Bottom Fishing, Inshore Tuna and Sharking. We offer a wide range of trips and tailor it to the needs of the people aboard and the fishery in season.  Departing from Shark River Inlet, our vessel is conveniently located at the Belmar Manutti Marina; just minutes away from the Garden State Parkway and Interstate 195. Take a break from your daily hussle and come on down to Nearfall Fishing Charters. We look forward to having you and are sincerely grateful for your patronage.
            </GlobalStyle.Text>
          </GlobalStyle.PageCol>
          <Col>
          </Col>
        </Row>
      </CardBody>
    </GlobalStyle.Jumbotron>
  )
}

export default LandingCard;