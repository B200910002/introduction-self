require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const connectDB = require("./database/connection");

//data base connection
connectDB();

//api
const API = require("./constant/api/Api");

//routes
const blockchain = require("./route/blockchainRoute");
const grade = require("./route/gradeRoute");

//uses
app.use(fileUpload());
app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//use api
app.use(API.blockchainAPI, blockchain);
app.use(API.gradeAPI, grade);

app.listen(process.env.PORT, () => {
  console.log(process.env.LOCAL_HOST_PORT);
});
