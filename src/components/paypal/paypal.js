import React, { useState, useEffect, useMemo, useCallback } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import swal from "sweetalert";
import { Button } from "reactstrap";
import styled from "styled-components";
import axios from "axios";

const ActionButton = styled(Button)`
  background-color: #017bfe;
`;

const Paypal = (props) => {
  const { pageData } = props;

  const url = useMemo(() => {
    if (process.env.REACT_APP_ENVIRONMENT === "development")
      return "http://localhost:5000/api/paypal";
    return "https://nearfall-paypal.herokuapp.com/api/paypal";
  }, [process.env.REACT_APP_ENVIRONMENT]);

  const baseUrl = useMemo(() => {
    if (process.env.REACT_APP_ENVIRONMENT === "development")
      return "http://localhost:5000";
    return "https://nearfall-paypal.herokuapp.com";
  }, [process.env.REACT_APP_ENVIRONMENT]);

  console.log(props.id);

  useEffect(() => {
    window.paypal
      .Buttons({
        // Sets up the transaction when a payment button is clicked
        createOrder: () => {
          return axios
            .post(url, {
              id: props.id,
            })
            .then((res) => {
              return res.data.payload;
            })
            .catch((e) => {
              console.error(e.error);
            });
        },
        // Finalize the transaction after payer approval
        onApprove: (data, actions) => {
          return actions.order.capture().then(function (orderData) {
            // Successful capture! For dev/demo purposes:
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2)
            );
            const transaction =
              orderData.purchase_units[0].payments.captures[0];
            alert(
              `Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`
            );
            axios.post(`${baseUrl}/api/formData`, {
              ...pageData,
            });
          });
        },
      })
      .render("#paypal-button-container");
  });

  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const handlePolicyAccept = useCallback(
    (e) => {
      e.preventDefault();
      if (!pageData.name || !pageData.email || !pageData.phone)
        return swal("Error", "You forgot to enter something!", "error");
      if (!pageData.scheduledDate)
        return swal("Error", "You forgot to select a date!", "error");
      const link = document.createElement("a");
      link.innerHTML = "Boat Policy";
      link.setAttribute(
        "href",
        "https://www.nearfallfishingcharters.com/policies"
      );
      swal("", `Please confirm that you have reviewed our`, "info", {
        buttons: ["Cancel", "Confirm"],
        content: link,
      }).then(async (confirm) => {
        if (confirm) {
          setAcceptPolicy(true);
        }
      });
    },
    [pageData]
  );

  if (acceptPolicy) {
    return (
      <div>
        <div id="paypal-button-container"></div>
      </div>
    );
  }
  return (
    <ActionButton className="btn btn-primary" onClick={handlePolicyAccept}>
      View/Accept policy
    </ActionButton>
  );
};

export default Paypal;
