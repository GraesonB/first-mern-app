// get libraries
const express = require("express");
const cors = require("cors");

// built dotenv config file
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5500; // use the port from process.env or 5000

// middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});


