import React from "react";
import GlobalStyle from '../common/globalstyle/global.style';


const Contact = () => {
    return (
        <GlobalStyle.Container>
            <GlobalStyle.Container style={{maxWidth: '40%', padding: '75px'}}>
                <iframe title='contact-form' src="https://docs.google.com/forms/d/e/1FAIpQLSefmLN78MVcFook-Eyi5ur2-R6HIaZZZcfVFrHPVKPP1yzZFg/viewform?embedded=true" width="640" height="947" frameborder="0">Loading…</iframe>
            </GlobalStyle.Container>
            <GlobalStyle.Container style={{maxWidth: '40%'}}>
                <GlobalStyle.Title>Nearfall Fishing Charters</GlobalStyle.Title>
                <GlobalStyle.Text>Boat Address: 905 NJ-35, Belmar, NJ 07719.</GlobalStyle.Text>
                <GlobalStyle.Text>Slip J 2</GlobalStyle.Text>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2742434934494!2d-74.03153538469961!3d40.18070987939312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c227e202c1271f%3A0xc8b2beb9c0d03d94!2s905%20NJ-35%2C%20Belmar%2C%20NJ%2007719!5e0!3m2!1sen!2sus!4v1646195218368!5m2!1sen!2sus" width="600" height="550" allowfullscreen="" ></iframe>
            </GlobalStyle.Container>
        </GlobalStyle.Container>
    )
}

export default Contact;