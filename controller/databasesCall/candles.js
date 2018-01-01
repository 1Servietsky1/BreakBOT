const request = require('request') //node to facilitate http request
const entrypoint = require('./entryPoints')
const moment = require('moment') //convert bitfinex timestamp to date
const nano    = require('nano')('http://admin:12345@192.168.1.21:5984'); //connect to couchdb using id and password
const db_name  = nano.db.use('xrp_candles'); //couchdb database name

const reducer = (accumulator, currentValue) => accumulator + currentValue;

module.exports = {

//-------------------------------------------------------------
//call the bitfinex api, the get function is exported to the routes file
//-------------------------------------------------------------
get : function (url, currency){
  var mts; var open; var close; var high; var low; var volume; var date;

return new Promise(function(resolve, reject){
  request.get(url, currency,function (error, response, body) {
      var rep = JSON.parse(body);
      console.log("xrp candle : " + rep);
      var date = moment.unix(rep[1][0]/1000).format("YYYY-MM-DD HH:mm");
      var candle = {
        date: date,
        mts: rep[1][0],
        open: rep[1][1],
        close: rep[1][2],
        high: rep[1][3],
        low: rep[1][4],
        volume: rep[1][5]
        }
      resolve (candle)
    });
  })
},

//-------------------------------------------------------------
//save candles from bitfinex api to the database
//-------------------------------------------------------------
  save : function (candle) {
        return new Promise(function(resolve, reject) {
          db_name.insert({
            candle

          },function(err, body) {
               if (err) {
                 reject(err)
               }
               console.log( "candle saved");
               resolve(body)
            })
        });
      },

//-------------------------------------------------------------
//get candles from the database
//-------------------------------------------------------------
  ask : function(){
    return new Promise(function(resolve, reject){
      db_name.list({include_docs: true},function(err, body) {
      if (!err) {
        resolve(body.rows.reverse());
          }
        });
      })

    }

}
