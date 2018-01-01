const express = require('express');
const router = require('./routes/routes');
const ejs = require('ejs');

const app = express();
const port = 3000;
var date = new Date().toISOString()  //gives a unique id
                      .replace(/T/, ' ')    // replace T with a space
                      .replace(/\..+/, '')     // delete the dot and everything after

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/',router);

app.listen(port);
console.log("launching trading bot on port "+ port + " at : " + date);
