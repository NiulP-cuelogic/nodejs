var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var joi = require('joi');
// var employeeSchema = new Schema({
//     name:{type:String,required:true},
//     email:{
//         type:String,
//         validate:function(email){
//             return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
//         }
//     },
//     address:{type:String ,required:true},
//     phone:{
//          type:String,
//          validate:function(phone){
//             return /\d{3}-\d{3}-\d{4}/.test(phone);
//         },
//         message:"{VALUE} is not a valid phone number!",
//         required:true
//     }
//     // phone:{
//     //     validator:{
//     //         validate:function(v){
//     //             return /\d{3}-\d{3}-\d{4}/.test(v);
//     //         },
//     //         message:"{VALUE} is not a valid phone number..",
//     //         required:[true,'Required field..']
//     //     }
//     // }
// });

// module.exports = mongoose.model("Employee",employeeSchema);

// var employeeSchema = new Schema({
//                         name:{type:String, required:true},
//                         email:{type:String ,unique:true,
//                         validate:{
//                             validator:function(v){
//                                 return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
//                             },
//                             message:"{VALUE} is not a valid email..."
//                         }},
//                         address:{type:String , required:true},
//                         phone:{type:String , required:true,
//                         validate:{
//                             validator:function(v){
//                                 return /\d{3}/.test(v);
//                             },
//                             message:"{VALUE} is not a valid phone number..."
//                         } }

                        
// }) 



module.exports = mongoose.model("Employee",schema);