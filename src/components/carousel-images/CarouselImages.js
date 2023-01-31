import React, { useMemo } from "react";
import styled from "styled-components";
import CarouselComponent from "../common/carousel/Carousel";

const CarouselImg = styled.img`
  border-radius: 10px;
  z-index: 1;
  height: 700px;
  width: auto;
  object-fit: contain;
  object-position: left;
  @media screen and (max-width: 1024px) {
    height: 500px;
    margin-bottom: 40px;
  }
`;

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const CarouselImages = () => {
  const images = importAll(
    require.context("../../assets/carousel-img", false, /\.(png|jpe?g|svg)$/)
  );

  const renderedImages = useMemo(() => {
    return Object.keys(images).map((key) => {
      return <CarouselImg src={images[key]} />;
    }).reverse();
  }, [images]);

  return <CarouselComponent items={renderedImages} />;
};
export default CarouselImages;
