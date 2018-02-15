var prompt = require('prompt');
var fs =  require('fs');
 
  // Start the prompt 
 
  prompt.start();
  prompt.get(['salary', 'day'], function (err, result) {
  var x = result.day;
//   var y = result.day + 30;
  var z;
  if(x>=1 && x<=4)
  {
        z = result.salary/(35-x-30);
        console.log("You can spend "+z.toFixed(2) + " bucks per day on an average.....");
        fs.appendFile('test.txt',z.toFixed(2)+"\n",(err)=>{
            if(err) throw err;
            console.log("saved!!"); 
        })
  }
  else if(x==5)
  {
      console.log("");
  }
  else if(x>5 && x<=30){
        z = result.salary/(35-x);
        console.log("You can spend "+z.toFixed(2) + " bucks per day on an average.....");
        fs.appendFile('test.txt',z.toFixed(2)+"\n",(err)=>{
            if(err) throw err;
            console.log("saved!!");
        })
  }
  else {
      console.log("invalid day fucker...");
  }
  });