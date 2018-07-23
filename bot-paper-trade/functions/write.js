const fs = require('fs');

/**
 * write function write data from an array into a file
 * @param String path 
 * @param array data 
 * @returns void
 */
var write = (path, data)=>{
    var stream = fs.createWriteStream(path, {flags:'a'});
    stream.write(data + "\n");
    stream.end();
}

module.exports = write;

