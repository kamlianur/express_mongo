const express = require("express");
const path = require("path");
const app = express();

const connectDB = require("./Database");
connectDB();

const server = app.listen(process.env.PORT || 5000);
const portNumber = server.address().port;
console.log(`Server is running on port ${portNumber}`);