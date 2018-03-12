var express = require('express');
// var myError = new Boom("Not found ...");
var router = express.Router();
var mongoose= require("mongoose");
var Product = require('../models/product');
var multer =require('multer');

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null,new Date().toISOString()+file.originalname);
    }
})

var fileFilter = (req,file,cb)=>{
    if(file.mimetype==="image/jpeg" || file.mimetype==="image/png"){
        cb(null,true);
    }else{
        cb(null,true);
    }
  
    
}

var upload = multer ({storage:storage,
                      fileFilter:fileFilter
                    });

router.get("/",(req,res,next)=>{
        Product.find()
        .select('name price _id productImage')
        .exec()
        .then(docs=>{
            // console.log(docs);
            var response = {
                count:docs.length,
                products:docs.map(doc =>{
                    return {
                        name:doc.name,
                        price:doc.price, 
                        _id:doc._id,
                        productImage:doc.productImage,
                        request:{
                            type:"GET",
                            url:"http://localhost:3000/products/" +doc._id
                        }
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err   
            })
            // Boom.boomify(myError,{statusCode:400});
        })
})

router.post("/",upload.single('productImage'),(req,res,next)=>{
    console.log(req.file);  
    var product = new Product({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price,
        productImage:req.file.path
    });

    product
    .save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            message:"Created the product..",
            createdProduct:{
                name:result.name,
                price:result.price,
                id:result._id,
                request:{
                    type:"POST",
                    url:"http://localhost/products/"+ result._id,
                    image:result.productImage
                }
            }
        }); 
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    
});

router.get("/:productId",(req,res,next)=>{
    var id = req.params.productId;
    
    Product.findById(id)
    .exec()
    .then(doc=>{
        console.log("From database "+doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({
                message:"No valid entry found for given object id.."
            })
        }
        res.status(200).json(doc);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({error:err}); 
    });
})


router.patch("/:productId",(req,res,next)=>{
    var id = req.params.productId;
    var updateOps = {};
    for(var ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Product.update({_id:id},{$set:updateOps})
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    // var updateOps = {};
    
})

router.delete("/:productId",(req,res,next)=>{
    var id = req.params.productId;
    Product.remove({_id:id})
    .exec()
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


module.exports = router;