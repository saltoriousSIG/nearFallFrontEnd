import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import boat from './coursel-assets/boat.png';
import bluefish from './coursel-assets/bluefishtc.jpeg';
import graytrigger from './coursel-assets/gray-triggertc.jpeg';
import captainjoe from './coursel-assets/capnjoe.jpeg';

const CarouselImg = styled.img`
  height:25rem;
  width:40rem;
  border-radius:15px;
  z-index:1;


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

const CustomCarousel = styled(Carousel)`
 height:25rem;
 width:40rem;
 border-radius:15px;

 margin:auto;

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

const CarouselTest = () =>{

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return(
        <>
         <CustomCarousel activeIndex={index} onSelect={handleSelect} className='bg-primary'>
        <Carousel.Item>
        <CarouselImg
         src={boat}
        />
        <Carousel.Caption>
          <h3>The Near Fall</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <CarouselImg
         src={captainjoe}
        />

        <Carousel.Caption>
          <h3>BlueFish</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <CarouselImg
         src={graytrigger}
        />

        <Carousel.Caption>
          <h3>Gray Trigger</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </CustomCarousel>
        </>
    );
}

export default CarouselTest;