// import { Schema } from 'mongoose';

var express = require('express');
var app = express();
var joi = require('joi');

var bodyParser = require("body-parser");
var path = require('path');
var mongoose = require('mongoose');
var path = require('path');
//var Employee = require('./models/employee.model');

var db = "mongodb://localhost/Employee";

if(mongoose.connect(db)){
    console.log('Connection established with the database...');
}
else{
    console.log("ERROR: Connection failed..");
}

// var user1 = new Employee({name:'niul',email:"niul.omega@gmail.com",address:"bavdhan"});

//app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static(path.resolve(__dirname + '/views')));

// app.post("/post-details",function(req,res){
    // res.sendFile(path.join(__dirname + '/views/index.html'));
    // var user =  new Employee({name:req.body.name,email:req.body.email,address:req.body.address,phone:req.body.phone});

    var schema = joi.object().keys({
        name:joi.string().min(1).required(),
        email:joi.string().email(),
        address:joi.string().alphanum().required(),
        phone:joi.number().min(3).required()
})

    joi.validate({name:'niul', email:'vksd',address:"dslmfs", phone:8},schema,function(err){
        if(err)
        throw err;
        else
        console.log('hi...')
        // user.save(function(err,result){
        //     if(err) res.send(err) ;
        //     console.log(result);    
        //     res.send(result);
        //     });
    });
    
// });

// var user =  new Employee({name:req.body.name,email:req.body.email,address:req.body.address});
//     user.save(function(err,result){
//         if(err) res.send(err);
//         console.log(result);
//         res.send(result);
// });

// user1.save(function(err,result){
//     console.log(err, "err"); 
//     if(err) throw err;
//     console.log(result);
// })

app.listen(3000);