const express = require('express')
const swagerUi = require('swagger-ui-express');
const swagerDoc=require('./swagger.json')

const app = express()
app.use(express.json())


app.get('/',(req,res)=>{
  res.send("Hello Netflix")
})


app.use('./fd',swagerUi.serve,swagerUi.setup(swagerDoc))

app.listen(4000,()=>{
    console.log("listening on port 4000...")
})


