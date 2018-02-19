var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);    



const url = require('url');
const myUrl = url.parse('http://localhost:8080/nacktschnecke');

var niul = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(myUrl.host);
    console.log('server started..')
    res.end(myUrl.pathname);
  }).listen(8080);      

