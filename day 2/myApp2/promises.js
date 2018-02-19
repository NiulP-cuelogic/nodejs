var prompt = require('prompt');
prompt.start();
let myCalendar = new Promise(function(resolve,reject){

    prompt.get(['salary','day'],function(err,result){
        var x = result.day; 
        if(x>=1 && x<=5){
            var z = result.salary/(35-x-30);
           
            
            resolve(z);
        }
        else if(x>5 && x<=30){
            var z = result.salary/(35-x);
          
            
            resolve(z);
        }
        else{
<<<<<<< HEAD
            reject('invalid day or salary..');
            isOkay = false;
=======
            reject('invalid day');
            
>>>>>>> 2c9925773ea8ef21eabed1e12818d915661e3ff2
        }
    })
    
})


myCalendar.then(function(fromResolve){

     console.log('the answer is ' + fromResolve.toFixed(2));
}).catch(function(fromReject){
    console.log(fromReject + ' is an invalid day ..');
})

// you get z from the fromResolve argument 