const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
      res.send('ECS demo');
})

app.get('/health',(req,res)=>{
      res.status(200).send('ECS is healthy');
})

app.listen(port,()=>{
      console.log("server is listening");
})