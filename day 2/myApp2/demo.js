var maxTime = Math.floor(Math.random()*1000);

var evenDoubler = function(v,callback){
    var waitTime = Math.floor(Math.random()*(maxTime));
    if(v%2){
        setTimeout(function(){
            callback(new Error("ERROR:  odd input"));
        },waitTime);
    }
    else{
        setTimeout(function(){
            callback(null,v*2,waitTime);
        },waitTime);
    }
}

var handleResults = function(err,results,time){
    if(err){
        console.log(err.message);
    }
    else{
        console.log(results +"("+ time + "ms"+")");
    }
};

evenDoubler((Math.floor(Math.random()*10)),handleResults);
evenDoubler((Math.floor(Math.random()*10)),handleResults);

evenDoubler((Math.floor(Math.random()*10)),handleResults);
evenDoubler((Math.floor(Math.random()*10)),handleResults);
evenDoubler((Math.floor(Math.random()*10)),handleResults);
