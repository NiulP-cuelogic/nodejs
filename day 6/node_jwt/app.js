var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');

app.get("/api",(req,res)=>{
    res.json({
        message:'Welcome to the api...'
    });
});

app.post("/api/posts",verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message:"post created.....",
                authData
            });
        }
    })
    
});

app.post("/api/login",(req,res)=>{
    //Mock user
    const  user={
        id:2,
        username:"niul",
        email:"niul.255@gmail.com"
    }




    jwt.sign({user:user},"secretkey",(err,token)=>{
        res.json({
            token
        });
        // res.send(token);
    });
})

// Format of token
// Authorization: Bearer <access_token>


//verify token

function verifyToken(req,res,next){
    //Get auth header value

    const  bearerHeader = req.headers['authorization'];
    //check if bearer is undefined
    if(typeof bearerHeader !=='undefined'){
        //Split at the space
        const bearer = bearerHeader.split(' ');
        // get token from array
        const bearerToken = bearer[1];
        // set the token 
        req .token = bearerToken;
        // next middleware
        next();
    }else{
        res.sendStatus(403);
    }
}

app.listen(5000,()=>{
    console.log("server started on port 5000");
})

