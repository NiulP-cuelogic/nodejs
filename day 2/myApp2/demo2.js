var maxTime = Math.floor(Math.random()*1000);

var square = function(x,callback){
    var z = /^[0-9]*$/;
    console.log(x);
    var k = x.match(z);
    // var val = x;
    if(k){  

        setTimeout(function(){
            callback(null,x*x,maxTime);
        },maxTime)
    }
    else{
        setTimeout(function(){
            callback(new Error("ERROR: Invalid input.."));
        },maxTime)
    }
}

var handler = function(err,result,time){
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Square is : "+ result+"("+ time +")");
    }
}

square('lfkgjhgktgthk',handler);

var prompt = require('prompt');

prompt.get(['number'],function(err,result){
    var x = result.number;
    var z = /^[0-9]*$/;
    var k = x.match(z);
    if(k){
        console.log('fine');
    }
    else{
        console.log("Not a number....")
    }

})

