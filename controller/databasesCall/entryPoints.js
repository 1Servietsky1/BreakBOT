
module.exports = {
  currency : {
    btc: 'bitcoin',
    ltc: 'litecoin',
    eth: 'ether',
    zec: 'Zcash',
    dsh: 'Dash'
  },
  ticker : {
  ltc: 'https://api.bitfinex.com/v1/pubticker/ltcusd',
  btc: 'https://api.bitfinex.com/v1/pubticker/btcusd',
  eth: 'https://api.bitfinex.com/v1/pubticker/ethusd',
  zec: 'https://api.bitfinex.com/v1/pubticker/zecusd',
  dsh: 'https://api.bitfinex.com/v1/pubticker/dshusd'
  },
  candles : {
    btc : 'https://api.bitfinex.com/v2/candles/trade::TimeFrame::Symbol/Section'
  }

}
