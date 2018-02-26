var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user = new Schema({
    name:String,
    email:String,
    comment:String
});

module.exports = mongoose.model("User",user);