const express= require("express")
// import express from "express";
 const app = express()
 const dotenv=require("dotenv")
 dotenv.config()
 const PORT = process.env.PORT
const AppRouter=require('./src/routes')
app.use(express.json())
app.use('/',AppRouter)


 
 
 
//  app.post('/coupons',(req,res)=>{
//     let data = req.body
//     coupons.push(data)
//     res.send({
//         message:"created"
//     })
//  })
  
 

 app.listen(Number(PORT),()=>console.log(`SERVER CONNECTED IN ${PORT}`))