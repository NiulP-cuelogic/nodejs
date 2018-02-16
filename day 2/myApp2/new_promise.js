var prompt = require('prompt');
var promise = require('bluebird');



prompt.start();

var promise1 = function(){
    return new Promise(function(resolve,reject){
        // console.log('dkfok');
        prompt.get(['salary','day'],function(err,result){
            var x = /^[0-9]*$/;
             a = result.salary;
             b = result.day;
            if(a.match(x) && b.match(x)){
                // console.log('sadkjfo')
                resolve(result);
            }
            else{
                reject('invalid salary or day...');
            }   
        })
    })
}

var promise2 = function(x,y){
   return  new Promise(function(resolve,reject){
        //  console.log(x);
        if(y>=1 && y<5){
            var z = x/(5-y);
            resolve(z);
            console.log(z);     
        }
        else if(y>5 && y<=30){
            var z = x/(35-y);
             resolve(z);
            console.log(z);
        }
        else{
            reject('invalid day or salary');
        }
    })
}

promise1().then(function(resolve){
    return promise2(resolve.salary,resolve.day);
    console.log('done..');
}).catch(function(reject){
    console.log(reject);
})

//   var promisesToMake = [promise1,promise2];
//   var promises = Promise.all(promisesToMake);

//   promises.then(function(results){
//       console.log(results);
//   })
