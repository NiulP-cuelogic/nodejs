var http = require('http');
var express = require('express');
var app = require('./app');


const  port = 3000;

const server=  http.createServer(app);

server.listen(port);


