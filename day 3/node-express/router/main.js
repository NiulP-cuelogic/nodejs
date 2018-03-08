module.exports = function(app){
    app.get("/",function(req,res){
        res.sendFile("index.html");
    });
    app.get("/about.html",function(req,res){
        res.sendFile('about.html');
    });
}

