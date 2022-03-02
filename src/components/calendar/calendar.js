import React, { useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import GlobalStyle from '../common/globalstyle/global.style';
import styled from 'styled-components';

const Cal = styled.div`
  height: 100%;
  width: 100%;
  margin: 20px;
  padding: 20px;
  margin-bottom: 100px;
  margin-top: 0;
  background: rgba(250,250,255,0.90);
`;


export const NFCalendar = () => {

    useEffect(() => {

        const element = document.getElementById('calendar');
        const calendar = new Calendar(element, {
            plugins: [googleCalendarPlugin, dayGridPlugin],
            googleCalendarApiKey: 'AIzaSyAlpDjYTv74zP2T34GwVurx6OtFJKw84G4',
            events: {
                googleCalendarId: 'nearfallfishingcharters@gmail.com', 
            }       
        });

        const events = calendar.getEvents();
        console.log(events);
        calendar.render()


    }, []);

    return (
        <GlobalStyle.Container>
            <GlobalStyle.Title>
                Calendar
            </GlobalStyle.Title>
            <Cal id='calendar' ></Cal>
        </GlobalStyle.Container>
    )

}