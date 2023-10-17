const express= require("express")
// import express from "express";
 const app = express()
const AppRouter=require('./src/routes')
app.use(express.json())
app.use('/',AppRouter)


app.get('/',(req,res)=>{
    res.send(`<h1>WELCOME EXPRES APP</h1>`)
})
 
 
//  app.post('/coupons',(req,res)=>{
//     let data = req.body
//     coupons.push(data)
//     res.send({
//         message:"created"
//     })
//  })
  
 

 app.listen(8000,()=>console.log("8000port"))