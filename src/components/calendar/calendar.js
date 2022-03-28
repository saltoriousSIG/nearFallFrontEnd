import React, { useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import GlobalStyle from '../common/globalstyle/global.style';
import styled from 'styled-components';


const Container = styled(GlobalStyle.Container)`
  padding-top: 50px;
`;
const Cal = styled.div`
  height: 100%;
  width: 90%;
  margin: 100px auto;
  margin-top: 25px;
  padding: 20px;
  background: rgba(250,250,255,0.90);
  .unavailable { 
      background-color: red !important;
      border-color: red !important;
  }
  .morning { 
    background-color: orange !important;
    border-color: orange !important;
    color: navy !important;
  } .evening { 
    background-color: navy !important;
    border-color: navy !important;
    color: orange !important;
  }
`;


export const NFCalendar = () => {

    useEffect(() => {
        const element = document.getElementById('calendar');
        const calendar = new Calendar(element, {
            plugins: [googleCalendarPlugin, dayGridPlugin],
            googleCalendarApiKey: 'AIzaSyAlpDjYTv74zP2T34GwVurx6OtFJKw84G4',
            events: {
                googleCalendarId: 'nearfallfishingcharters@gmail.com'
            },
            eventClick: function (event) {
                event.jsEvent.cancelBubble = true;
                event.jsEvent.preventDefault();
                console.log(event);
                const title = event.event._def.title;
                alert(title);

            },
            eventClassNames: function (args)  { 
                if (args.event._def.title === 'Unavailable' || args.event._def.title === 'Unavailable ') { 
                    return ['unavailable'];
                }
                if (args.timeText) { 
                    const timeOfDay = args.timeText.slice(-1);
                    if (timeOfDay === 'a') { 
                        return ['morning']
                    } else if (timeOfDay === 'p') { 
                        return ['evening']
                    }
                }

            }
        });
        
        calendar.render()
        const events = calendar.getEventSources();
        console.log(events);
    }, []);

    return (
        <Container>
            <GlobalStyle.Title>
                Calendar
            </GlobalStyle.Title>
            <Cal id='calendar'></Cal>
        </Container>
    )

}