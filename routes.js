const express = require ('express');
const router = express.Router();
const controller = require('../controller/controller')

const intervalHour = 1000 * 60 * 60

controller()
setInterval(function(){
controller()
}, intervalHour);

module.exports = router;
