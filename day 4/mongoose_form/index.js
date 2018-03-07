var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
var db = 'mongodb://localhost/allUsers';
var bodyParser = require('body-parser');

if(mongoose.connect(db)){
    console.log("app connected to database on "+ db);
}
var User = require('./user.model');

var user1 = new User({name:'niul',email:'niul.omega',comment:"nfsdf"});
user1.save(function(err,result){
    if(err)throw err;
    // console.log(result);
});

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.resolve(__dirname+'/public')));

app.post("/post-details",function(req,res){
    var user = new User({name:req.body.username,email:req.body.useremail,comment:req.body.comment});
    user.save(function(err,result){
        if(err)throw err;
        res.send(req.body);
        console.log(result);
    })
})

app.get("/view-details",function(req,res){
    User.find({},function(err,result){
        if(err)throw err;
        console.log(result);
        res.send(result);
    })
})

app.get("/update-details",function(req,res){
    res.sendFile(path.join(__dirname+'/public/update-details.html'));

});

app.post("/details",function(req,res){
    User.findOne({name:req.body.username}).exec(function(err,user){
        if(err) throw err;
        else if(!user){
            res.send("user not found..");
        }
        res.sendFile(path.join(__dirname+'/public/details.html'));
        res.send(user); 
    })
});



app.listen(3000);




