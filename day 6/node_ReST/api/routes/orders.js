var express = require("express");

var router = express.Router();

var mongoose = require('mongoose');

var Order = require('../models/order');
var Product = require('../models/product')
router.get('/',(req,res,next)=>{
    Order.find()
    .select('product quantity _id')
    .exec()
    .then(docs =>{
        res.status(200).json({
            count:docs.length,
            orders:docs.map(doc=>{
                return {
                    request:"GET",
                    _id:doc._id,
                    product:doc.product,
                    quantity:doc.quantity
                }

            })
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

router.post("/",(req,res,next)=>{
    Product.findById(req.body.productId)
    .then(product=>{
        
    })
    .catch(err=>{
        res.status(500).json({
            message:"Product not found",
            error:err
        })
    })
    

})

router.patch("/:orderId",(req,res,next)=>{
    res.status(200).json({
        message:"order updated...."
    })
})

router.delete("/:orderId",(req,res,next)=>{
    res.status(200).json({
        message:"Order deleted...."
    })
})


module.exports = router;