import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeroContainer = styled.div`
  height: 500px;
  width: 90%;

  margin-top: 190px;
  margin-bottom: 100px;

  color: white;

  display: flex;

  justify-content: center;
  align-items: center;

  @media all and (max-width: 1330px) {
    flex-direction: column-reverse;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    margin-top: 0px;
  }
`;

//-----------------------------------------------------------------------------------//
//---------------------------------Hero Content-----------------------------------------//
//-----------------------------------------------------------------------------------//

export const HeroTextContainer = styled.div`
  height: 100%;
  width: 50%;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media all and (max-width: 1330px) {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const heroAnimation = keyframes`
  0%{
    transform: translateX(50px);
  }
  100%{
    transform: translateX(0px);
  }
`;

export const HeroText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 3.5rem;
  letter-spacing: 0.8px;

  animation: 500ms ${heroAnimation} ease-in-out;
`;

export const SubHeroText = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  letter-spacing: 0.8px;

  animation: 650ms ${heroAnimation} ease-in-out;
`;

export const HeroBtnRow = styled.div`
  width: 100%;

  padding-top: 10px;

  gap: 1.5rem;

  display: flex;
`;

export const HeroBtn = styled.button`
  height: 3.5rem;
  width: 12rem;

  border: 2px solid white;
  border-radius: 8px;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 0.8px;

  background: white;
  color: black;

  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    background: transparent;
    color: white;
  }

  animation: 800ms ${heroAnimation} ease-in-out;
`;

//-----------------------------------------------------------------------------------//
//---------------------------------Carousel-----------------------------------------//
//-----------------------------------------------------------------------------------//

export const CaroselContainer = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  justify-content: end;
  align-items: center;

  padding: 10px;

  @media all and (max-width: 1330px) {
    width: 100%;
    margin-top: 20px;
    justify-content: center;
  }
`;

export const CarouselImage = styled.img`
  height: 100%;
  width: 100%;

  border-radius: 8px;
  overflow: hidden;

  background: green;

  display: flex;
  justify-content: center;
  align-items: center;
`;
