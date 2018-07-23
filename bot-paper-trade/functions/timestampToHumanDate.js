
var timestampToHumanDate = (timestamp)=>{
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(Date.now());

    //month part from the timestamp
    var month = date.getMonth();
    //day part from the timestamp
    var day = date.getUTCDate();
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = day+ '/'+ month + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}

module.exports = timestampToHumanDate;