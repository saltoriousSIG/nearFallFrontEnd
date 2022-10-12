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

  let selectedTrip = {};

  trips.forEach((element) => {
    if (element.id === req.body.id) {
      selectedTrip = {
        deposit: element.price.deposit,
        balance: element.price.balance,
        total: element.price.balance + element.price.deposit,
        id: element.id,
        name: element.name,
      };
    }
  });

  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: selectedTrip?.deposit,
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: selectedTrip?.total,
            },
          },
        },
        items: {
          name: selectedTrip?.name,
          unit_amount: {
            currency_code: "USD",
            value: selectedTrip?.total,
          },
        },
      },
    ],
  });

  try {
    const order = await paypalClient.execute(request);
    console.log(order, "our order");
    res.json({ id: order.result.id });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ success: false, data: err });
  }
});

module.exports = router;
