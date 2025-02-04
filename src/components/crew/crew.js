import React from "react";
import GlobalStyle from "../common/globalstyle/global.style";
import captainJoe from "../../assets/img/elcaptain.jpeg";
import deckhand1 from "../../assets/img/deckhand1.jpeg";
import deckhand2 from "../../assets/img/deckhand2.jpeg";
import styled from "styled-components";
import mitch from "../../assets/img/bigmitch.jpeg";
import ant from "../../assets/img/antfiore.jpeg";
import pete from "../../assets/img/petefiore.jpeg";
import facas from "../../assets/img/facas.jpeg";
import dzug from "../../assets/img/dzug.jpeg";
import woj from "../../assets/img/woj.jpeg";
import kizman from "../../assets/img/captainjohnnew.jpeg";
import felder from "../../assets/img/felder.jpeg";
import kluzner from "../../assets/img/kluz.jpeg";
import { Row } from "reactstrap";

const Image = styled(GlobalStyle.Image)`
  height: 450px;
  width: 400px;
  border-radius: 10px;
`;

const Container = styled(GlobalStyle.Container)`
  padding-top: 120px;
`;

const TextNormalIndent = styled(GlobalStyle.TextNormalIndent)`
  max-width: 75%;
`;

const BackDrop = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  height: 1050px;
  box-shadow: 1px 5px 5px black;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 45%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media all and (max-width: 1024px) {
    width: 90%;
    margin: auto;
  }
`;

const BackDrop1 = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  height: auto;
  box-shadow: 1px 5px 5px black;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  width: 85%;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  @media all and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  @media all and (max-width: 1024px) {
    flex-direction: column;
    margin: auto;
  }
`;

const Crew = () => {
  return (
    <Container>
      <GlobalStyle.Title>The Nearfall Crew</GlobalStyle.Title>
      <TextNormalIndent>
        You can’t have a successful fishing boat without a dedicated and
        friendly crew. We pride ourselves on making your experience enjoyable
        and sending you home feeling like you are a part of the Nearfall family.
        The Nearfall Team is loaded with experience and ready to bring you the
        best fishing experience on every trip. Each Captain and Deckhand’s
        knowledge of fishing and the local fishing will not only make your day
        easier and maximize your time at the rail, but you will also leave your
        charter as a better fisherman. We all look forward to having you aboard!
      </TextNormalIndent>

      <BackDrop1>
        <Image src={captainJoe} />
        <GlobalStyle.Container>
          <GlobalStyle.Title style={{ color: "white" }}>
            Captain Joe Paton
          </GlobalStyle.Title>
          <GlobalStyle.TextNormal>
            US Coast Guard Licensed 100 Ton Master Captain
          </GlobalStyle.TextNormal>
          <GlobalStyle.TextNormalIndent>
            Capt. Joe has been working on fishing boats since he was 15 years
            old and has been fishing the NJ waters since he was 5. He spent 10
            years working as deckhand aboard the Dauntless out of Pt. Pleasant,
            NJ and has been a USCG Licensed 100 Ton Master Captain for 7 years.
            During his time as a young captain he trained under the direct
            tutelage of Captain Butch Egerter who has fished the Jersey Coast
            for over 50 years. Over the years, Joe has spent time running head
            boats and local charter boats. Capt. Joe is a man on a mission and
            that mission is to get you on productive fishing grounds and to see
            the joy in a customer's face when they've landed a personal best
            fish or landed something they have never seen before. Filling a
            cooler to bring home for dinner is always on the to-do list and by
            days end you will have your fair share, but what really brings pride
            to Joe is the seeing someone grow as a fisherman and giving the
            customer an experience that elicits the same obsession that took
            over Joe at a young age.
          </GlobalStyle.TextNormalIndent>
        </GlobalStyle.Container>
      </BackDrop1>

      <BackDrop1>
        <Image src={kizman} />
        <GlobalStyle.Container>
          <GlobalStyle.Title style={{ color: "white" }}>
            Captain John Kizman
          </GlobalStyle.Title>
          <GlobalStyle.TextNormal>
            US Coast Guard Licensed 100 Ton Master Captain
          </GlobalStyle.TextNormal>
          <GlobalStyle.TextNormalIndent>
            Capt. John is a lifelong resident of the Jersey Shore. He grew up
            working at a local seafood market and has spent his years gaining
            most of his experience on headboats, specializing in bottom fish and
            pelagics. Over the last 20 years, every chance mother nature would
            let him, he would be on the ocean. Even on his days off from working
            the boats you will find him floating on the ocean searching for
            something, regardless of the target. Capt John specializes in
            striped bass, fluke, blackfish and has spent many hours in the deep
            hunting pelagics. If you were to ask him what he'd rather be fishing
            for, it will always be blackfish! He has even taken many trips
            abroad to central and south America to explore other bodies of water
            and to see what they have to offer. Capt John is a well rounded
            captain and will always promise you 110% effort, giving you a full
            cooler and great memories aboard the Nearfall.
          </GlobalStyle.TextNormalIndent>
        </GlobalStyle.Container>
      </BackDrop1>

      <BackDrop1>
        <Image src={felder} />
        <GlobalStyle.Container>
          <GlobalStyle.Title style={{ color: "white" }}>
            Captain Zach Felder
          </GlobalStyle.Title>
          <GlobalStyle.TextNormal>
            US Coast Guard Licensed 100 Ton Master Captain
          </GlobalStyle.TextNormal>
          <GlobalStyle.TextNormalIndent>
            Captain Zach is the definition of an outdoorsman. If he isn’t
            fishing, he's posted in the woods somewhere on the hunt for some
            terrestrial game. He is someone who is truly passionate for the
            sport of fishing and eager to teach you some of his tricks of the
            trade that he's developed through years of experience and learning
            from some of the Jersey Shore’s best. Primarily centered out of
            Belmar, NJ, Captain Zack has been working boats since 2008 aboard
            all of the big name headboats. He also spent two years working on
            deck aboard the Voyager where he was able to gather incredible
            experience offshore; targeting tuna and deep dropping for tilefish.
            Since 2012, Captain Zack has been a 100 Ton Master Captain as well.
            With over 17 years of professional experience, with many days spent
            on the offshore and inshore grounds, Captain Zack is an asset to the
            Nearfall team and you will enjoy a great day of fishing with him at
            the helm.
          </GlobalStyle.TextNormalIndent>
        </GlobalStyle.Container>
      </BackDrop1>

      <Wrapper>
        <GlobalStyle.Title style={{ color: "white", marginLeft: "10%" }}>
          Team Members/Deckhands
        </GlobalStyle.Title>
        <GlobalStyle.TextNormalIndent className="ps-5 pe-5 ms-5 me-5 pb-5 pt-3">
          As is common on most charter boats, you have a couple steady deckhands
          to work the deck and a captain or two that reliably puts people on the
          fish day-in and day-out. On the Nearfall, most trips are done in a
          similar fashion, however we also have a team who will be with us
          several times throughout the year participating in local tournaments
          when the opportunities present themselves. If you are lucky, you may
          have the opportunity to meet one of our team members as a fill-in
          deckhand when needed. Each team member is unique in their own way,
          passionate for the sport, and eager to share some of their wisdom with
          the customers. All Nearfall team members have several years of
          experience on the local charter and head boats and are true
          professionals.
        </GlobalStyle.TextNormalIndent>

        <BackDrop className="mb-5 max-h-[600px]">
          <Image src={mitch} />
          <GlobalStyle.Container>
            <GlobalStyle.Title
              className="pb-5"
              style={{
                color: "lightgray",
                textDecoration: "none",
                fontSize: "22px",
              }}
            >
              Team Member Mitchell Paton
            </GlobalStyle.Title>
            <GlobalStyle.TextNormalIndent className="ps-3 pe-3">
              Mitchell is a Brick Town native and grew up working on the local
              head boats where he spent 6 years specializing in bottom fishing
              and fluke fishing. He has filled in on several charter boats
              locally and is a well rounded deckhand. Mitch enjoys fishing for
              just about anything, but if you asked him what his personal
              favorite is, bluefish and other high speed pelagics are at the top
              of his list. It is likely you’ll see Mitch on a weekend trip as he
              is currently studying for his Doctorate in Physical Therapy full
              time during the week.
            </GlobalStyle.TextNormalIndent>
          </GlobalStyle.Container>
        </BackDrop>

        <BackDrop className="mb-5 max-h-[600px]">
          <Image src={kluzner} />
          <GlobalStyle.Container>
            <GlobalStyle.Title
              className="pb-5"
              style={{
                color: "lightgray",
                textDecoration: "none",
                fontSize: "22px",
              }}
            >
              Deckhand Ryan Kluzner
            </GlobalStyle.Title>
            <GlobalStyle.TextNormalIndent className="ps-3 pe-3">
              Ryan is a lifelong resident in Brick, NJ and has 15 years
              experience in the New Jersey Charter and commercial fishing
              industries. Ryan specializes in back bay and inshore fishing for
              all species. He has also spent plenty of time in the mid-range and
              offshore canyons as well, targeting tuna, mahi and other
              blue-water pelagics. Whether you’re a first timer, or a seasoned
              veteran, Ryan has a wealth of knowledge that he is gladly willing
              to share if you’re willing to learn! He takes the time to show you
              the tactics and little hands-on tricks that can make a huge
              difference by the day’s end. On top of filling a cooler and
              enjoying a day on the open ocean, we like to see you improve as a
              fisherman and Ryan is one of the best to guide you along the way.
            </GlobalStyle.TextNormalIndent>
          </GlobalStyle.Container>
        </BackDrop>
      </Wrapper>
    </Container>
  );
};

export default Crew;
