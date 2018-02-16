var prompt = require('prompt');

prompt.start();

var promise1 = function(){
    return new Promise(function(resolve,reject){
        prompt.get(['salary','day'],function(err,result){
            var x = result.day;

            if(x<=5 && x>=1){
                var z = result.salary/(35-x-30);
                resolve(z);
            }
            else if(x>5 && x<=30){
                var z  = result.salary/(35-x);
                resolve(z);
            }
            else{
                reject("day or salary is incorrect")
            }
        })
    })
}

promise1().then(function(fromResolve){
    console.log(fromResolve);
}).catch(function(fromReject){
    console.log(fromReject);
})