var http = require('http');
var host = '127.0.0.2   ';
var port = 2000;

var server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/plain"});
    console.log("server started");
    res.write("successfullly started server .. hehe..");
    
    res.end('yes');
           
}); 


server.listen(port,host,(err)=> {
    if(err)
    {
        throw err;
        return console.log("error occured..");
    }
    else{
        console.log("server listening at " + host + ":" + port);
    }
});