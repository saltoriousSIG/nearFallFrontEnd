import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';


const CalendarContext = React.createContext();

export const useCalendar = () => {
    return useContext(CalendarContext);
}

const CalendarProvider = ({ children }) => {
    const CLIENT_ID = '727244022741-idbtcosqaashb15dmj32hvlkt2khrtvg.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyAlpDjYTv74zP2T34GwVurx6OtFJKw84G4';
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

    const gapi = window.gapi;
    useEffect(() => {
        function start() {
            // 2. Initialize the JavaScript client library.
            gapi.client.init({
                'apiKey': API_KEY,
                // clientId and scope are optional if auth is not required.
                'clientId': CLIENT_ID,
                'scope': SCOPES,
            }).then(function () {
                // 3. Initialize and make the API request.
                return gapi.client.request({
                    'path': 'https://www.googleapis.com/calendar/v3/calendars/cv4ds6i2i4alf5grsq4cmaa8js@group.calendar.google.com/events',
                })
            }).then(function (response) {
                console.log(response.result);
            }, function (reason) {
                console.log(reason)
            });
        };
        // 1. Load the JavaScript client library.
        gapi && gapi.load('client', start);
    }, []);

    const r = {}
    return (
        <CalendarContext.Provider value={r}>
            {children}
        </CalendarContext.Provider>
    );
}

export default CalendarProvider