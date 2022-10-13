import React, { useMemo } from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import CarouselComponent from "../common/carousel/Carousel";
import dzug from "../../assets/img/dzug.jpeg";
import facas from "../../assets/img/facas.jpeg";
import captain from "../../assets/img/elcaptain.jpeg";
import fiore from "../../assets/img/petefiore.jpeg";
import boat from "../../assets/img/boat.png";
import { useNavigate } from "react-router";
import {
  HomeContainer,
  HeroContainer,
  HeroTextContainer,
  CaroselContainer,
  CarouselImage,
  HeroText,
  SubHeroText,
  HeroBtnRow,
  HeroBtn,
} from "./Styles";

const HomePage = () => {
  const navigate = useNavigate();

  const items = useMemo(() => {
    return [
      <CarouselImage src={boat} />,
      <CarouselImage src={dzug} />,
      <CarouselImage src={captain} />,
      <CarouselImage src={fiore} />,
    ];
  }, []);

  console.log(process.env.REACT_APP_ENVIRONMENT);
  return (
    <HomeContainer id="homeContainer">
      <HeroContainer id="hero-container">
        <HeroTextContainer>
          <HeroText>NearFall Fishing Charters</HeroText>
          <br />
          <SubHeroText>
            Whether you’re a seasoned veteran of the sport or testing your sea
            legs for the first time, Nearfall Fishing Charters is the place for
            you.
          </SubHeroText>
          <HeroBtnRow>
            <HeroBtn onClick={() => navigate("/calendar")}>
              <strong>View Calendar</strong>
            </HeroBtn>
            <HeroBtn onClick={() => navigate("/thenearfall")}>
              <strong>The NearFall</strong>
            </HeroBtn>
          </HeroBtnRow>
        </HeroTextContainer>
        <CaroselContainer>
          <CarouselComponent items={items} />
        </CaroselContainer>
      </HeroContainer>
    </HomeContainer>
  );
};

export default HomePage;

//view calendar
//the nearfall
