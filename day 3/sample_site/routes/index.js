var express = require('express');
var router = express.Router();
var mongodb = require("mongodb");
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
});

router.get("/thelist",function(req,res){
    var MongoClient = mongodb.MongoClient; 
    var url = "mongodb://localhost:27017/sample_site";
    MongoClient.connect(url,function(err,db){
      if(err){
        console.log("Unable to connect...",err);
      }
      else{
        console.log("connection established...", db);
        var collection  = db.collection('students');
        collection.find().toArray(function(err,result){
            if(err){
              res.send(err);
            }
            else if(result.length){
              res.send({'studentlist' :{
                  "studentlist":result
              }});
            }
            else{
              res.send("no documents found...");
            }
            db.close();
        }); 
      }
    }); 
})

router.get("/newstudent",function(req,res){
  res.render('newstudent',{title:"Add student"});
});

router.post("/addstudent",function(req,res){
  var MongoClient = mongodb.MongoClient;
  var url = "mongodb://localhost: 27017/sampsite";

  MongoClient.connect(url,function(err,db){
    if(err){
      console.log("Unable to connect to server...");
    }
    else{
      console.log("connected to server...");

      var collection = db('students ');

      var student1 = {student:req.body.student,street:req.body.street,city:req.body.city,sex:req.body.sex,state:req.body.state};

      collection.insert([student1],function(req,res){
        if(err){
          console.log("unable to connect....")
        }
        else{
          res.redirect("thelist");
        }
        db.close();
      });

    }
  });
})

module.exports = router;
