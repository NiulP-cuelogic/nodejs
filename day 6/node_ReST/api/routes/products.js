var express = require('express');

var router = express.Router();
var mongoose= require("mongoose");
var Product = require('../models/product');

router.get("/",(req,res,next)=>{
        Product.find()
        .exec()
        .then(docs=>{
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
})

router.post("/",(req,res,next)=>{
    
    var product = new Product({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price
    });

    product
    .save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            message:"handling POST requests to /products...",
            createdProduct:result
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
    var updatedProduct =  req.params.productId;
    res.status(200).json({  
        message:"Updated product...",
        updatedProduct:updatedProduct
    })
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