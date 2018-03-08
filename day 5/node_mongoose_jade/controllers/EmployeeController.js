var mongoose = require('mongoose');

var Employee = require('./../models/employee.model'); 

var employeeController = {};

employeeController.list = function(req,res){
    Employee.find({}).exec(function(err,employees){
        if(err) throw err;
        //res.render("/views/employees/index",{employees:employees})
    });
}

employeeController.show = function(req,res){
    Employee.findOne({_id:req.params.id}).exec(function(err,employee){
        if(err) throw err;
        res.render("/views/employees/show",{employee:employee});
    });
}

employeeController.create = function(req,res){
    res.render('/views/employees/create');
}


employeeController.save = function(req,res){
    var employee = new Employee(req.body);
    employee.save(function(err,result){
        if(err){
            console.log(err);
        }
        else{
            console.log("employee created...");
            res.redirect('/employees/show/'+employee._id);
        }
    });
}

employeeController.edit = function(req,res){
    Employee.findOne({_id:req.params.id}).exec(function(err,employee){
        if(err){
            throw err;
        }
        else{
            res.render("/views/employees/edit",{employee:employee});
        }
    });
}

employeeController.update = function(req,res){
    Employee.findByIdAndUpdate(req.params.id,{$set:{name:req.body.name,email:req.body.email,
    address:req.body.address,position:req.body.position,salary:req.body.salary}},{new:true},
function(err,employee){
    if(err){
        throw err;
        res.redirect('/views/employees/edit',{employee:req.body});
    }
    else{
        res.redirect('/employees/show/'+employee._id);
    }
});
}

employeeController.delete = function(req,res){
    Employee.remove({_id:req.params.id},function(err){
        if(err){
            throw err;
        }
        else{
            res.redirect("/employees");
        }
    })
}





module.exports = employeeController;