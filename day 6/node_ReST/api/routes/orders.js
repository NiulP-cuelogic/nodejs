
var express = require("express");
var Boom = require('boom');
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
        if(!product){
            res.send(Boom.badRequest("Product not found..."));
        }
        var order = new Order({
            _id:mongoose.Types.ObjectId(),
            quantity:req.body.quantity,
            product:req.body.productId
        });
     return order.save()
     
     .then(result=>{
        console.log(result);
        res.status(200).json({
            message:"Order stored",
            createdOrder:{
                _id:result._id,
                product:result.product,
                quantity:result.quantity
            },
            request:{
                type:"POST",
                url:"http://localhost/orders/"+result._id
            }
        })
    })
    })
    .catch(err=>{
         res.send(Boom.badRequest("Product not found..."));
    })
    // var order = new Order({
    //     _id:mongoose.Types.ObjectId(),
    //     quantity:req.body.quantity,
    //     product:req.body.productId
    // });
    // order
    // .save()
    // .then(result=>{
    //     console.log(result);
    //     res.status(200).json({
    //         message:"Order stored",
    //         createdOrder:{
    //             _id:result._id,
    //             product:result.product,
    //             quantity:result.quantity
    //         },
    //         request:{
    //             type:"POST",
    //             url:"http://localhost/orders/"+result._id
    //         }
    //     })
    // })

    

})

router.get("/:orderId", (req, res, next) => {
    Order.findById(req.params.orderId)
      .exec()
      .then(order => {
        if (!order) {
          return res.status(404).json({
            message: "Order not found"
          });
        }
        res.status(200).json({
          order: order,
          request: {
            type: "GET",
            url: "http://localhost:3000/orders"
          }
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });



router.patch("/:orderId",(req,res,next)=>{
    res.status(200).json({
        message:"order updated...."
    })
})

router.delete("/:orderId",(req,res,next)=>{
    Order.remove({_id:req.params.orderId})
    .exec()
    .then(result=>{
        res.status(200).json({
            message:"Order deleted",
            request:{
                type:"DELETE",
                body:{productId:"ID" , quantity:"quantity" }
            }
        })
    })
    .catch(err=>{
        res.send(Boom.badRequest('Order not found..')); 
    })
})


module.exports = router;