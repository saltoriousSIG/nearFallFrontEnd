import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: azure;
  text-decoration: underline;
  padding: 15px;
`;

export const Rates = (props) => {
  return (
    <Container>
      <Title>Trips &#38; Rates</Title>
    </Container>
  );
};
