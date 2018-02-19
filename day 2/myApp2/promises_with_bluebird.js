var promise = require('bluebird');
var prompt = require('prompt');
var join = require('promise-join');
var fs = require('fs');

prompt.start();

// var promisifiedRead = promise.promisify(fs.readFile);

// promisifiedRead('bluebird.txt').then(function(buffer){
//     console.log('promisifiedFile : ' + buffer.toString());
// });

// var myCalendar = function(){
//     prompt.get(['salary','day'],function(err,result){
//         var x =result.day;
//         if(x>=1 && x<5){
//             var z = result.salary/(5-x);
//             console.log(z);
//         }
//         else if(x>6 && x<=30){
//             var z = result.salary/(35-x);
//             console.log(z);
//         }   
//         else{
//            console.error('there is an error in the input ....',err);
//         }
//     })
// }


//

// var promisifiedCalendar = promise.promisify(myCalendar);

// promisifiedCalendar().then(function(fromResolve){
//     console.log(fromResolve);
// })

var promise1 = function(){
    prompt.get(['salary','day'],function(err,result){
        var x = result.day;
        var y = result.salary;
        var z = /^[0-9]*$/;

        if(x.match(z) && y.match(z)){
            return result;
        }
        else{
            return -1;
        }
    })
}

var promise2 = function(x,y){
    
       
         if(y>=1 && y<5){
             var z = x/(5-y);
             console.log(z);     
         }
         else if(y>5 && y<=30){
             var z = x/(35-y);
             // resolve(z);
             console.log(z);
         }
         else{
             console.error('invalid day or salary');
         }
 }

 var join  = promise.join();    

join(promise1,promise2).spread(result,z);

