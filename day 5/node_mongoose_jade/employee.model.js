var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name:String,
    email:String,
    address:String,
    position:String,
    salary:Number
});

module.exports = mongoose.model("Employee",employeeSchema);

