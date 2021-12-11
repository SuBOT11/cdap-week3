const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const request = require('request')
const port = 3060
const app = express();
app.use(bodyParser.json());
app.post('/confirmOrder',(req,res)=>{
  res.send('your order has been placed.');
  console.log(req.body)
})
app.listen(port,()=>{
  console.log('Server Connected at :',port);
})
