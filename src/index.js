require("dotenv").config({ path: "./env" })
const express = require("express");
const connectDB = require("./db/index.js");

const app = express();
connectDB();


app.listen(process.env.PORT, () => {
    console.log("Listening on port 8000")
})


