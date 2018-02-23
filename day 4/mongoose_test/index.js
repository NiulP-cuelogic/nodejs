var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = "mongodb://localhost/test";
var app  = express();
var path = require('path');
var User = require('./user.model');
if(mongoose.connect(db)){
    console.log("connection established... ");
}

// app.use(express.static(path.resolve(__dirname+"/public")));
app.use(bodyParser.urlencoded({extended:false}));

var user1 = new User({name:"niul",email:"niul.omega",address:"bavdhan"});
user1.save(function(err,result){
    if(err)throw err;
    console.log("user created "+ result);
});

User.find({},function(err,result){
    if(err) throw err;
    console.log("found users .."+result);
});

User.remove({name:"niul"},function(err,result){
    if(err) throw err;
     console.log("okay  "+ result);
    
})


app.listen(3000);