var express = require('express');
var path = require('path');
// var app = express.app();
var bodyParser = require("body-parser");
var app = express();
var mongoose =  require('mongoose');
var employee = require("./controllers/EmployeeController.js");

var db = 'mongodb://localhost/Employee';

if(mongoose.connect(db)){
    console.log('connection established with the database..');

}


// app.set('view engine', 'ejs');

// app.use("/employees",employees);

app.get("/",employee.list);
app.get("/show/:id",employee.show);

app.get("/create",employee.create);
app.post("/save",employee.save);

app.get("/edit/:id",employee.edit);
app.post("/update/:id",employee.update);

app.post("/delete/:id",employee.delete);

app.listen(3000);