const ema10Data = require('./ema10Data')
const candle = require('./candles')

var numberOfCandles = 10;
var variation;
var multiplyOne;
var multiplyTwo;

function one(){
  return new Promise(function(resolve, reject){
      candle.ask()
        .then(function(result){
          variation = (2/(numberOfCandles+1))
          var lastPrice = result[1].doc.candle.close
          console.log("last closing price ema10 : " + lastPrice);
          multiplyOne = lastPrice * variation
          resolve (multiplyOne)
        })
    })
};

function two(){
  return new Promise(function(resolve, reject){
    ema10Data.lastEma()
      .then(function(result){
        multiplyTwo = result*(1-variation)
        resolve (multiplyTwo)
      })
  })
};

function three() {
  return new Promise(function(resolve, reject){
    var ema = multiplyOne+multiplyTwo
    console.log("EMA10 = " + ema);
    resolve(ema)
  })
};


var ema10 = function () {

    one()
    .then(function(result){
      return two(result)
    })
    .then(function(result){
      return three(result)
    })
    .then(function(result){
      return ema10Data.save(result)
    })

}

module.exports = ema10
