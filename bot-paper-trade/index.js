const writeCandles = require('./functions/writeCandles');
const schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
rule.minute = 1;
 
var j = schedule.scheduleJob(rule, function(){
    writeCandles();
});


