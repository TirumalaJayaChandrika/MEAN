var http = require('http');
var dt = require('./myFirstModule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<p style = 'font-size:25px;color:blue;font-weight:bold'The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);