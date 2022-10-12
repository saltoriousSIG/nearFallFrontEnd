const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: "*", credentials: true }));

//import routes
const payPal = require("./Routes/PayPal");

//express use json
app.use(express.json());
//express use cors
app.use(cors());

//route middlewares
app.use("/api/posts", payPal);

app.listen(5000, () => console.log("Express server is running."));
