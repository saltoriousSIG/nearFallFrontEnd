import React from "react";
import GlobalStyle from '../common/globalstyle/global.style';


const Contact = () => {
    return (
        <GlobalStyle.Container style={{paddingTop: '75px'}}>
            <GlobalStyle.Container style={{ maxWidth: '40%' }}>
                <GlobalStyle.Title>Belmar Manutti Marina</GlobalStyle.Title>
                <GlobalStyle.Text>Boat Address: 905 NJ-35, Belmar, NJ 07719.</GlobalStyle.Text>
                <GlobalStyle.Text>Slip J 2</GlobalStyle.Text>
                <GlobalStyle.Text>40' Topaz Express</GlobalStyle.Text>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2742434934494!2d-74.03153538469961!3d40.18070987939312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c227e202c1271f%3A0xc8b2beb9c0d03d94!2s905%20NJ-35%2C%20Belmar%2C%20NJ%2007719!5e0!3m2!1sen!2sus!4v1646195218368!5m2!1sen!2sus" width="600" height="550" allowfullscreen="" ></iframe>
            </GlobalStyle.Container>
            <GlobalStyle.Container style={{ maxWidth: '40%' }}>
                <GlobalStyle.Title>Broadway Basin</GlobalStyle.Title>
                <GlobalStyle.Text>Pt Pleasant Address: 47 Broadway Ave, Pt. Pleasant Beach, NJ 08742</GlobalStyle.Text>
                <GlobalStyle.Text>35' Donelle</GlobalStyle.Text>
                <iframe title='pt-pleasant-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.0!2d-74.0483!3d40.0921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c18a0ae8a0a0a1%3A0x1234567890abcdef!2s47%20Broadway%20Ave%2C%20Point%20Pleasant%20Beach%2C%20NJ%2008742!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" width="600" height="450" allowfullscreen=""></iframe>
            </GlobalStyle.Container>
            <GlobalStyle.Container style={{ maxWidth: '40%' }}>
                <GlobalStyle.Title>Lockwood Boat Works</GlobalStyle.Title>
                <GlobalStyle.Text>Raritan Bay Address: Lockwood Boat Works, 1825 Rt 35, South Amboy, NJ</GlobalStyle.Text>
                <GlobalStyle.Text>Raritan Bay Location from April 1st to May 15th yearly</GlobalStyle.Text>
                <iframe title='lockwood-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.5003562766738!2d-74.27119648482666!3d40.46419436067574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3cba6c126706f%3A0xd6574064c3c8abe4!2sLockwood%20Boat%20Works!5e0!3m2!1sen!2sus!4v1675210327400!5m2!1sen!2sus" width="600" height="450"  allowfullscreen=""></iframe>
            </GlobalStyle.Container>
            <GlobalStyle.Container style={{ maxWidth: '40%', padding: '75px' }}>
                {/* <iframe title='contact-form' src="https://docs.google.com/forms/d/e/1FAIpQLSefmLN78MVcFook-Eyi5ur2-R6HIaZZZcfVFrHPVKPP1yzZFg/viewform?embedded=true" width="640" height="947" frameborder="0">Loading…</iframe> */}
                <div class="ctct-inline-form" data-form-id="b4f46195-dbbe-40c1-a5fa-1d968e89de1d"></div>
            </GlobalStyle.Container>

        </GlobalStyle.Container>
    )
}

export default Contact;