var express = require('express');
var app = express();

require("./router/main")(app);
app.set("views",__dirname+"/views");
app.set('view engine',"ejs");
app.engine('html',require('ejs').renderFile);

var server = app.listen(3000,function(){
    console.log("express is running on port 3000...");
    var host = server.address().address;
    var port = server.address().port;
    console.log('server running at http://%s:   %s',host,port);
});     