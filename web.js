var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buf = new Buffer(256);
buf = fs.readFileSync('./index.html');
var string = buf.toString('utf8',0,27);

//console.log(string);

app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
