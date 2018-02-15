var fs = require('fs');
var content = "hey there....";
fs.writeFile('niul.txt',content,(err)=>{
    if(err) throw err;
    console.log('saved!!');
})