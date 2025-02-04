import React, { useMemo, useState, useEffect } from "react";
import Styled from "./book.style";
import { useParams } from "react-router";
import { trips } from "../../utils/trips";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Paypal from "../paypal/paypal";

const BookTrip = (props) => {
  const { trip } = useParams();

  const tripData = useMemo(() => {
    const tripDataString = decodeURIComponent(escape(window.atob(trip)));
    const td = JSON.parse(tripDataString);
    return {
      ...td,
    };
  }, [trip]);

  const [tripDetails, setTripDetails] = useState();
  const [selectedTrip, setSelectedTrip] = useState();
  const [selectedTripName, setSelectedTripName] = useState();
  const [selectedTripType, setSelectedTripType] = useState();
  const [tripOptions, setTripOptions] = useState();
  const [allTrips, setAllTrips] = useState();
  const [pageData, setPageData] = useState({
    name: "",
    email: "",
    phone: "",
    scheduledDate: "",
    tripType: "",
    referralSource: "",
  });

  const onInputUpdate = (e) => {
    setPageData({
      ...pageData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const load = async () => {
      const { source } = tripData || {};
      const calendarData = await axios.get(
        `https://www.googleapis.com/calendar/v3/calendars/nearfallfishingcharters@gmail.com/events?maxResults=2500&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      );
      if (source === "calendar") {
        const selectedTrip = calendarData.data.items.find((x) => {
          return x.id === tripData.id;
        });
        setAllTrips(calendarData.data.items);
        setPageData({
          ...pageData,
          scheduledDate: new Date(selectedTrip.start.dateTime).toLocaleString(),
        });
        setSelectedTrip(selectedTrip);
      } else if (source === "booking") {
        try {
          setSelectedTripName(tripData.title);
          setSelectedTripType(trips[tripData.title]);
          setTripOptions(Object.keys(trips));
          setTripDetails(tripData);
          setAllTrips(calendarData.data.items);
        } catch (e) {
          console.log(e);
        }
      }
    };

    load();
  }, [tripData]);

  useEffect(() => {
    const title = tripData.title;
    switch (title) {
      case "PM PRIVATE CHARTER": {
        const allowedTrips = Object.keys(trips).filter((key) => {
          return !trips[key].extendedOnly;
        });
        setTripOptions(allowedTrips);
        break;
      }
      case "AM PRIVATE CHARTER": {
        const allowedTrips = Object.keys(trips).filter((key) => {
          return !trips[key].extendedOnly && !trips[key].pmOnly;
        });
        setTripOptions(allowedTrips);
        break;
      }
      case 'EXTENDED HOUR "MARATHON" CHARTER': {
        setTripOptions(Object.keys(trips));
        break;
      }
      default:
        break;
    }
  }, [tripData]);

  const availTrips = useMemo(() => {
    if (!allTrips) return;
    const filtered = allTrips.filter((t) => {
      const { start } = t;
      return Math.floor(new Date(start.dateTime).getTime()) > Date.now();
    });
    const sorted = filtered.sort((a, b) => {
      return new Date(a.start.dateTime) - new Date(b.start.dateTime);
    });
    return sorted;
  }, [allTrips]);

  const handleSelectTrip = (trip) => {
    setSelectedTripType(trips[trip]);
    setSelectedTripName(trip);
  };

  return (
    <Styled.Container>
      <Styled.Title>Book now!</Styled.Title>
      <Styled.FormContainer>
        <Form>
          <FormGroup>
            <Label for="exampleSelect">Select a date</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              value={
                selectedTrip
                  ? new Date(selectedTrip.start.dateTime).toLocaleString()
                  : ""
              }
              onChange={(e) => {
                setPageData({
                  ...pageData,
                  scheduledDate: e.target.value,
                });
              }}
            >
              {availTrips &&
                availTrips.map((x, i) => {
                  const date = new Date(x.start.dateTime);
                  const formattedDate = date.toLocaleString();
                  return (
                    <option key={i} value={formattedDate}>
                      {formattedDate}
                    </option>
                  );
                })}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="tripTypeSelect">Select Trip Type</Label>
            <Input
              type="select"
              name="select"
              id="tripTypeSelect"
              value={selectedTripName}
              onChange={(e) => handleSelectTrip(e.target.value)}
            >
              <option value=""></option>
              {tripOptions &&
                tripOptions.map((option, i) => {
                  return (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  );
                })}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={onInputUpdate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={onInputUpdate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone Number</Label>
            <Input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              onChange={onInputUpdate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="howDidYouHearSelect">How did you hear about us?</Label>
            <Input
              type="select"
              name="referralSource"
              id="howDidYouHearSelect"
              onChange={(e) => onInputUpdate(e)}
            >
              <option value=""></option>
              {[
                "Friend/Referral",
                "Instagram",
                "Facebook",
                "Google",
                "Philadelphia Expo",
                "Edision Fishing Expo",
                "Fish Booker",
                "Fisherman Magazine",
              ].map((option, i) => {
                return (
                  <option key={i} value={option}>
                    {option}
                  </option>
                );
              })}
            </Input>
          </FormGroup>
          <FormGroup>
            {selectedTripType && (
              <Styled.ContainerVert>
                <Styled.Text>
                  Deposit Price: $
                  {selectedTripType?.price.deposit * 0.035 +
                    selectedTripType?.price.deposit}
                </Styled.Text>
              </Styled.ContainerVert>
            )}
          </FormGroup>
          {selectedTripType && (
            <Paypal id={selectedTripType.id} pageData={pageData} />
          )}
          <Styled.Container>
            Please call/text (732) - 232 -5620 with any additional questions
          </Styled.Container>
        </Form>
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default BookTrip;
