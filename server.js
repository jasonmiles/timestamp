var express = require('express')
var app = express()

var port = process.env.PORT || 8080;

var monthNames = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December"
                 ];

app.get('/:date', function(req, res) {
    var userDate = req.params.date
    var unixTime = ""
    var naturalTime = ""
    if( (new Date(userDate*1000)).getTime()/1000|0 === userDate ) {
      userDate = new Date(userDate*1000)
      unixTime = (userDate.getTime()/1000|0).toString()
      naturalTime = monthNames[userDate.getMonth()] + ' ' + userDate.getDate() + ', ' + userDate.getFullYear()
    }
    else if( Date.parse(userDate) ) {
      userDate = new Date(userDate)
      unixTime = (userDate.getTime()/1000|0).toString()
      naturalTime = monthNames[userDate.getMonth()] + ' ' + userDate.getDate() + ', ' + userDate.getFullYear()
    }
    else {
      unixTime = "null"
      naturalTime = "null"
    }

    res.send({
              "unix": unixTime,
              "natural": naturalTime
             })

})

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
