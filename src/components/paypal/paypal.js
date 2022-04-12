import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import swal from 'sweetalert';
import { Button } from 'reactstrap';

const Paypal = (props) => {
    const {
        amount
    } = props;

    const [acceptPolicy, setAcceptPolicy] = useState(false);

    const handlePolicyAccept = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.innerHTML = 'Privacy Policy';
        link.setAttribute('href', 'https://www.nearfallfishingcharters.com/policies')
        swal(`Please confirm that you have reviewed our`, 'info', {
            buttons: ['Cancel', 'Confirm'],
            content: link
        }).then((confirm) => {
            if (confirm) { 
                setAcceptPolicy(true);
            }
        })
    }

    console.log(acceptPolicy)

    if (acceptPolicy) { 
        return (
            <PayPalScriptProvider options={{
                "client-id": "AUgmJJNkO3cRmnWl2gHs-Fho4sAOEPgIH2PXW2HQKaVDRpEZUZdciclNiAq-ip9MGmAQM2RCnbFPkiwI",
                components: "buttons",
                currency: "USD"
            }}>
    
    
                <PayPalButtons
                    createOrder={(data, actions) => {
    
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: amount
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                        });
                    }}
                  
                />
    
            </PayPalScriptProvider>
        )
    }
    return <Button className='btn btn-primary' onClick={handlePolicyAccept}>view/accept polcy</Button>
    
}

export default Paypal