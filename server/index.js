const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(5010),
  () => {
    console.log("Server running in port 5010");
  };
