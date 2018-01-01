const ema21Data = require('./ema21Data')
const candle = require('./candles')

var numberOfCandles = 21;
var variation;
var multiplyOne;
var multiplyTwo;

function one(){
  return new Promise(function(resolve, reject){
    candle.ask()
        .then(function(result){
          variation = (2/(numberOfCandles+1))
          var lastPrice = result[1].doc.candle.close
          console.log("last closing price ema21 : " + lastPrice);
          multiplyOne = lastPrice * variation
          resolve (multiplyOne)
        })
    })
};

function two(){
  return new Promise(function(resolve, reject){
    ema21Data.lastEma()
      .then(function(result){
        multiplyTwo = result*(1-variation)
        resolve (multiplyTwo)
      })
  })
};

function three() {
  return new Promise(function(resolve, reject){
    var ema = multiplyOne+multiplyTwo
    console.log("EMA21 = " + ema);
    resolve(ema)
  })
};


 var ema21 = function () {
      one()
      .then(function(result){
        return two(result)
      })
      .then(function(result){
        return three(result)
      })
      .then(function(result){
        return ema21Data.save(result)
      })
}

module.exports = ema21
