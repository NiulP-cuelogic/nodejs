module.exports = function(app){
    app.get("/",function(req,res){
        res.render('index.html');
    });
    app.get("/about.html",function(req,res){
        res.render('about.html');
    });
}

