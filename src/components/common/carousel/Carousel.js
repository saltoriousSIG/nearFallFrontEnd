import React, { useState, useMemo } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  max-width: 600px;
  min-width: 599px;
  height: auto; 
  max-height: 400px;
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
    max-height: 400px;
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
    return items.map((x) => {
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
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {
          carouselItems.map((x, i) => {
            return x;
          })
        }
      </Carousel>
    </Container>
  );
}

export default CarouselComponent;