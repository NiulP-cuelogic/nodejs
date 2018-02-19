var prompt = require('prompt');

prompt.start();

var promise1 = function(){
    return new Promise(function(resolve,reject){
        prompt.get(['salary','day'],function(err,result){
            var x = result.salary;
            var y = result.day;
            var z =  /^[0-9]*$/;

            if(x.match(z) && y.match(z))
            {
                resolve(result);
            }
            else{
                reject('invalid day or salary');
            }
            
        })
    })
}

var promise2 = function(x,y){
    // console.log('x is ' + x);
    return new Promise(function(resolve,reject){
        if(y>=1 && y<5){
            var z = x/(5-y);
            resolve(z);
        }
        else if(y<=30 && y>5){
            var z = x/(35-y);
            resolve(z);
        }
        else{
            reject('day not within range...');
        }
    })
}



promise1().then(function(resolve){
    return promise2(resolve.salary,resolve.day);
    
}).then(function(resolve){
    console.log(resolve);
}).catch(function(fromReject){
    console.log(fromReject);
})




