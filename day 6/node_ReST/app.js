var express = require('express');
var app = express();
var morgan = require('morgan');
var productRoutes = require('./api/routes/products');
var orderRoutes = require('./api/routes/orders');
var bodyParser= require("body-parser"); 
var mongoose = require('mongoose');
var Boom = require('boom');
var db = 'mongodb://localhost/node_rest_shop';

mongoose.connect(db);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",'*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    if(req.method ==="OPTIONS"){
        res.header("Access-Control-Allow-Methods",'PUT,POST,DELETE,PATCH,GET');
        return res.status(200).json({});
    
    }
    next();
})

app.use(morgan('dev')); 


app.use("/products",productRoutes);
app.use("/orders",orderRoutes);


app.use((req,res,next)=>{
    // var error = new Boom('Not found ...');
    // res.send(error);
    // var error= new Error("Not found");
    // error.status = 404;
    // next(error);

    // var err = new Boom("Not found..");
    // res.send(err);
    // Boom.boomify(err,{statusCode:400});
    res.send(Boom.badRequest('invalid query'))  ;
})

// app.use((error,req,res,next)=>{
//     res.status(error.status || 500);
//     res.json({
//         error:{
//             messsage:error.message
//         }
//     })
// });



module.exports = app;