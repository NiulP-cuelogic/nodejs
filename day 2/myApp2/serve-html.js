var http = require('http');

var host = '127.0.0.1';
var fs  = require('fs');
var port= 3000;

var server  = http.createServer((req,res)=>{
        console.log('server started');
        res.writeHead(200,{'Content-type':'text/html'});
        // fs.readFile('idex.html',length)
})

server.listen(3000);