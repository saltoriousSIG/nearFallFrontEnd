import React, { useMemo } from "react";
import styled from "styled-components";
import CarouselComponent from "../common/carousel/Carousel";

const CarouselImg = styled.img`
  border-radius: 10px;
  z-index: 1;
  height: 700px;
  width: auto;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  object-position: left;
  @media screen and (max-width: 1024px) {
    height: 500px;
    margin-bottom: 40px;
  }
`;

const CarouselImages = ({ images }) => {
  const renderedImages = useMemo(() => {
    return images
      .map((img) => {
        return <CarouselImg src={img} />;
      })
      .reverse();
  }, [images]);

  return <CarouselComponent items={renderedImages} />;
};
export default CarouselImages;
