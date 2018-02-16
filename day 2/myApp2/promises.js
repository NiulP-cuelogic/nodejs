var prompt = require('prompt');
prompt.start();
let myCalender = new Promise(function(resolve,reject){

    prompt.get(['salary','day'],function(err,result){
        var x = result.day;
        if(x>=1 && x<=5){
            var z = result.salary/(35-x-30);
            // console.log(z);
            isOkay = true;
            resolve(z);
        }
        else if(x>5 && x<=30){
            var z = result.salary/35-x;
            // console.log(z);
            isOkay = true;
            resolve(z);
        }
        else{
            reject('invalid day or salary..');
            isOkay = false;
        }
    })
    
})


myCalender.then(function(fromResolve){
    console.log('the answer is ' + fromResolve);
}).catch(function(fromReject){
    console.log('invalid day ..');
})