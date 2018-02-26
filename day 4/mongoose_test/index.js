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

// var promise1 = new Promise(function(reject,resolve){
//     user1.save(function(err,result){
//         if(err) reject(err);
//         resolve(result);
//     });
// });

// var promise2 = new Promise(function(reject,resolve){
//     User.find({},function(err,result){
//         if(err)reject(err);
//         resolve(result);
//     });
// });

// promise1.then(function(fromResolve){
//     return promise2(fromResolve);
// }).then(function(fromResolve){
//     console.log(fromResolve);
// }).catch(function(fromReject){
//     console.log(fromReject);
// })

app.listen(3000);