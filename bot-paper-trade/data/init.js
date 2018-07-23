var crypto  = "BTC-EUR"
var baseUrl = "https://api.pro.coinbase.com";
var uri = "/products/"+ crypto +"/candles";

var url = baseUrl + uri;

module.exports = 
{
    infos: {
        crypto: crypto,
        data: "./data/data.csv"
    },
    options : {
        url: url,
        headers:{'User-Agent': 'ua'}
    }
}