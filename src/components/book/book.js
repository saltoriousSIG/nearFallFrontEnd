import React, { useMemo, useState, useEffect } from "react";
import Styled from "./book.style";
import { useParams } from "react-router";
import { trips } from "../../utils/trips";
import axios from "axios";
import Fuse from "fuse.js";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Paypal from "../paypal/paypal";

const BookTrip = (props) => {
  const { trip } = useParams();

  const tripData = useMemo(() => {
    const tripDataString = decodeURIComponent(escape(window.atob(trip)));
    const td = JSON.parse(tripDataString);
    const tripDate = new Date(parseInt(td.timeStamp));
    return {
      ...td,
      dateTime: tripDate.toUTCString(),
    };
  }, [trip]);

  const [tripDetails, setTripDetails] = useState();
  const [selectedTrip, setSelectedTrip] = useState();
  const [allTrips, setAllTrips] = useState();
  const [pageData, setPageData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const onInputUpdate = (e) => {
    setPageData({
      ...pageData,
      [e.target.name]: e.target.value,
    });
  };
  const tripDate = useMemo(() => {
    if (selectedTrip) {
      const date = new Date(selectedTrip.start.dateTime);
      return date.toUTCString();
    }
  }, [selectedTrip]);

  useEffect(() => {
    const load = async () => {
      const { source } = tripData || {};
      const calendarData = await axios.get(
        `https://www.googleapis.com/calendar/v3/calendars/nearfallfishingcharters@gmail.com/events?maxResults=2500&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      );

      if (source === "calendar") {
        const filtered = calendarData.data.items.filter((x) => {
          return x.id === tripData.id;
        });

        const filterByName = calendarData.data.items
          .filter((x) => {
            return x.summary === tripData.title;
          })
          .filter((x) => {
            return x.id !== tripData.id;
          })
          .sort((a, b) => {
            return new Date(a.start.dateTime) - new Date(b.start.dateTime);
          });

        const filterTripData = Object.keys(trips)
          .filter((x) => {
            if (trips[x].calendarTitle) {
              return trips[x].calendarTitle.includes(tripData.title);
            }
            return false;
          })
          .map((x) => trips[x])[0];

        setTripDetails(filterTripData);
        setAllTrips(filterByName);
        setSelectedTrip(filtered[0]);
      } else if (source === "booking") {
        try {
          const events = calendarData.data.items;

          const calendarTitles = tripData.calendarTitle;

        

          const getResults = () => {
            const dat = [];
            calendarTitles.map((x) => {
              const filtered = events.filter((y) => {
                return y.summary.trim() === x.trim();
              });

              dat.push(filtered);
            });
            return dat.flat();
          };

          const res = getResults();

          setTripDetails(tripData);

          setAllTrips(res);

        } catch (e) {
          console.log(e);
        }
      }
    };

    load();
  }, [trips, tripData]);

  const availTrips = useMemo(() => {
    if (!allTrips) return;
    const filtered = allTrips.filter((t) => {
      const { start } = t;
      return Math.floor(new Date(start.dateTime).getTime()) > Date.now();
    });
    const sorted = filtered.sort((a, b) => {
      return (new Date(a.start.dateTime) - new Date(b.start.dateTime));
    });
    return sorted;
  }, [allTrips]);


  if (tripDetails) {
    return (
      <Styled.Container>
        <Styled.Title>Book now!</Styled.Title>
        <Styled.FormContainer>
          <Form>
            <FormGroup>
              <Label for="exampleSelect">Select a date</Label>
              <Input type="select" name="select" id="exampleSelect">
                {tripDate && <option>{tripDate}</option>}
                {availTrips &&
                  availTrips.map((x) => {
                    const date = new Date(x.start.dateTime);
                    const formattedDate = date.toLocaleString()
                    return (
                      <option value={Date.parse(date)}>{formattedDate}</option>
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
              <Styled.ContainerVert>
                <Styled.Text>
                  Deposit Price: ${tripDetails?.price.deposit}
                </Styled.Text>
                <Styled.Text>
                  Total Price: $
                  {tripDetails?.price.deposit + tripDetails?.price.balance}
                </Styled.Text>
              </Styled.ContainerVert>
            </FormGroup>

            <Paypal id={tripDetails.id} pageData={pageData} />
            <Styled.Container>
              Please call/text (732) - 344 - 8833 with any additional questions
            </Styled.Container>
          </Form>
        </Styled.FormContainer>
      </Styled.Container>
    );
  }

  return <></>;
};

export default BookTrip;
