var express = require('express');
var app = express();
var mongoose  = require('mongoose');
var bodyParser = require('body-parser'); 
var port = 3000;
var Book = require('./Book.model');
var db = "mongodb://localhost/demo";
// var Schema = mongoose.Schema;
var router  = express.Router();
mongoose.connect(db);

mongoose.connection.on('connected',function(){
    console.log("mongoose connected on "+db);
    var book1 = new Book({title:"niul",author:"niyl",category:"fiction"});
    book1.save(function(err,res){
        if(err){
            throw err; 
        }
        else{
            console.log(res);
        }
    });
});

mongoose.connection.on('error',function(){
    console.log("not connected....");
})

// app.listen(port,function(){
//     console.log("server running at port "+ port);
// });

        