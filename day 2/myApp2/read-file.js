var fs = require('fs');

 var content = 'hi niul';

var name = fs.readFileSync('test.txt','utf8');
console.log(name);  

if(name.trim()==content){
    console.log('matched');
}
else{
    console.log('not matched');
}




    