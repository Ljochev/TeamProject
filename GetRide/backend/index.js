const express = require("express");
require("dotenv").config();
require("./pkg/database/config");

const app = express();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is up on ${process.env.PORT}`);
});
