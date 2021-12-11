
const express = require('express')
const app = express();
const data = require('./products.json')
const axios = require('axios');
const model = require('./index')
var dataArr = data.items;
app.set('view engine','ejs')
const path = require('path')
const bodyparser = require('body-parser')
const request = require('request');
const { fileLoader, render } = require('ejs');
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}))
const port = 3030
app.use(express.static("public"))

app.get('/',(req,res)=>{
  res.render('index',{dataArr});
})

app.get('/order/:id',(req,res)=>{
 
  dataArr.forEach(data => { 
   if(req.params.id === data.sys.id){
     res.render('item',{item : data.fields , id: data.sys.id })
     
   }
    
  });
})

app.post('/order-api/:id',(req,res)=>{
   console.log(req.body);
  
 
    var status =  model.sendReq();
    
    
    if(status === 200){
      res.render('order',{status : status, bodyData : req.body})

    }else{
      
      res.sendFile(__dirname + '/public/order.html')
      

    }
  
  
})
app.get('/od:id',(req,res)=>{
  res.send('data sent');
 
  
})


app.listen(port,()=>{
  console.log('Server Connected at :',port);
})
