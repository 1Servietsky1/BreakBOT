const request = require('request') //node to facilitate http request
const nano    = require('nano')('http://admin:12345@192.168.1.21:5984'); //connect to couchdb using id and password
const ema10  = nano.db.use('xrp_ema10'); //couchdb database name
const bitfinex_candles_history  = nano.db.use('bitfinex_candles_history'); //couchdb database name
var nonce = new Date().toISOString()  //gives a unique id
                      .replace(/T/, ' ')    // replace T with a space
                      .replace(/\..+/, '')     // delete the dot and everything after

module.exports = {

lastEma : function (){
  return new Promise(function(resolve, reject){
    ema10.list({include_docs: true}, function(err, body) {
      var array = body.rows.reverse()
      resolve(array[1].doc.ema)
      });
    })
  },

  save : function (result) {
      return new Promise(function(resolve, reject) {
        ema10.insert({
          ema: result,
          date: nonce
        },function(err, body) {
             if (err) {
               reject(err)
             }
             console.log( "ema10 saved");
             resolve(body)
          })
      });
    }

}
