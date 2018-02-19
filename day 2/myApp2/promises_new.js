var prompt = require('prompt');
prompt.start();

var promise1 = function(){
    return new Promise(function(resolve,reject){
        prompt.get(['first_no','second_no'],function(err,result){
            var x = result.first_no;
            var y = result.second_no;
            var z = /^[0-9]*$/;

            if(result.first_no.match(z) && result.second_no.match(z)){
                resolve('correct...');
            }
            else{
                reject('invalid value...')
            }
            
        })
    })
}