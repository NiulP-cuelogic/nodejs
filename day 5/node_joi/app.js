// import { WSAEDESTADDRREQ } from 'constants';

var express = require('express');
var joi = require('joi');


var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var db = "mongodb://localhost/User";
if(mongoose.connect(db)){
    console.log("Connected to " + db);
}



const schema = joi.object().keys({
                name:joi.string().min(1).required(),
                email:joi.string().email().required(),
                address:joi.string().alphanum().required(),
                phone:joi.number().min(4).required()
})  

joi.validate({name:"niul",email:"niul.omega@gmail.com",address:"fdjsk",phone:3},schema,function(err,result){
    if(err) throw err;
    console.log(result);
});















