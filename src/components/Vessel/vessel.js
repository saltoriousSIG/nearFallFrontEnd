import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';
import GlobalStyle from '../common/globalstyle/global.style';
import CarouselComponent from '../common/carousel/Carousel';
import CarouselImages from '../carousel-images/CarouselImages';
import { useContentful } from '../../hooks/useContentful';

const CarouselTextItem = styled.span`
  margin: auto;
  color: white;
  margin-top: 60px;
  padding: 0 10px;
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
    padding-top: 155px;
  }
`;

const IntroBlock = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 1px 5px 5px black;
  border-radius: 8px;
  padding: 30px;
  margin: 20px auto;
  width: 85%;
  max-width: 1200px;
`;

const VesselRow = styled(Row)`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media all and (max-width: 1024px){
    flex-direction: column;
    justify-content: start;
  }
`;

const VesselCol = styled(Col)`
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  max-width: 48%;
  margin: auto;
  padding: 15px;

  @media all and (max-width: 1024px){
    width: 100%;
    height: auto;
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

const ImageBlock = styled.div`
  width: 100%;
  max-width: 550px;
  margin-bottom: 20px;
`;

export const VesselInfo = () => {
  const donelleImages = useContentful("trip", "donelle35");
  const topazImages = useContentful("trip", "topaz40");

  const donelleSpecs = useMemo(() => {
    return [
      <CarouselTextItem>
        The 35' custom Donelle received major upgrades in 2026. She is now powered by a brand new 450 HP FPT N67 diesel engine. With more power, she will be faster than ever before. Her design allows for more than enough fishing room for everyone on board as she has a 13 ft beam and a large deck space. The vessel has a spacious, fully enclosed cabin that can keep you warm and dry in between fishing spots.
      </CarouselTextItem>,
      <CarouselTextItem>
        The Nearfall is equipped with the top-of-the-line electronics to make sailing safe, efficient and precise. She comes with dual fish finders, networked with GPS and Radar, 2 VHF radios, Sirius XM radio and the latest USCG safety equipment. We have up to date and coast guard life jackets for adults and children, EPIRBs, and an inflatable liferaft. Your safety is our number one priority when sailing with the Nearfall team.
      </CarouselTextItem>,
      <CarouselTextItem>
        The Nearfall team spares no expense with our fishing gear. All of our rods and reels are new every year. We have both conventional and spinning rod setups available depending on your preference and the type of fish we are targeting. We welcome you to BYO but we have you covered if you don't own or want to bring your own gear.
      </CarouselTextItem>,
    ];
  }, []);

  const topazSpecs = useMemo(() => {
    return [
      <CarouselTextItem>
        In 2026, Nearfall Charters introduced the 2006 40 foot express. This vessel offers a robust platform for inshore and offshore fishing. The "Nearfall II" will do it all, from Striped Bass and all of the usual inshore targets to every target the deep canyons can offer, including Tilefish and Tuna.
      </CarouselTextItem>,
      <CarouselTextItem>
        The Nearfall II is a 40ft Topaz with a comfortable 13 foot beam. She is powered by twin Cat C-12s with a total of 1400 HP. With the power this vessel comes with, we will get to where we need to go quickly and maximize fishing time.
      </CarouselTextItem>,
      <CarouselTextItem>
        The 40' Topaz has a large cockpit for 6 person trips. The helm area comes with 2 spacious benches and a passenger seat next to the helm chair. Forward of the helm is a finely finished Salon with a full kitchen and stove top, a closed bathroom and shower, and entertainment system. The vessel has a forward bed and convertible beds. This vessel is built for comfort when underway to the offshore fishing grounds.
      </CarouselTextItem>,
      <CarouselTextItem>
        The Nearfall II is equipped with the top-of-the-line electronics to make sailing safe and efficient. She comes with Dual fish finders, Side Scan and DownView, networked with GPS and Radar, 2 VHF radios, Sirius Weather and the latest USCG safety equipment. In 2024 she was also equipped with a Starlink and has internet access ANYWHERE OFFSHORE for the safety and enjoyment of our passengers.
      </CarouselTextItem>,
    ];
  }, []);

  return (
    <Container>
      <GlobalStyle.Title style={{ marginBottom: '20px' }}>
        The Nearfall Page
      </GlobalStyle.Title>

      <IntroBlock>
        <Text>
          Come set sail and enjoy a day on the Atlantic Ocean with the Nearfall fishing team. Our seasoned captains and crew look forward to getting you and your party hooked for a lifetime. We aim to fill your coolers, share some laughs, and create a memorable experience for everyone aboard. Whether you're a seasoned veteran of the sport or testing your sea legs for the first time, Nearfall Fishing Charters is the place for you. Our team specializes in Blackfish, Striped Bass, Fluke, Bottom Fishing, Inshore Tuna and Sharking. We offer a wide range of trips and tailor it to the needs of the people aboard and the fishery in season. Departing from Shark River Inlet, our vessel is conveniently located at the Belmar Manutti Marina; just minutes away from the Garden State Parkway and Interstate 195. Take a break from your daily hussle and come on down to Nearfall Fishing Charters. We look forward to having you and are sincerely grateful for your patronage.
        </Text>
      </IntroBlock>

      <VesselRow>
        <VesselCol>
          <GlobalStyle.Title style={{ marginBottom: '20px' }}>
            35' Donelle
          </GlobalStyle.Title>
          <GlobalStyle.Title style={{ fontSize: '1.5rem', marginTop: '20px' }}>
            35 Donelle Specs
          </GlobalStyle.Title>
          <CarouselComponent items={donelleSpecs} height={250} />
        </VesselCol>

        <VesselCol>
          <GlobalStyle.Title style={{ marginBottom: '20px' }}>
            40' Topaz Express
          </GlobalStyle.Title>
          <GlobalStyle.Title style={{ fontSize: '1.5rem', marginTop: '20px' }}>
            40 Topaz Express Specs
          </GlobalStyle.Title>
          <CarouselComponent items={topazSpecs} height={250} />
        </VesselCol>
      </VesselRow>
    </Container>
  );
};
