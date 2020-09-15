
var express = require('express');
var cors = require('cors');  
var app = express()
app.listen(3000)
app.use(cors({  
  origin:['http://localhost:8080'],
  methods:['GET','POST'],
}));
//跨域问题解决方面
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
　next();　
});
app.get('/product',function(req,res){
  if(req){
    res.send('a哈哈哈哈')
  }
})
app.post('/order',function(req,res){
  var data ={
    code:200,
    list:[{id:1,n:'关瑞军'},{id:2,n:'关冰冰'}],
    err:'这是一个错误'
  }
  if(req){
    res.send(data);
  }
})

console.log('app.js')