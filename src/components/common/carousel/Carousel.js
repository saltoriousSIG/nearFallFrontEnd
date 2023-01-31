import React, { useState, useMemo } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';


const Container = styled.div`
  width: auto;
  max-width: 600px;
  height: auto; 
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
  min-height: ${(props) => {
    if (props.height) {
      return props.height + 'px'
    }
    return '399px';
  }};
  @media screen and (max-width: 1024px) { 
    max-width: 100%;
    min-width: 100%;
  }
  .carousel-inner { 
    min-width: 599px;
    min-height: ${(props) => {
    if (props.height) {
      return props.height + 'px'
    }
    return '399px';
  }};
    @media screen and (max-width: 1024px) { 
      max-width: 100%;
      min-width: 100%;
    }
  }
`;


const CarouselComponent = (props) => {

  const {
    items,
    height
  } = props

  const [index, setIndex] = useState(0);

  const carouselItems = useMemo(() => {
    return items && items.map((x) => {
      return (
        <Carousel.Item>
          {x}
        </Carousel.Item>
      )
    })
  }, [items])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container height={height}>
      <Carousel activeIndex={index} onSelect={handleSelect} controls={true} interval={2000}>
        {
          carouselItems && carouselItems.map((x, i) => {
            return x;
          })
        }
      </Carousel>
    </Container>
  );
}

export default CarouselComponent;