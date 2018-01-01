const entrypoint = require('../controller/publicEndPoints/entryPoints')

var TimeFrame = '1h'
var symbol = 'tBTCUSD'
var section = 'hist'
var limit = 2

const currency = entrypoint.currency.btc
const url = ('https://api.bitfinex.com/v2/candles/trade:' + TimeFrame + ':' + symbol + '/' + section)
