const express = require ('express');
const router = express.Router();
const entrypoint = require('./entryPoints')
const candle = require('./candles');
const ema21 = require('./ema21');
const ema10 = require('./ema10');

//-----------------------------------
//This file use the fonctions from Candle and ema10/21Data, and synchronise it to save candle, then calculate ema10 and ema21 and then save it to the database
//-----------------------------------


var TimeFrame = '1h'
var symbol = 'tXRPUSD'
var section = 'hist'
var limit = 2

const currency = entrypoint.currency.btc
const url = ('https://api.bitfinex.com/v2/candles/trade:' + TimeFrame + ':' + symbol + '/' + section)
const intervalHour = 1000 * 60 * 60
//-----------------------------------
//first call before start the 1h00 time out
//-----------------------------------
var saveToDatabases = function(){
  candle.get(url,{qs:{'limit':limit}})
  .then(function(result){
    candle.save(result)
  }).then (function(result){
    setTimeout(ema21, 5000)//5 sec before the ema21 function is launched to let the database some time to get refreshed in order to have the latest closing price
    setTimeout(ema10,5000)
  })
  .then(function(result){
    setInterval(function(){
      candle.get(url,{qs:{'limit':limit}})
      .then(function(result){
        candle.save(result)
      }).then (function(result){
        setTimeout(ema21, 5000)
        setTimeout(ema10,5000)
      })
    }, intervalHour);
  })
}
module.exports = saveToDatabases;
