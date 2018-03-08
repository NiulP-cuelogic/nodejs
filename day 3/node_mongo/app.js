// import { MongoClient } from '../../../../../.cache/typescript/2.6/node_modules/@types/mongodb';
// import { urlencoded } from '../../../../../.cache/typescript/2.6/node_modules/@types/express';

var express = require('express');
var path = require('path');
var bodyparser = require("body-parser");

var mongodb = require('mongodb');
var app = express();
var dbConn = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

app.use(express.static(path.resolve(__dirname,'public')));
app.use(bodyparser.urlencoded({extended:false}));

app.post("/post-feedback",function(req,res){
    dbConn.connect(url,function(err,db){
        if(err){
            console.log("error connecting to database....");
        }
        else{
            console.log("database created..");
            var dbo = db.db('mydb');
            dbo.collection('feedbacks').insertOne(req.body);
            console.log("document inserted...");
            res.send(JSON.stringify(req.body));
            db.close();

        }   
    })
})

app.get("/view-feedbacks",function(req,res){
    dbConn.connect(url,function(err,db){
        if(err){
            throw err;
        }
        else{
            var dbo = db.db('mydb');
            dbo.collection('feedbacks').find({},{_id:0,name:1,email:1,comment:0}).toArray(function(err,result){
                if(err)throw err;
                res.send(JSON.stringify(result));
                console.log(result); 
            });
            console.log("displaying all feedbacks...");
            // res.send(JSON.stringify(req.body));
            db.close();
        }
    })
})

app.listen(3000);



