var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var User = require('../models/user');
var Boom = require('boom');
// var multer = require('multer');

var bodyParser = require('body-parser');

router.post('/signup',(req,res,next)=>{
        // res.send("hello ...");
        User.find({email:req.body.email})
        .exec()
        .then(user=>{
            if(user.length>=1){
                res.status(200).json({message: "email  exists..."})
            }else{
                  
            }
            
        })
        bcrypt.hash(req.body.password,10,(err,hash)=> {
                if(err){
                    Boom.badRequest("Error while storing the password..");
                }else{  
                    var user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email:req.body.email,
                        password:hash
                    });
                    user
                    .save()
                    .then(result=>{
                        res.status(201).json({
                            message:"user created..."
                        })
                    })
                    .catch(err=>{
                        Boom.badRequest("User not created..")
                    })
                }
        })

})

router.post("/login",(req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length<1){
             return res.status(401).json({
                 message:"user does not exist.."
             })
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(err){
                    Boom.badRequest("Authentication failed...");
                }
            if(result){
                return res.status(200).json({
                    message:"Auth successful.."
                }) 
            };
    })
    .catch(err=>{
        Boom.badRequest("Invalid request..")
    })
})
})

router.delete('/:userId',(req,res,next)=>{
    User.remove({_id:req.params.userId})
    .exec()
    .then(result=>{
        res.status(200).json({
            message:"User deleted..."
        })
    })
    .catch(err=>{
        Boom.badRequest("User not deleted...")
    })

})

module.exports = router;