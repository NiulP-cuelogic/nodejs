var express = require("express");

var router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"orders were fetched.."
    })
})

router.post("/",(req,res,next)=>{
    res.status(200).json({
        message:"Particular order fetched...."
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