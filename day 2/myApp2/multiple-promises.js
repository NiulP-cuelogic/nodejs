var prompt = require('prompt');
prompt.start();
var validation = function(x,y){
    
        if(y>=1 && y<5){
            var z = x/(5-y);
            return z;
        }
        else if(y>5 && y<=30){
            var z =x/(30-y);
            return z;
        }
        else{
            return -1;
        }
}

// var promise1 = function(){
//     prompt.get(['salary','day'],function(err,result){
//         return new Promise(function(resolve,reject){
//             var x = /^[0-9]*$/;
//             if(result.salary.match(x) && result.day.match(x)){
//                 var y = validaion(result.salary,result.day);
//                 resolve(y);
//             }
//             else{
//                 reject('invalid day or salary');
//             }
//         })
//     })
// }

var promise1 = new Promise(function(resolve,reject){
    prompt.get(['salary','day'],function(err,result){
        var x = /^[0-9]*$/;
        if(result.salary.match(x) && result.day.match(x)){
            var y = validation(result.salary,result.day);
            resolve(y);
        }
        else{
            reject('inalid day or salary..')
        }
    })
})

promise1.then(function(fromResolve){
    console.log(fromResolve);
}).catch(function(fromReject){
    console.log(fromReject);
})