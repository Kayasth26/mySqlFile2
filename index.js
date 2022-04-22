const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const sqlconnect = require('./sqlconnect');
const bodyParser = require('body-parser');
require("dotenv").config();

app.use(bodyParser.json())
app.use(cookieParser());
app.use("/",require('./app/routes/route'))

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));