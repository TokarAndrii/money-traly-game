const path = require("path");
var cors = require('cors');
const nodemailer = require('nodemailer');
const express = require('express')
const bodyParser = require('body-parser');
const mailOptions = require('./mailOptions');


const app = express();
app.use(bodyParser.json());
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const mailRouter = require('./mailRouter')
app.use('/sendmail', mailRouter);









app.listen(8080, () => console.log('app started at 8080'))