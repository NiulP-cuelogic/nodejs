var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var mongoose  = require('mongoose');
var bodyParser = require('body-parser');
var path =  require('path');


app.use(express.static(path.resolve(__dirname+'/public')))
app.use(bodyParser.urlencoded({extended:false}));

app.listen(3000);


