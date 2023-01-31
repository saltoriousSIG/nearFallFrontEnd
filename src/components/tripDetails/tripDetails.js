import React, { useMemo } from "react";
import { useParams } from "react-router";
import GlobalStyle from "../common/globalstyle/global.style";
import { trips } from "../../utils/trips";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { Button } from "reactstrap";

const Image = styled(GlobalStyle.Image)`
  height: 350px;
  width: 300px;
  border: 1.5px solid #f2994a;
`;
const Container = styled(GlobalStyle.Container)`
  flex-direction: row;
  width: 100%;
  &.vertical {
    flex-direction: column;
  }
  @media all and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto 25%;
  justify-content: center;
  align-items: center;
`;

const TargetFishImage = styled(Image)`
  width: 175px;
  height: 75px;
`;

const BookTripButton = styled(Button)`
  padding: 25px 50px;
  font-size: 30px;
  background: orange;
`;

export const TripDetails = (props) => {
  const { tripName } = useParams();
  const currentTrip = useMemo(() => {
    return trips[tripName];
  }, [tripName]);

  const navigate = useNavigate();

  const {
    media,
    description,
    description2,
    price,
    tripTimes,
    tripDuration,
    details,
    targetCatch,
    notes
  } = currentTrip || {};

  const { deposit, balance } = price || {};
  const { time, minOccupants, maxOccupants } = tripDuration || {};

  const detailsArray = useMemo(() => {
    if (!details) return;
    const arr = details && details.split(";");
    const res = arr.filter((x) => x !== "");
    return res;
  }, [details]);

  const bookDetails = useMemo(() => {
    return {
      ...currentTrip,
      source: "booking",
      title: tripName,
    };
  }, [currentTrip]);

  const onClickBook = () => {
     const sendDetails = {
      id: bookDetails.id,
      price: bookDetails.price,
      calendarTitle: bookDetails.calendarTitle,
      description: bookDetails.description,
      source: bookDetails.source,
      title: bookDetails.title,
      tripDuration: bookDetails.tripDuration,
    };

    const pageDataString = JSON.stringify(sendDetails);
    const encoded = btoa(unescape(encodeURIComponent(pageDataString)));
    window.scrollTo(0, 0);

    switch (process.env.REACT_APP_ENVIRONMENT) {
      case "development":
        window.location = `http://localhost:3000/book-trip/${encoded}`;
        break;
      case "production":
        window.location = `https://www.nearfallfishingcharters.com/book-trip/${encoded}`;
    }
  };

  return (
    <GlobalStyle.Container style={{ paddingTop: "150px" }}>
      <GlobalStyle.Title style={{ marginTop: "20px" }}>
        {tripName}
      </GlobalStyle.Title>
      <ImageContainer>
        {media &&
          media.map((x, i) => {
            return x && <Image key={i} src={x} />;
          })}
      </ImageContainer>
      <Container>
        <BookTripButton onClick={onClickBook}>Book Now</BookTripButton>
      </Container>
      {notes && <Container>
        <p style={{color: 'white', textDecoration: 'underline'}}><strong>{notes}</strong></p>
      </Container>}
      <GlobalStyle.Jumbotron>
        <Container className="vertical">
          <GlobalStyle.Text>{description}</GlobalStyle.Text>
          {description2 && <GlobalStyle.Text>{description2}</GlobalStyle.Text>}
        </Container>
        <Container style={{ alignItems: "flex-start" }}>
          <GlobalStyle.Title style={{ color: "white" }}>
            Details:
          </GlobalStyle.Title>
        </Container>
        <Container style={{ alignItems: "flex-start" }}>
          {(deposit || balance) && (
            <Container
              className="vertical"
              style={{ alignItems: "flex-start" }}
            >
              <GlobalStyle.Text>Deposit: ${deposit}</GlobalStyle.Text>
              <GlobalStyle.Text>Balance: ${balance}</GlobalStyle.Text>
              <GlobalStyle.Text>
                Total: ${deposit + balance} + tip
              </GlobalStyle.Text>
            </Container>
          )}
          {tripTimes && tripTimes.length > 0 && (
            <Container
              className="vertical"
              style={{ alignItems: "flex-start" }}
            >
              <GlobalStyle.Text>Trip times:</GlobalStyle.Text>
              {tripTimes.map((x, i) => {
                return <GlobalStyle.Text key={i}>{x}</GlobalStyle.Text>;
              })}
            </Container>
          )}
          {(time || minOccupants || maxOccupants) && (
            <Container
              className="vertical"
              style={{ alignItems: "flex-start" }}
            >
              <GlobalStyle.Text>Time: {time}</GlobalStyle.Text>
              <GlobalStyle.Text>
                Maximum Occupants: {maxOccupants}
              </GlobalStyle.Text>
            </Container>
          )}
          {detailsArray && detailsArray.length > 0 && (
            <Container
              className="vertical"
              style={{ alignItems: "flex-start" }}
            >
              {detailsArray.map((x, i) => {
                return (
                  <GlobalStyle.Text style={{ textAlign: "left", whiteSpace:'pre-line' }} key={i}>
                    {x}
                  </GlobalStyle.Text>
                );
              })}
            </Container>
          )}
        </Container>
        <Container style={{ margin: "15px" }}>
          {targetCatch && targetCatch.length > 0 && (
            <Container>
              {targetCatch.map((x, i) => {
                return <TargetFishImage key={i} src={x} />;
              })}
            </Container>
          )}
        </Container>
      </GlobalStyle.Jumbotron>
    </GlobalStyle.Container>
  );
};
