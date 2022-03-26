import React from "react";
import { Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import CarouselTest from './Carousel';


const PageRow = styled(Row)`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin: 0 15px;
    margin-top: 175px;
    @media all and (max-width:1024px){
        flex-direction: column-reverse;
        margin-top:0;
    }
`;

const PageCol = styled(Col)`
  width: 48%;
  max-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media all and (max-width: 1024px){
    align-items: flex-start;
    width: 100%;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  @media all and (max-width: 1024px){
    align-items: flex-start;
    margin: 20px;
  }
`;

const InstagramContainer = styled(motion.div)`
    margin: 40px;
    margin-right: 0;
    @media all and (max-width: 1024px){
        align-items: flex-start;
        margin: 20px;
    }
`

const HeroHeaderText = styled(motion.h1)`
    color: white;
    letter-spacing: 1px;
    font-size: 3.5rem;
    font-family: 'Lato', sans-serif;
`;

const HeroText = styled(motion.p)`
    color:white;
    font-size: 20px;
`;

const CallToActionButton = styled(motion.button)`
  height: 100px;
  width: 200px;
  border-radius:10px;
  background-color:transparent;
  color: white !important;
  border:2px solid white;
  font-size: 1.5rem;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  &:hover{
    background-color:rgba(255, 255, 255, 0.1);
  }

  @media all and (max-width:1024px){
    height:4rem;
    width: 10rem;
    font-size:1.5rem;
    margin:auto;
 }
`

const BorderBottom = styled(motion.div)`
  border: 2px solid white;
  width: 100%;
  
`

const ButtonRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
     > * {
        margin-right: 20px;
     }

`

const HomePage = () => {

    const callToActionButtonAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    }

    return (
        <motion.div style={{ height: '100%' }}>
            <PageRow>
                <PageCol>
                    <HeroContainer>
                        <HeroHeaderText>
                            <strong>NearFall Fishing Charters</strong>
                        </HeroHeaderText>
                        <BorderBottom />
                        <HeroText>
                            Whether you’re a seasoned veteran of the sport or testing your sea legs for the first time,
                            <br />
                            Nearfall Fishing Charters is the place for you.
                        </HeroText>
                        <ButtonRow >
                            <CallToActionButton>
                                View Calendar
                            </CallToActionButton>
                            <CallToActionButton>
                                View Trips
                            </CallToActionButton>
                        </ButtonRow>
                    </HeroContainer>
                </PageCol>
                <PageCol>
                    <InstagramContainer>
                        <CarouselTest className='shadow' />
                    </InstagramContainer>
                </PageCol>
            </PageRow>
        </motion.div>
    )


}

export default HomePage;