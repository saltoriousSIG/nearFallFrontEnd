import React from "react";
import { motion } from 'framer-motion';
import styled from 'styled-components';
import CarouselTest from './Carousel';


const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    overflow: hidden;

    @media all and (max-width:1300px){
        display:flex;
        justify-content: flex-start;
        flex-direction: column-reverse;
        margin-right:auto;
    }
`

const HeroContainer = styled.div`
    height:89vh;
    display:flex;
    width:51%;
    flex-direction: column;
    margin-left:auto;
    overflow: hidden;

    @media all and (max-width:1300px){
        margin:auto;
        height:35vh;
        width:80%;
    }

    @media all and (max-width:1024px){
        margin-top:5%;
        height:60vh;
    }

    @media all and (max-width:650px){
        margin-top:10%;
    }
`

const InstagramContainer=styled(motion.div)`
    height:89vh;
    display:flex;
    width:40rem;
    justify-content: center;
    flex-direction: column;
    margin:auto;
    
    @media all and (max-width:1300px){
        margin:auto;
        height:50vh;
    }

    @media all and (max-width:1024px){
        margin-top:10%;
    }

    @media all and (max-width:650px){
        height:20rem;
        width:35rem;
    }

    @media all and (max-width:565px){
        height:15rem;
        width:20rem;
    }

    @media all and (max-width:375px){
        height:10rem;
        width:16rem;
        
    }
`

const HeroHeaderText = styled(motion.h1)`
    color:white;
    letter-spacing:1px;
    

    @media all and (max-width:930px){
        font-size:3.5rem;
    }
    
    @media all and (max-width:800px){
        font-size:3rem;
    }
    
    @media all and (max-width:690px){
        font-size:2rem;
    }

    @media all and (max-width:490px){
        font-size:2rem;
    }

    @media all and (max-width:398px){
        font-size:1.5rem;
    }
`

const HeroText = styled(motion.p)`
    color:white;
    font-size:20px;

    @media all and (max-width:490px){
        font-size:1rem;
    }

    @media all and (max-width:398px){
        font-size: 0.8 rem;
    }
`

const CallToActionButton = styled(motion.button)`
  height: 5rem;
  width: 15rem;
  border-radius:7px;
  background-color:transparent;
  color: white;
  border:2px solid white;
  font-size:2rem;
  font-weight:bold;

  &:hover{
    background-color:rgba(255, 255, 255, 0.1);
  }

  @media all and (max-width:1300px){
    height:4rem;
    width: 10rem;
    font-size:1.5rem;
    margin:auto;
 }
`

const BorderBottom = styled(motion.div)`
  border:2px solid white;
  width:95%;
  
`

const ButtonRow = styled.div`
 display:flex;
 justify-content:center;
 align-items:flex-start;
`



const Gallery = () => {

    const callToActionButtonAnimation = {
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
        }
    }

    return <>
    <motion.div >
    <Row>
    <HeroContainer className='d-flex justify-content-center align-items-start'>
            <HeroHeaderText className='display-1'>
                <strong>NearFall Fishing Charters</strong>
            </HeroHeaderText>
            <BorderBottom className=' my-3 me-5 pe-5'/>
            <HeroText>
            Whether you’re a seasoned veteran of the sport or testing your sea legs for the first time, 
            <br/>
            Nearfall Fishing Charters is the place for you. 
            </HeroText>
            <ButtonRow className=''>
            <CallToActionButton className='mt-4 me-5 '
            >
                Button 1
            </CallToActionButton>
            <CallToActionButton className='mt-4 ms-5'>
                Button 2
            </CallToActionButton>
            </ButtonRow>
    </HeroContainer>
    <InstagramContainer className=''>
        <CarouselTest className='shadow'/>
    </InstagramContainer>
    </Row>
    </motion.div>
    </>
}

export default Gallery;