var prompt = require('prompt');

prompt.start();

var myfun=new Promise (function(resolve,reject){
prompt.get(['firstno','secondno'],function(err,result){
    if(err) throw err;
    else
    {
    resolve(result);
    // console.log(result.firstno);
    // console.log(result.secondno);
    }
})
});

var myvalues=function(a,b){
 new Promise(function(){
     console.log("values from promoise1:");
    console.log(a);
    console.log(b);
    var a1=parseInt(a,10);
    var b1=parseInt(b,10);
   var  result=a1+b1;
    console.log(a1);
    console.log(b1);
    console.log('=>:',result);
});
};

myfun.then(function(resolve){
   
    return myvalues(resolve.firstno,resolve.secondno);
    console.log("Executed successfully");
}).catch(function(fromReject){
    console.log(fromReject);
});