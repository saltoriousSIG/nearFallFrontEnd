import React from "react";
import GlobalStyle from '../common/globalstyle/global.style';
import styled from 'styled-components';

const UL = styled.ul`
    li {
        color: white;
        font-family: 'Poppins', sans-serif;
        letter-spacing:0.7px;
    }
`;

const Attention = styled.span`
  font-weight: 700;
  text-decoration: underline;
`;


const Container = styled(GlobalStyle.Container)`
  margin-top: 100px !important;
`;


const Policies = () => {
    return (
        <Container className='mt-5'>
            <GlobalStyle.Title> Policies &#38; What to bring </GlobalStyle.Title>
            <GlobalStyle.Jumbotron>
                <GlobalStyle.Container style={{ alignItems: 'flex-start' }}>
                    <GlobalStyle.Title style={{ color: 'white' }}>
                        Charters
                    </GlobalStyle.Title>
                    <UL>
                        <li>
                            Charter rates refer to the price of the boat and not the price per person. The person who formally books the trip is considered the ‘Charter Master’ and will be responsible for filling the boat with as many people as possible (up to 6 people). Depending on how many passengers are in the group determines the price per person. Price of the boat does not change if the charter master is unable to fill all 6 spots for the trip.
                        </li>
                        <li>
                            When booking a charter, <Attention>filling the boat and payment</Attention> is the charter masters responsibility. Please advise your crew as needed.
                        </li>
                        <li>
                            On occasion, we have the ability to  fill some spots for charters that  struggle to reach a crew of 6 people. We are always willing to help fill your trip, however, we can't guarantee it is always possible.
                        </li>
                        <li>
                            If the charter master is unable to fill 6 spots, they may ask for the office’s help to fill the trip with people. If the office is unable to fill the remaining spots, the charter master is still fully responsible for the FULL balance remaining for the trip.
                        </li>
                    </UL>
                </GlobalStyle.Container>
                <GlobalStyle.Container style={{ alignItems: 'flex-start' }}>
                    <GlobalStyle.Title style={{ color: 'white' }}>
                        Charter Deposit/Balances
                    </GlobalStyle.Title>
                    <UL>
                        <li>
                            When making a deposit online, you will book the date and submit the payment which is sent to our email account. There may be a delay in updating the calendar and on rare occasions, there may be a double booking. In the event a double booking occurs, the trip will go to the charter who booked first. You will be called ASAP if a double booking happens to occur to reschedule.
                        </li>
                        <li>
                            A $200 deposit is required for all inshore trips. For all shark, tuna, and mahi and meat charters, a deposit of $400 is required. In the event of cancellation of the trip, the deposit may be used for another specialty trip or split for 2 inshore trips.
                        </li>
                        <li>
                            Deposits Are NON-Refundable. If the trip is canceled, the deposit will be applied to your next trip or for a rescheduled date. If the deposit is not used in that calendar year, it will be carried over to the next year.
                        </li>
                        <li>
                            Deposits are to be paid on the day of booking via Nearfallfishingcharters.com
                        </li>
                        <li>
                            Balances are to be paid in CASH on the day of the trip by the charter master
                            <li>
                                All cash from the customers on the days trip is to be given to the charter master
                            </li>
                            <li>
                                The full cash balance will be given to the captain from the charter master ONLY
                            </li>
                        </li>
                        <li>
                            All charter rates do not include a customary 20% tip for the deckhand. Our mates work extremely hard to make your trip a success. Similar to a waiter when going out to eat at a restaurant, your deckhand provides you a service to make your day easy and enjoyable. Unlike the waiter or waitress that you’d give 20% of your meal cost for an hour of their service, our deckhands take care of you all day long. Starting with getting your gear on the boat and ending with the cleaning and packaging of your catch, the deckhand’s role is essential to a successful trip
                        </li>
                    </UL>
                </GlobalStyle.Container>
                <GlobalStyle.Container style={{ alignItems: 'flex-start' }}>
                    <GlobalStyle.Title style={{ color: 'white' }}>
                        Charter Cancellations and Weather
                    </GlobalStyle.Title>
                    <UL>
                        <li>
                            Safety is our number one concern and we will be constantly monitoring weather up to the day of the trip. The trip’s captain will review the forecast and the office will confirm all charters 24 hours prior to departure. If the weather is questionable for your charter, the final call will be made the evening before the charter by 6pm. The charter master  is responsible for letting the remainder of the crew know about weather decisions.
                        </li>
                        <li>
                            <Attention> Cancellation of any charter is the decision of our Captain, not the customer</Attention>
                        </li>
                        <li>
                            Cancellations due to weather will be rescheduled to a later date agreeable by both the captain and charter master
                        </li>

                    </UL>
                </GlobalStyle.Container>
                <GlobalStyle.Container style={{ alignItems: 'flex-start' }}>
                    <GlobalStyle.Title style={{ color: 'white' }}>
                        Gas Surcharge
                    </GlobalStyle.Title>
                    <UL>
                        <li>
                            Unfortunately, due to the considerable increase in gas prices, your charter may be subject to a gas surcharge
                        </li>
                        <li>
                            We will keep the surcharge fair for you and your party and will only increase the price based on the prices of fuel that week; price of fuel can vary from week to week
                        </li>
                        <li>
                            Please bare with us while we deal with these inflated expenses; we look forward to having you out with us
                        </li>
                        <li>
                            If a gas surcharge needs to be applied, you will be made aware 24 hours before the day of the trip
                        </li>
                    </UL>
                </GlobalStyle.Container>
                <GlobalStyle.Container style={{ alignItems: 'flex-start' }}>
                    <GlobalStyle.Title style={{ color: 'white' }}>
                        What to Bring
                    </GlobalStyle.Title>
                    <UL>
                        <li>
                            Your Favorite rod, reel and tackle (please limit to 2 rods per person)
                        </li>
                        <li>
                            We have spinning and conventional rod/reel set ups free to use on charters
                        </li>
                        <li>
                            You will be fully responsible for the rod and reel at the rail
                            <GlobalStyle.Container style={{ alignItems: 'flex-start', marginLeft: '10px' }}>
                                <Attention>$400 for lost rod and reel</Attention>
                            </GlobalStyle.Container>
                        </li>
                        <li>
                            During shark and tuna trips, if a customer is at fault for a lost rod and reel, the user is responsible for the replacement fee
                            <GlobalStyle.Container style={{ alignItems: 'flex-start', marginLeft: '10px' }}>
                                <Attention>$800 for lost rod and reel (tuna/shark rod)</Attention>
                            </GlobalStyle.Container>
                        </li>
                        <li>
                            PLEASE PAY ATTENTION AND HOLD ON TIGHT, no one on board wants to see the rod go overboard
                        </li>
                        <li>
                            Coolers should be brought and left in the car to take home the day’s catch. While on the water we will store your catch in our ice boxes.
                        </li>
                        <li>
                            Customers are permitted to bring their own food and beverages and we advise smaller coolers for carry-on

                        </li>
                        <li>
                            When bringing food, we advise pre-packaged meals and sandwiches

                        </li>
                        <li>
                            Beer is allowed in moderation
                        </li>
                        <li>
                            Wine and hard liquor is not permitted
                        </li>
                        <li>
                            Intoxication andr reckless behavior will bring an end to the trip with no refund.
                        </li>
                        <li>
                            If a party member becomes intoxicated as determined by the Captain, the boat will return to the dock without any refund.
                        </li>
                        <li>
                            Always dress in layers, the mornings and evenings are always cooler than you expect
                        </li>
                        <li>
                            Shoe wear: non-marking, non-skid, sneakers/ boat shoes/deck boots
                        </li>
                        <li>
                            Children 12 and under must wear a life jacket (USCG regulation)
                        </li>
                        <li>
                            If you are prone to motion sickness, please take medication before the trip if it's needed
                            <GlobalStyle.Container style={{ alignItems: 'flex-start', marginLeft: '10px' }}>
                                <Attention>Scapolamine</Attention>
                                <Attention>Dramamine</Attention>
                            </GlobalStyle.Container>
                        </li>
                    </UL>
                </GlobalStyle.Container>
                <GlobalStyle.Container style={{ alignItems: 'flex-start' }}>
                    <GlobalStyle.Title style={{ color: 'white' }}>
                        What not to Bring
                    </GlobalStyle.Title>
                    <UL>
                        <li>
                            Firearms or knives
                        </li>
                        <li>
                            Marijuana or illicit drugs of any kind
                        </li>
                        <li>
                            Offenses will be reported to the Coast Guard
                        </li>
                        <li>
                            Bananas, Sunflower seeds
                        </li>
                        <li>
                            Glass bottles
                        </li>
                        <li>
                            A Bad attitude!
                        </li>
                    </UL>
                </GlobalStyle.Container>
            </GlobalStyle.Jumbotron>
        </Container>
    )
}

export default Policies