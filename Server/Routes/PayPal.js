const router = require("express").Router();
const { trips } = require("../utils/tripsObject");
require("dotenv").config();
const paypal = require("@paypal/checkout-server-sdk");
const Environment =
  process.env.NODE_ENV === "production"
    ? paypal.core.LiveEnvironment
    : paypal.core.SandboxEnvironment;
const paypalClient = new paypal.core.PayPalHttpClient(
  new Environment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
  )
);

router.post("/paypal", async (req, res) => {
  const request = new paypal.orders.OrdersCreateRequest();

  let selectedTrip = trips.find((element) => {
    return element.id === req.body.id;
  });

  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: selectedTrip?.price.deposit,
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: selectedTrip?.price.deposit,
            },
          },
        },
        items: [
          {
            name: selectedTrip?.name,
            unit_amount: {
              currency_code: "USD",
              value: selectedTrip?.price.deposit,
            },
            quantity: 1,
          },
        ],
      },
    ],
  });

  try {
    const order = await paypalClient.execute(request);
    console.log(order, "our order");
    res.status(200).json({ payload: order.result.id });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: err });
  }
});

module.exports = router;
