require("dotenv").config();

const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const router = require("./routes/email.route");


const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", router)

module.exports = app;
