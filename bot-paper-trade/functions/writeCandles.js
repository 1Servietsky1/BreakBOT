const getCandles = require('./getCandles');
const init = require('../data/init');
const write = require('./write');
const timestampToDate = require('./timestampToHumanDate');

var writeCandles = ()=>{
    //call the crypto exchange API
    getCandles(init.options).then((result, err)=>{
        
        var date = timestampToDate(result[0]);
   
        result[0] = date;
        console.log(result);

        //empty variable to be used in the below forEach loop
        var candles = "";

        //convert the response into csv format
        result.forEach(element => {           
            var elementToString = JSON.stringify(element);          
            var elementCsvFormated = elementToString.replace('.', ',');
            candles += elementCsvFormated + ";";
        });

        //write the response of the cryto exchange in the csv
        write(init.infos.data, candles);
    });
}


module.exports = writeCandles;