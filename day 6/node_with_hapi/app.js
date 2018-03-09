var Hapi = require('hapi');

var server = new Hapi.Server({"port":4000 , "host":"localhost"});

server.route({
    method:"POST    ",
    path:'/',
    handler:(req,res)=>{
        res("hello world");
    }
})

server.start(err=>{
    if(err) throw err;
    console.log("server listening at " +server.info.uri);
}); 