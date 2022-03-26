import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import boat from './coursel-assets/boat.png';
import graytrigger from './coursel-assets/gray-triggertc.jpeg';
import captainjoe from './coursel-assets/capnjoe.jpeg';

const CarouselImg = styled.img`
  height: auto;
  border-radius: 10px;
  z-index: 1;
  max-height: 500px;
  width: 100%;
  object-fit: cover;
`;


const Container = styled.div`
  width: 100%;
  max-width: 600px;
  min-width: 599px;
  height: auto; 
  max-height: 400px;
  min-height: 399px;
  .carousel-inner { 
    min-width: 599px;
    max-height: 400px;
    min-height: 399px;
  }
`;


const CustomCarousel = styled(Carousel)`
 height:25rem;
 width:40rem;
 border-radius:15px;
 margin:auto;

`

const CarouselTest = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
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
      </Carousel>
    </Container>
  );
}

export default CarouselTest;