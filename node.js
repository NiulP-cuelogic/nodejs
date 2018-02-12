const http = require('http');
const hostname = '127.0.0.1';
const fs = require('fs');

fs.readFile('index.html');
const port = 3000;

const server = http.createServer((req,res)=> {
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    res.end("hello");
});

server.listen(port,hostname,()=>{
    console.log("server started on port " + port);
}); 