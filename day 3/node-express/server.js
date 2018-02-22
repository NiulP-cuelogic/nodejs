var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var port  = 3000;
var mongo  = require('mongodb');

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/views/index.html"));
})

app.get("/about.html",function(req,res){
    res.sendFile(path.join(__dirname+"/views/about.html"));
})

app.listen(3000);

console.log("server running at port " + port);

module.exports = app;