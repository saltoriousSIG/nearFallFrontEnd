import React from "react";
import { trips } from "../../utils/trips";
import { useNavigate } from "react-router";
import GlobalStyle from "../common/globalstyle/global.style";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Link = styled(Button)`
  margin: 20px;
`;

const TripsListing = () => {
  const navigate = useNavigate();

  const goToPage = (tripName) => {
    navigate(`/trip/${tripName}`);
  };
  return (
    <GlobalStyle.Container style={{ marginTop: "75px" }}>
      {Object.keys(trips).map((x) => {
        return <Link onClick={() => goToPage(x)}>{x}</Link>;
      })}
    </GlobalStyle.Container>
  );
};

export default TripsListing;
