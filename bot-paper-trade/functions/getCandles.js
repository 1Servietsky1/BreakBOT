var request = require('request');

/**
 * getCandles function call a cryptoCurrency exchange api endpoint
 * @param {*} (JSON object, to be customized in ../data/init.js) 
 * @return Promise {float} 
 * @Reject {error} if an error occur
 */
module.exports = function getCandles(options) {
    return new Promise ((resolve, reject)=>{
        request.get(options, (err, resp, body)=>{
            var result = JSON.parse(body);                        
            resolve(result[result.length-1]); //get the last item of the array
            if (err){
                reject(err);
            }
        });
    })

};


