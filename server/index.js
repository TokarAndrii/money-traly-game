const path = require("path");
var cors = require('cors');
const nodemailer = require('nodemailer');
const express = require('express')
const bodyParser = require('body-parser');
const mailOptions = require('./mailOptions');


const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const mailRouter = require('./routes/mailRouter');
app.use('/api/v1/sendmail', mailRouter);

const newsRouter = require('./routes/newsRouter');
app.use('/api/v1/news', newsRouter);









app.listen(8080, () => console.log('app started at 8080'))