import React from 'react';
import GlobalStyle from '../common/globalstyle/global.style';
import captainJoe from '../../assets/img/elcaptain.jpeg';
import deckhand1 from '../../assets/img/deckhand1.jpeg';
import deckhand2 from '../../assets/img/deckhand2.jpeg';
import styled from 'styled-components';
import mitch from '../../assets/img/bigmitch.jpeg';
import ant from '../../assets/img/antfiore.jpeg';
import pete from '../../assets/img/petefiore.jpeg';
import facas from '../../assets/img/facas.jpeg';
import dzug from '../../assets/img/dzug.jpeg';
import woj from '../../assets/img/woj.jpeg';

import { Row } from 'reactstrap';

const Image = styled(GlobalStyle.Image)`
  height: 450px;
  width: 400px;
`;

const Container = styled(GlobalStyle.Container)`
  padding-top: 120px;
`;

const TextNormalIndent = styled(GlobalStyle.TextNormalIndent)`
  max-width: 75%;
`;

const BackDrop = styled.div`
    background-color:rgba(255, 255, 255, 0.1);
    min-height: 820px;
    height: fit-content;
    box-shadow: 1px 5px 5px black;
    padding: 15px;
    border-radius:8px;
    display:flex;
    flex-direction: column;
    width:45%;
    justify-content:center;
    align-items:center;
    margin: 0 auto;
    @media all and (max-width: 1024px){
        width: 90%;
        margin: auto;
    } 
`;

const BackDrop1 = styled.div`
    background-color:rgba(255, 255, 255, 0.1);
    height: auto;
    box-shadow: 1px 5px 5px black;
    padding: 15px;
    border-radius:8px;
    display:flex;
    flex-direction:row;
    width:85%;
    justify-content:center;
    align-items:center;
    margin: 20px auto;
    @media all and (max-width: 1024px){
        display:flex;
        flex-direction:column;
        margin:auto;
    } 

`

const Wrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    align-items:flex-start;
    justify-content:flex-start;
    @media all and (max-width: 1024px){
        flex-direction:column;
        margin:auto;
    } 

`

const Crew = () => {
    return (
        <Container>
            <GlobalStyle.Title >The NearFall Crew</GlobalStyle.Title>
            <TextNormalIndent>
                You can’t have a successful fishing boat without a dedicated and friendly crew. We pride ourselves on making your experience enjoyable and sending you home feeling like you are a part of the Nearfall family. The Nearfall Team is loaded with experience and ready to bring you the best fishing experience on every trip. Each Captain and Deckhand’s knowledge of fishing and the local fishing will not only make your day easier and maximize your time at the rail, but you will also leave your charter as a better fisherman. We all look forward to having you aboard!
            </TextNormalIndent>

            <BackDrop1>
                <Image src={captainJoe} />
                <GlobalStyle.Container>
                    <GlobalStyle.Title style={{ color: 'white' }}>
                        Captain Joe Paton
                    </GlobalStyle.Title>
                    <GlobalStyle.TextNormal>
                        US Coast Guard Licensed 100 Ton Master Captain
                    </GlobalStyle.TextNormal>
                    <GlobalStyle.TextNormalIndent>
                        Capt. Joe has been working on fishing boats since he was 15 years old and has been fishing the NJ waters since he was 5. He spent 10 years working as deckhand aboard the Dauntless out of Pt. Pleasant, NJ and has been a USCG Licensed 100 Ton Master Captain for 7 years. During his time as a young captain he trained under the direct tutelage of Captain Butch Egerter who has fished the Jersey Coast for over 50 years. Over the years, Joe has spent time running head boats and local charter boats. Capt. Joe is a man on a mission and that mission is to get you on productive fishing grounds and to see the joy in a customer's face when they've landed a personal best fish or landed something they have never seen before.  Filling a cooler to bring home for dinner is always on the to-do list and by days end you will have your fair share, but what really brings pride to Joe is the seeing someone grow as a fisherman and giving the customer an experience that elicits the same obsession that took over Joe at a young age.
                    </GlobalStyle.TextNormalIndent>
                </GlobalStyle.Container>
            </BackDrop1>

            <BackDrop1>
                <GlobalStyle.Container>
                    <GlobalStyle.Container className='row'>
                        <Image src={deckhand1} />
                        <Image src={deckhand2} />
                    </GlobalStyle.Container>
                    <GlobalStyle.Container>
                        <GlobalStyle.Title style={{ color: 'lightgray', textDecoration: 'none', fontSize: '22px' }}>
                            Captain/Deckhand Mike Gudewitz,
                        </GlobalStyle.Title>
                        <GlobalStyle.Title className='pb-5' style={{ color: 'lightgray', textDecoration: 'none', fontSize: '22px' }}>
                            Deckhand Justin Gudewitz
                        </GlobalStyle.Title>

                        <GlobalStyle.TextNormalIndent className='ps-3 pe-3'>
                            Mike is no stranger to the Atlantic Ocean and local bottom fishing grounds. With over 25 years of experience on well respected head boats and charter boats, Capt Mike has the ability to get you on the meat. Over the years, Mike has become well versed in inshore and offshore bottom fishing, as well as targeting Striped Bass and Bluefish. Mike prides himself on being a people person and looks forward to meeting you. Next to Mike, youll notice our deckhand in training, Justin. Justin is Mike’s son and has been joining Mike on trips anytime he can . At just 8 years old, you will be impressed by what this young boy can do. If your charter has the space and Mike is on board, you might get the opportunity to meet our up and coming fishing expert.
                        </GlobalStyle.TextNormalIndent>
                    </GlobalStyle.Container>
                </GlobalStyle.Container>


            </BackDrop1>

            <Wrapper>

                <GlobalStyle.Title style={{ color: 'white' }}>Team Members</GlobalStyle.Title>
                <GlobalStyle.TextNormalIndent className='ps-5 pe-5 ms-5 me-5 pb-5 pt-3'>
                    As is common on most charter boats, you have a couple steady deckhands to work the deck and a captain or two that reliably puts people on the fish day-in and day-out. On the Nearfall, most trips are done in a similar fashion, however we also have a team who will be with us several times throughout the year participating in local tournaments when the opportunities present themselves. If you are lucky, you may have the opportunity to meet one of our team members as a fill-in deckhand  when needed. Each team member is unique in their own way, passionate for the sport, and eager to share some of their wisdom with the customers. All Nearfall team members have several years of experience on the local charter and head boats and are true professionals.
                </GlobalStyle.TextNormalIndent>

                <BackDrop className='mb-5'>
                    <Image src={mitch} />
                    <GlobalStyle.Container>
                        <GlobalStyle.Title className='pb-5' style={{ color: 'lightgray', textDecoration: 'none', fontSize: '22px' }}>
                            Deckhand/Team Member Mitchell Paton
                        </GlobalStyle.Title>
                        <GlobalStyle.TextNormalIndent className='ps-3 pe-3'>
                            Mitchell is a Brick Town native and grew up working on the local head boats where he spent 6 years specializing in bottom fishing and fluke fishing. He has filled in on several charter boats locally and is a well rounded deckhand. Mitch enjoys fishing for just about anything, but if you asked him what his personal favorite is, bluefish and other high speed pelagics are at the top of his list.  It is likely you’ll see Mitch on a weekend trip as he is currently studying for his Doctorate in Physical Therapy full time during the week.
                        </GlobalStyle.TextNormalIndent>
                    </GlobalStyle.Container>
                </BackDrop>

                <BackDrop className='mb-5'>
                    <Image src={ant} />
                    <GlobalStyle.Container>
                        <GlobalStyle.Title className='pb-5' style={{ color: 'lightgray', textDecoration: 'none', fontSize: '22px' }}>
                            Deckhand/Team Anthony Fiore
                        </GlobalStyle.Title>
                        <GlobalStyle.TextNormalIndent className='ps-3 pe-3'>
                            Although the second and younger of the two brothers, Anthony is no stranger to the ocean and  his knowledge for fishing is substantial. As a Toms River native, Anthony, much like his brother Pete, has been fishing since the young age of four years old, perfecting his skills in the Barnegat bay and local ocean bottom.  Anthony spent 6 years specializing in bottom fishing, fluke, and blackfish aboard head boats departing from Pt Pleasant Beach. Anthony is also a union Laborer and looks forward to joining us on the weekends.
                        </GlobalStyle.TextNormalIndent>
                    </GlobalStyle.Container>
                </BackDrop>

                <BackDrop className='mb-5'>
                    <Image src={pete} />
                    <GlobalStyle.Container>
                        <GlobalStyle.Title className='pb-5' style={{ color: 'lightgray', textDecoration: 'none', fontSize: '22px' }}>
                            Deckhand/Team Peter Fiore
                        </GlobalStyle.Title>
                        <GlobalStyle.TextNormalIndent className='ps-3 pe-3'>
                            Pete is one of the Fiore brothers who is well known to the area. Pete spent several years on head boats and charter boats out of the Point Pleasant area. Over the years, Pete was able to gain well-rounded experience learning from some of the best. Pete can reliably target anything from striped bass and bottom fishing to deep water pelagics in the offshore canyons. With all of his experience, he will soon be studying for his USCG captains license. Pete is now a Union laborer and will be seen on the weekends, especially when targeting tuna, shark and blackfish.
                        </GlobalStyle.TextNormalIndent>
                    </GlobalStyle.Container>
                </BackDrop>

                <BackDrop className='mb-5'>
                    <Image src={facas} />
                    <GlobalStyle.Container>
                        <GlobalStyle.Title className='pb-5' style={{ color: 'lightgray', textDecoration: 'none', fontSize: '22px' }}>
                            Deckhand/Team Matthew Facas
                        </GlobalStyle.Title>
                        <GlobalStyle.TextNormalIndent className='ps-3 pe-3'>
                            You will not meet a person more passionate about the sport of fishing than Nearfall team member, Matt Facas, especially when it comes to striped bass fishing. Matt is a Manasquan native and has been fishing the local surf and rivers since he was 4 years old. Matt’s knowledge of Striped Bass and other pelagic species makes him an asset to the team. Over the last several years, he has had the opportunity to work deck on a couple head boats targeting bottom fish and fluke. Matt is a Medical Doctor and works in the hospital. When he gets a day off, you may have the opportunity to learn from him on your next trip.
                        </GlobalStyle.TextNormalIndent>
                    </GlobalStyle.Container>
                </BackDrop>

                <BackDrop className='mb-5'>
                    <Image src={dzug} />
                    <GlobalStyle.Container>
                        <GlobalStyle.Title className='pb-5' style={{ color: 'lightgray', textDecoration: 'none', fontSize: '22px' }}>
                            Deckhand/Team Anthony Dzugan
                        </GlobalStyle.Title>
                        <GlobalStyle.TextNormalIndent className='ps-3 pe-3'>
                            As another Brick Township native, Anthony has had easy access to the ocean and rivers. Introduced to the sport in grade school,  Anthony developed his skills and is a quality fisherman. He has spent time working deck for head boats out of Belmar NJ where he specialized in Bluefish and Striped Bass. Anthony is one of those guys that finds true joy in just getting out on the ocean, taking in the salty air and fishing for anything that will bend the rod. You will be able to meet Anthony on a trip periodically when he is off from his day job as a State Officer.
                        </GlobalStyle.TextNormalIndent>
                    </GlobalStyle.Container>
                </BackDrop>

                <BackDrop className='mb-5'>
                    <Image src={woj} />
                    <GlobalStyle.Container>
                        <GlobalStyle.Title className='pb-5' style={{ color: 'lightgray', textDecoration: 'none', fontSize: '22px' }}>
                            Deckhand/Team Daniel Wojtaszek
                        </GlobalStyle.Title>
                        <GlobalStyle.TextNormalIndent className='ps-3 pe-3'>
                            Dan is yet another Brick Township native who has spent many years on the ocean honing his skills as a fisherman. In high school and college, Dan spent a number of years working on head boats out of Belmar, specializing in Fluke, Striped Bass and Bluefish. Dan is someone who emphasizes the importance of trying new things and experiences and lives by that principal. ‘Wojo’ as his friends commonly refer to him as, is now a well rounded fisherman because of all of the unique fishing trips that he takes regularly up and down the coast.
                        </GlobalStyle.TextNormalIndent>
                    </GlobalStyle.Container>
                </BackDrop>
            </Wrapper>
        </Container>
    )
}

export default Crew;