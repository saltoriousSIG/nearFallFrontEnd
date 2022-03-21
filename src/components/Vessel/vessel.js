import React from 'react';
import boat from '../../assets/img/boat.png';
import styled from 'styled-components';
import { CardBody, Col, Row, } from 'reactstrap';
import GlobalStyle from '../common/globalstyle/global.style';


const Container = styled.div`
  margin-top: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  margin: auto;
  border-radius: 10px;
  
  @media all and (max-width:900px){
    height:10rem;
  }
`;

const Title = styled.h1`
  color: azure;
  text-decoration: underline;
  padding: 15px;
`;
const ContentContainer = styled(Container)` 
    color: azure !important;
    max-width: 60%;
    background: rgba(10,10,10,0.65);
    letter-spacing: 1.2px;
    padding: 18px;
    border-radius: 20px;
    li {
        color: white;
        font-weight: bold;
        list-style-type: square;
        font-family: 'Poppins', sans-serif;
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

const BackDrop = styled.div`
height: auto;
margin: auto;

padding: 15px;
border-radius:8px;

@media all and (max-width:900px){
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:auto;
}
`

const VesselCard=styled(CardBody)`
  height: 50%;
  width: 70%;
  letter-spacing:0.7px;
  margin: auto;

  display:flex;
  flex-direction:row;
  
`

export const VesselInfo = () => {
    return (
        
        // <Container className=''>
            
        //     <ContentContainer className='me-5'>
        //             <GlobalStyle.PageCol className=''>
        //             <Title className=''>About The Nearfall</Title>
        //             <Image src={boat} alt='The Nearfall' className='float-left'/>
        //             </GlobalStyle.PageCol>
        //         <ul>
        //             <li>
        //                 Our new boat is a 35' custom Donelle. She has a 350 HP Cummins diesel engine. Her design allows for more than enough fishing room for everyone on board as she has a 14 ft beam and a large deck space. The vessel has a spacious, fully enclosed cabin that can keep you warm and dry in between fishing spots.
        //             </li>
        //             <br />
        //             <li>
        //                 The Nearfall is equipped with the top-of-the-line electronics to make sailing safe, efficient and precise. She comes with dual fish finders, networked with GPS and Radar, 2 VHF radios, Sirius Weather and the latest USCG safety equipment. We have self-inflating life jackets, EPIRBs, and a liferaft. Your safety is our number one priority when sailing with the Nearfall team.
        //             </li>
        //             <br />
        //             <li>
        //                 The vessel’s cabin has a comfortable dinette area, refrigerator, microwave and coffee station as well as large forward bunks.
        //             </li>
        //             <br />
        //             <li>
        //                 The Nearfall team spares no expense with our fishing gear. All of our rods are custom-built and are brand new in 2022. We have both conventional and spinning rod setups available depending on your preference and the type of fish we are targeting.
        //             </li>
        //             <br />
        //             <HighlightContainer>
        //                 <div>
        //                     <span>Coming SOON!!!</span>
        //                     <span className='subtext'>
        //                         Brand new custom built Dual Anchor System with Hauler
        //                     </span>
        //                 </div>
        //             </HighlightContainer>

        //         </ul>
        //     </ContentContainer>
        // </Container>

        <VesselCard className='d-flex pt-1 bg-danger'>
          <GlobalStyle.PageCol className=''>
            <BackDrop className='mt-5'>
            <GlobalStyle.Title className='display-3 pb-5 pt-4'>About Our Vessel</GlobalStyle.Title>
            <GlobalStyle.TextNormal className=''>
              <Image src={boat} alt='The Nearfall' className='float-end pb-1 ms-5 '/>
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
                    <HighlightContainer>
                        <div>
                            <span>Coming SOON!!!</span>
                            <span className='subtext'>
                                Brand new custom built Dual Anchor System with Hauler
                            </span>
                        </div>
                    </HighlightContainer>

                </ul>
            </GlobalStyle.TextNormal>
            </BackDrop>
          </GlobalStyle.PageCol>
          
      </VesselCard>
    )

}