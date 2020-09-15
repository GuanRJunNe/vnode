var express = require('express');
var router = express.Router();
router.get('/product',function(req,res){
  if(req){
    res.send("过来了")
  }
})
module.exports =router