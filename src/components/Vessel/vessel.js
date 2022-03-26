import React from 'react';
import boat from '../../assets/img/boat.png';
import styled from 'styled-components';
import { CardBody, Col, Row, } from 'reactstrap';
import GlobalStyle from '../common/globalstyle/global.style';

const Image = styled.img`
  border-radius: 10px;
  height:68%;
  width:68%;
  
  @media all and (max-width:912px){
    height:10rem;
    width:16rem;
  }

  @media all and (max-width: 821px){
    height:15rem;
    width:24rem;
  }
`;

const HighlightContainer = styled.div`
  text-align: center;
  > div {
      display: flex;
      flex-direction: column;
      span {    
          font-weight: bold;
          font-size: 20px;
          color: white;
          text-decoration: underline;
          &.subtext { 
              font-weight: 100;
              font-size: 18px;
              text-decoration: none;
              font-family: 'Poppins', sans-serif;
              font-weight: 700;
          }
      }
  }
`;


const VesselCard=styled(CardBody)`
  height: 50%;
  width: 20%;
  letter-spacing:0.7px;
  margin: auto;

  display:flex;
  flex-direction:row;
  
`

const MainColumn = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width:90%
  height:50vh;

  @media all and (max-width:912px){
    height:120vh;
  }

  @media all and (max-width:820px){
    height:135vh;
  }

  @media all and (max-width:768px){
    height:120vh;
  }
  
`

const VesselRow = styled.div`
  width:85%;
  height:60vh;
  margin:auto;
  display:flex;
  justify-content: space-between;
  flex-direction:row;

  

  @media all and (max-width: 1024px){
    flex-direction:column-reverse;
    justify-content:start;
  }

  @media all and (max-width: 821px){
    flex-direction:column-reverse;
    justify-content:start;
  }
  
`

const VesselColumn = styled.div`
  width:37%;
  height:100%;
  display:flex;
  justify-cotent:start;
  align-items:center;
  flex-direction:column;
  

  @media all and (max-width: 1024px){
    width:100%;
    height:100vh;
  }

  @media all and (max-width: 821px){
    width:100%;
    height:100vh;
  }

  @media all and (max-width:280px){
    width:174%;
  }
`

const AboutVesselColumn = styled.div`
  width:60%;
  height:100%;

  display:flex;
  justify-content:start;
  align-items:start;
  flex-direction:column;

  @media all and (max-width: 1024px){
    width:100%;
    height:120vh;
  }

  @media all and (max-width: 821px){
    width:100%;
    height:100vh;
  }

  @media all and (max-width:280px){
    width:155%;
    height:200vh;
  }

`

export const VesselInfo = () => {
    return (
      <MainColumn className=''>
        
      <VesselRow className='mt-5 '>
      <AboutVesselColumn className='mt-3'>
        <GlobalStyle.Title className='mx-auto mb-5'>
          A Day With NearFall
        </GlobalStyle.Title>
               <GlobalStyle.TextNormalIndent className=''>
               <Image src={boat} alt='The Nearfall' className='float-end ms-5 mb-3'/>
               Come set sail and enjoy a day on the Atlantic Ocean with the Nearfall fishing team. Our seasoned captains and crew look forward to getting you and your party hooked for a lifetime. We aim to fill your coolers, share some laughs, and create a memorable experience for everyone aboard. Whether you’re a seasoned veteran of the sport or testing your sea legs for the first time, Nearfall Fishing Charters is the place for you. Our team specializes in Blackfish, Striped Bass, Fluke, Bottom Fishing, Inshore Tuna and Sharking. We offer a wide range of trips and tailor it to the needs of the people aboard and the fishery in season. Departing from Shark River Inlet, our vessel is conveniently located at the Belmar Manutti Marina; just minutes away from the Garden State Parkway and Interstate 195. Take a break from your daily hussle and come on down to Nearfall Fishing Charters. We look forward to having you and are sincerely grateful for your patronage.
               </GlobalStyle.TextNormalIndent>
        </AboutVesselColumn>
        
        <VesselColumn className=' my-auto pe-3 mt-3'>
        <GlobalStyle.Title className='mb-5'>
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
          </VesselColumn>
          
        </VesselRow>
        {/* <HighlightContainer className='pt-5 mt-5'>
                         <div>
                             <span>Coming SOON!!!</span>
                             <span className='subtext'>
                                 Brand new custom built Dual Anchor System with Hauler
                             </span>
                         </div>
                     </HighlightContainer> */}
      </MainColumn>
    )

}