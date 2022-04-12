import React from 'react';
import boat from '../../assets/img/boat.png';
import styled from 'styled-components';
import { Col, Row, } from 'reactstrap';
import GlobalStyle from '../common/globalstyle/global.style';

const Image = styled.img`
  border-radius: 10px;
  margin: 0;
  height: 250px;
  max-width: 100%;
  @media all and (max-width: 1024px){
    margin: auto;
    width: 90%;
    margin-bottom: 30px;
  } 
  
`;

const Text = styled(GlobalStyle.Text)`
  line-height: 30px;
  letter-spacing: 1.2px;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px;
  overflow-x: hidden;
  padding: 20px;
  padding-top: 100px;
  @media all and (max-width: 1024px){
    padding-top: 25px;
  } 
`;

const PageRow = styled(Row)`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media all and (max-width: 1024px){
    flex-direction: column-reverse;
    justify-content: start;
  }  
`;

const PageCol = styled(Col)`
  height: 100%;
  display: flex;
  justify-cotent: start;
  align-items: center;
  flex-direction: column;
  max-width: 90%;
  margin: auto;
  &.image-col { 
    justify-content: center;
    width: 100%;
  }
  @media all and (max-width: 1024px){
    width: 100%;
    height: auto;
    max-width: 100%;
  }

`

export const VesselInfo = () => {
  return (
    <Container>
      <PageRow>
        <PageCol>
          <GlobalStyle.Title style={{marginBottom: '30px'}}>
            A Day With NearFall
          </GlobalStyle.Title>
          <Image src={boat} alt='The Nearfall' />
          <Text>
            Come set sail and enjoy a day on the Atlantic Ocean with the Nearfall fishing team. Our seasoned captains and crew look forward to getting you and your party hooked for a lifetime. We aim to fill your coolers, share some laughs, and create a memorable experience for everyone aboard. Whether you’re a seasoned veteran of the sport or testing your sea legs for the first time, Nearfall Fishing Charters is the place for you. Our team specializes in Blackfish, Striped Bass, Fluke, Bottom Fishing, Inshore Tuna and Sharking. We offer a wide range of trips and tailor it to the needs of the people aboard and the fishery in season. Departing from Shark River Inlet, our vessel is conveniently located at the Belmar Manutti Marina; just minutes away from the Garden State Parkway and Interstate 195. Take a break from your daily hussle and come on down to Nearfall Fishing Charters. We look forward to having you and are sincerely grateful for your patronage.
          </Text>
        </PageCol>
        <PageCol>
          <GlobalStyle.Title>
            The NearFall Specs
          </GlobalStyle.Title>
          <GlobalStyle.TextNormal className=''>
            <ul>
              <li>
                Our new boat is a 35' custom Donelle. She has a 350 HP Cummins diesel engine. Her design allows for more than enough fishing room for everyone on board as she has a 14 ft beam and a large deck space. The vessel has a spacious, fully enclosed cabin that can keep you warm and dry in between fishing spots.
              </li>
              <br />
              <li>
                The Nearfall is equipped with the top-of-the-line electronics to make sailing safe, efficient and precise. She comes with dual fish finders, networked with GPS and Radar, 2 VHF radios, Sirius Weather and the latest USCG safety equipment. We have self-inflating life jackets, EPIRBs, and a liferaft. Your safety is our number one priority when sailing with the Nearfall team.
              </li>
              <br />
              <li>
                The vessel’s cabin has a comfortable dinette area, refrigerator, microwave and coffee station as well as large forward bunks.
              </li>
              <br />
              <li>
                The Nearfall team spares no expense with our fishing gear. All of our rods are custom-built and are brand new in 2022. We have both conventional and spinning rod setups available depending on your preference and the type of fish we are targeting.
              </li>
              <br />

            </ul>
          </GlobalStyle.TextNormal>
        </PageCol>
      </PageRow>
    </Container>
  )

}