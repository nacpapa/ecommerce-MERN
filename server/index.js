const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require("cors");
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("DB connection success");
  })
  .catch((error) => {
    console.log(error);
  });
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5010),
  () => {
    console.log("Server running in port 5010");
  };
